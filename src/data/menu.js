// Cardápio real transcrito do PDF oficial fornecido pelo Gyros Lanches.
const menu = [
  {
    category: 'Xis e torradas',
    icon: '🍔',
    items: [
      { id: 'xis-salada', name: 'Xis Salada', description: 'Pão, bife de carne, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 24 },
      { id: 'xis-bacon-bife', name: 'Xis Bacon com Bife', description: 'Pão, bife de carne, bacon, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 32 },
      { id: 'xis-coracao', name: 'Xis Coração', description: 'Pão, coração, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 28 },
      { id: 'xis-calabresa', name: 'Xis Calabresa', description: 'Pão, calabresa, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 27 },
      { id: 'xis-frango', name: 'Xis Frango', description: 'Pão, frango desfiado, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 26 },
      { id: 'xis-frango-cheddar', name: 'Xis Frango Cheddar', description: 'Pão, frango, requeijão cheddar e mussarela, ovo, milho, ervilha, tomate, alface e maionese Gyros.', price: 29 },
      { id: 'xis-strogonoff', name: 'Xis Strogonoff', description: 'Pão, strogonoff, muçarela, presunto, ovo, milho, ervilha, catchup, mostarda, alface, maionese Gyros, requeijão e batata palha. Vinagrete opcional.', price: 30 },
      { id: 'xis-gyros', name: 'Xis Gyros', description: 'Pão, bife de carne, bacon, coração, calabresa, frango, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 40, featured: true },
      { id: 'xis-vegetariano', name: 'Xis Vegetariano', description: 'Pão, queijo, catchup, mostarda, cebola, pimentão, alface, tomate, maionese Gyros, ovo, milho e ervilha.', price: 24 },
      { id: 'xis-frango-bacon', name: 'Xis Frango com Bacon', description: 'Pão, frango desfiado, bacon, queijo, presunto, ovo, catchup, mostarda, alface, tomate, maionese Gyros, milho e ervilha.', price: 35, badge: 'Novo' },
      { id: 'torrada-simples', name: 'Torrada Simples', description: 'Pão, presunto, queijo e maionese.', price: 15 },
      { id: 'torrada-bife-ovo', name: 'Torrada Bife e Ovo', description: 'Pão, queijo, presunto, bife, ovo e maionese.', price: 21 },
    ],
  },
  {
    category: 'Para compartilhar',
    icon: '🍟',
    items: [
      {
        id: 'tabua-completa',
        name: 'Tábua completa',
        description: 'Batata frita, coração, frango, carne, calabresa, queijo muçarela ralado, anéis de cebola, ovo de codorna e pepino.',
        variants: [
          { label: '1 pessoa', price: 45 },
          { label: '2 pessoas', price: 80 },
          { label: '4 pessoas', price: 110 },
        ],
      },
      {
        id: 'tabua-petiscos',
        name: 'Tábua de petiscos',
        description: 'Batata frita, polenta, queijo muçarela ralado e anéis de cebola.',
        price: 55,
      },
    ],
  },
  {
    category: 'Pastéis',
    icon: '🥟',
    items: [
      { id: 'pastel-carne', name: 'Carne', price: 18 },
      { id: 'pastel-carne-ovo', name: 'Carne com Ovo', price: 20 },
      { id: 'pastel-carne-requeijao', name: 'Carne com Requeijão', price: 20 },
      { id: 'pastel-carne-cheddar', name: 'Carne com Cheddar', price: 20 },
      { id: 'pastel-frango', name: 'Frango', price: 18 },
      { id: 'pastel-frango-cheddar', name: 'Frango com Cheddar', price: 20 },
      { id: 'pastel-frango-requeijao', name: 'Frango com Requeijão', price: 20 },
      { id: 'pastel-strogonoff', name: 'Strogonoff de Carne', price: 23 },
      { id: 'pastel-coracao', name: 'Coração', price: 21 },
      { id: 'pastel-coracao-acebolado', name: 'Coração Acebolado', price: 22 },
      { id: 'pastel-coracao-queijo', name: 'Coração com Queijo', price: 22 },
      { id: 'pastel-calabresa', name: 'Calabresa', price: 18 },
      { id: 'pastel-calabresa-queijo', name: 'Calabresa com Queijo', price: 20 },
      { id: 'pastel-sonho-valsa', name: 'Sonho de Valsa', price: 18 },
      { id: 'pastel-ouro-branco', name: 'Ouro Branco', price: 18 },
      { id: 'pastel-goiabada-queijo', name: 'Goiabada com Queijo', price: 18 },
    ],
  },
  {
    category: 'Dogs',
    icon: '🌭',
    items: [
      {
        id: 'dog-salsicha',
        name: 'Dog Salsicha',
        description: 'Molho, salsicha, milho, ervilha, catchup, mostarda, maionese, batata palha e queijo muçarela ralado.',
        variants: [{ label: 'M', price: 19 }, { label: 'G', price: 24 }],
      },
      {
        id: 'dog-frango',
        name: 'Dog Frango',
        description: 'Molho, frango, milho, ervilha, catchup, mostarda, maionese, batata palha e queijo muçarela ralado.',
        variants: [{ label: 'M', price: 21 }, { label: 'G', price: 26 }],
      },
      {
        id: 'dog-calabresa',
        name: 'Dog Calabresa',
        description: 'Molho, calabresa, milho, ervilha, catchup, mostarda, maionese, batata palha e queijo muçarela ralado.',
        variants: [{ label: 'M', price: 22 }, { label: 'G', price: 27 }],
      },
    ],
  },
  {
    category: 'Porções',
    icon: '🍟',
    items: [
      { id: 'batata-frita', name: 'Batata Frita', variants: [{ label: 'P', price: 16 }, { label: 'M', price: 22 }, { label: 'G', price: 28 }] },
      { id: 'polenta', name: 'Polenta', variants: [{ label: '500 g', price: 20 }, { label: '1 kg', price: 26 }] },
      { id: 'aneis-cebola', name: 'Anéis de Cebola à Milanesa', price: 24 },
    ],
  },
  {
    category: 'Bebidas',
    icon: '🥤',
    items: [
      { id: 'cerveja-budweiser', name: 'Cerveja Latão Budweiser', price: 10 },
      { id: 'cerveja-litro', name: 'Cerveja Litro Polar | Brahma', price: 17 },
      { id: 'refri-lata', name: 'Refrigerante Lata', price: 7 },
      { id: 'refri-600', name: 'Refrigerante 600 ml', price: 9 },
      { id: 'refri-litro', name: 'Refrigerante 1 litro', price: 12 },
      { id: 'refri-2l', name: 'Refrigerante 2 litros', price: 16 },
      { id: 'agua', name: 'Água com ou sem gás', price: 5 },
      { id: 'chopp-400', name: 'Chopp 400 ml', price: 12 },
      { id: 'chopp-3', name: '3 Chopps', price: 30, badge: 'Promo' },
    ],
  },
]

export default menu
