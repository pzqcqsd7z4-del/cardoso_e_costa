<?php $pageTitle = $pageTitle ?? 'Cardoso & Costa'; ?>
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?= htmlspecialchars($pageTitle) ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<header class="nav" id="nav">
  <div class="nav__inner">
    <a href="index.php" class="nav__logo">Cardoso <span>&amp;</span> Costa</a>
    <nav class="nav__links">
      <a href="portfolio.php">Portfolio</a>
      <a href="empresa.php">Empresa</a>
      <a href="contacto.php">Contacto</a>
    </nav>
    <a href="contacto.php" class="btn btn--dark nav__cta">Enquire Now</a>
    <button class="nav__burger" id="navBurger" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
