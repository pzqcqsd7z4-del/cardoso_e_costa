<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text($value, int $maxLength): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '');
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'message' => 'Método não permitido.']);
}

$data = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'message' => 'Pedido inválido.']);
}

// Campo invisível: bots costumam preenchê-lo, pessoas não.
if (clean_text($data['website'] ?? '', 200) !== '') {
    respond(200, ['ok' => true]);
}

$name = clean_text($data['nome'] ?? '', 120);
$email = clean_text($data['email'] ?? '', 190);
$phone = clean_text($data['telefone'] ?? '', 40);
$interestKey = clean_text($data['interesse'] ?? '', 60);
$message = clean_text($data['mensagem'] ?? '', 2000);

$projects = [
    'moradias-regadas' => 'Moradias de Regadas',
    'edificio-bismark' => 'Edifício Bismark',
    'casas-das-oliveiras' => 'Casas das Oliveiras',
    'crasto-living' => 'Edifício Crasto Living',
];

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    respond(422, ['ok' => false, 'message' => 'Preencha corretamente o nome, o email e a mensagem.']);
}

if (!array_key_exists($interestKey, $projects)) {
    respond(422, ['ok' => false, 'message' => 'Selecione um empreendimento válido.']);
}

// Limita envios repetidos do mesmo endereço IP a um por minuto.
$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = sys_get_temp_dir() . '/cardoso-contact-' . hash('sha256', $clientIp);
$rateHandle = @fopen($rateFile, 'c+');
if ($rateHandle !== false && flock($rateHandle, LOCK_EX)) {
    $lastSubmission = (int) trim((string) stream_get_contents($rateHandle));
    if ($lastSubmission > 0 && time() - $lastSubmission < 60) {
        flock($rateHandle, LOCK_UN);
        fclose($rateHandle);
        respond(429, ['ok' => false, 'message' => 'Aguarde um minuto antes de enviar outro pedido.']);
    }

    rewind($rateHandle);
    ftruncate($rateHandle, 0);
    fwrite($rateHandle, (string) time());
    fflush($rateHandle);
    flock($rateHandle, LOCK_UN);
    fclose($rateHandle);
}

$project = $projects[$interestKey];
$recipient = 'geral@cardosoecosta.pt';
$subject = 'Novo pedido de informações — ' . $project;
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$body = implode("\r\n", [
    'Foi recebido um novo pedido através do site Cardoso & Costa.',
    '',
    'Nome: ' . $name,
    'Email: ' . $email,
    'Telefone: ' . ($phone !== '' ? $phone : 'Não indicado'),
    'Empreendimento: ' . $project,
    '',
    'Mensagem:',
    $message,
    '',
    'Data: ' . date('d/m/Y H:i:s'),
    'IP: ' . $clientIp,
]);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Site Cardoso & Costa <geral@cardosoecosta.pt>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION,
]);

if (!mail($recipient, $encodedSubject, $body, $headers)) {
    respond(500, ['ok' => false, 'message' => 'Não foi possível enviar o pedido. Tente novamente mais tarde.']);
}

respond(200, ['ok' => true]);
