const range = (n) => Array.from({ length: n }, (_, i) => i + 1)

export const projects = {
  'moradias-regadas': {
    title: 'Moradias de Regadas',
    eyebrow: '2ª Fase',
    meta: ['13 Moradias T3'],
    hero: '/images/moradias-regadas/hero.jpg',
    gallery: range(15).map((n) => {
      const names = [
        'exterior-01', 'exterior-02', 'exterior-03', 'exterior-04', 'exterior-garagem', 'exterior-piscina',
        'interior-sala-01', 'interior-sala-02', 'interior-jantar', 'interior-hall', 'interior-casa-banho-01',
        'interior-cozinha', 'interior-quarto', 'interior-closet', 'interior-casa-banho-02',
      ]
      return `/images/moradias-regadas/moradia-1/${names[n - 1]}.jpg`
    }),
    plans: [
      { label: 'Plantas - Todas as Frações', file: '/images/moradias-regadas/plantas-todas-fracoes.pdf' },
    ],
  },
  'edificio-bismark': {
    title: 'Edifício Bismark',
    eyebrow: 'Concluído',
    meta: ['Apartamentos T2'],
    hero: '/images/edificio-bismark/hero.jpg',
    gallery: range(31).map((n) => `/images/edificio-bismark/foto-${String(n).padStart(2, '0')}.jpg`),
    plans: ['A', 'B', 'C', 'D', 'E', 'F'].map((l) => ({
      label: `Fração ${l}`,
      file: `/images/edificio-bismark/Planta Fração ${l} - Edificio Bismark.pdf`,
    })),
  },
  'casas-das-oliveiras': {
    title: 'Casas das Oliveiras',
    eyebrow: 'Em Construção',
    meta: ['20 Frações T1+1'],
    hero: '/images/casas-das-oliveiras/hero.jpg',
    gallery: range(7).map((n) => `/images/casas-das-oliveiras/foto-${String(n).padStart(2, '0')}.jpg`),
    plans: [
      ['1.1', 'A'], ['1.2', 'B'], ['1.3', 'C'], ['1.4', 'D'], ['1.5', 'E'],
      ['2.1', 'F'], ['2.2', 'G'], ['2.3', 'H'], ['2.4', 'I'], ['2.5', 'J'],
      ['3.1', 'K'], ['3.2', 'L'], ['3.3', 'M'], ['3.4', 'N'], ['3.5', 'O'],
      ['4.1', 'P'], ['4.2', 'Q'], ['4.3', 'R'], ['4.4', 'S'], ['4.5', 'T'],
    ].map(([n, l]) => ({
      label: `Fração ${l}`,
      file: `/images/casas-das-oliveiras/${n}_Fração ${l}.pdf`,
    })),
  },
}
