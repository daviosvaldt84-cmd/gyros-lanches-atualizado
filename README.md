# Gyros Lanches - Site atualizado

Landing page em React + Vite + Tailwind CSS para o **Gyros Lanches**, em Camaquã - RS.
A versão preserva as animações de entrada ao rolar a página e integra dados, fotos e o cardápio oficial fornecidos pelo estabelecimento.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Validar a versão de produção

```bash
npm run build
npm run preview
```

## Conteúdo real integrado

- Instagram: `https://www.instagram.com/gyroslanches/`
- Horário: terça a domingo, das 18h às 00h; segunda-feira fechado
- Endereço e WhatsApp centralizados em `src/data/business.js`
- Cardápio real transcrito em `src/data/menu.js`
- PDF oficial disponível em `public/cardapio-gyros.pdf`
- Visualização completa do cardápio em modal, com prévias em WebP
- Quatro fotos reais otimizadas em `public/media/`
- Nota 4,7 e 30 avaliações, com botão para abrir as avaliações no Google

## Arquivos principais

```text
src/
├── components/
│   ├── MenuPdfModal.jsx   # visualização do cardápio completo
│   ├── SceneImage.jsx     # imagens reais com animação integrada
│   ├── OpeningHours.jsx   # status aberto/fechado no fuso de Camaquã
│   └── ...
├── data/
│   ├── business.js
│   └── menu.js
└── App.jsx

public/
├── cardapio-gyros.pdf
└── media/
    ├── gyros-bus-cerveja.webp
    ├── gyros-preparo-lanches.webp
    ├── gyros-onibus-toldo.webp
    ├── gyros-ambiente-noturno.webp
    ├── cardapio-pagina-1.webp
    └── cardapio-pagina-2.webp
```

## Animações

O site continua usando `IntersectionObserver` através de `Reveal.jsx` e `useInView.js`.
As fotografias reais também recebem uma transição suave de escala ao entrar na tela.
Todas as animações respeitam `prefers-reduced-motion`.

## Observação sobre avaliações

O site não reproduz comentários ou nomes que não puderam ser verificados com segurança.
Em vez disso, exibe a nota, a quantidade de avaliações informada e um botão para consultar os comentários completos no Google.
