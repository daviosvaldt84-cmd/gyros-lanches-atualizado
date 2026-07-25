// Dados centrais do negócio — edite aqui para atualizar o site inteiro.
const business = {
  name: 'Gyros Lanches',
  tagline: 'Trabalhamos com lanches variados e bebidas!',
  phoneDisplay: '(51) 98606-5826',
  phoneWhatsapp: '5551986065826',
  whatsappMessage: 'Olá! Gostaria de fazer um pedido no Gyros Lanches.',
  instagramHandle: '@gyroslanches',
  instagramUrl: 'https://www.instagram.com/gyroslanches/',
  reviewsUrl: 'https://www.google.com/search?q=gyros+lanches+camaqu%C3%A3+avalia%C3%A7%C3%B5es',
  menuPdfUrl: '/cardapio-gyros.pdf',
  address: {
    street: 'Av. José Loureiro da Silva, s/n',
    neighborhood: 'Praça Alvorada',
    city: 'Camaquã',
    state: 'RS',
    zip: '96784-000',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gyros+Lanches+Pra%C3%A7a+Alvorada+Camaqu%C3%A3+RS',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Gyros+Lanches+Pra%C3%A7a+Alvorada+Camaqu%C3%A3+RS&output=embed',
  rating: {
    value: 4.7,
    count: 30,
    source: 'Google',
  },
  hours: {
    timeZone: 'America/Sao_Paulo',
    opensAt: '18:00',
    closesAt: '00:00',
    openWeekdays: [0, 2, 3, 4, 5, 6], // domingo e terça a sábado
    daysLabel: 'Terça a domingo',
    closedLabel: 'Segunda-feira: fechado',
  },
  priceRange: 'R$ 20–40 por pessoa',
}

export default business
