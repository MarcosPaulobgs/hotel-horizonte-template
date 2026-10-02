# Hotel Horizonte — Template de Hotel/Pousada (Next.js)

Site institucional com formulário de reserva (envio por WhatsApp ou e-mail), em **Next.js 14 (App Router)** + CSS Modules.
Modelo genérico: marca, cidade, contatos e imagens são placeholders prontos para trocar.

## O que trocar para um cliente

- `lib/media.js`: imagens (`/public/assets/img/`), vídeo do hero, WhatsApp, e-mail, endereço, mapa e Instagram
- `styles/tokens.css`: cores e espaçamentos
- `app/layout.jsx`: título, descrição, ícone e imagem de compartilhamento
- Textos de "Sobre", "Localização" e "Comodidades" em `components/`
- Logo: `public/assets/img/logo-icone.png` e `logo-texto.png`

## Rodando

```bash
npm install
npm run dev
```

MIT — veja `LICENSE`.
