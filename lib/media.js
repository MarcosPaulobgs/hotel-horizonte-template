export const MEDIA = {
  logoIcone: "/assets/img/logo-icone.png", // ícone da marca
  logoTexto: "/assets/img/logo-texto.png", // nome da marca

  heroVideo: "https://res.cloudinary.com/b1hqsppo/video/upload/v1788757054/Boutique_hotel_interior_video_loop_202609070154.mp4",
  heroPoster: "",
  sobre: "/assets/img/sobre.jpg",

  quartoSolteiro: "/assets/img/quarto-solteiro.jpg",
  quartoCasal: "/assets/img/quarto-casal.jpg",
  quartoDuplo: "/assets/img/quarto-duplo.jpg",
  quartoFamilia: "/assets/img/quarto-familia.jpg",

  // URLs funcionais para teste (substitua pelas do Cloudinary assim que fizer o upload)
  comodidadeAr: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80",
  comodidadeWifi: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  comodidadeCafe: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
  comodidadeTv: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
  comodidadeEstacionamento: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80",
  comodidadeLocalizacao: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",

  mapaEmbedUrl: "", // cole aqui o src do iframe do Google Maps (vazio = mostra o placeholder)
};

// Fotos da Galeria (grid + lightbox). O primeiro item do array vira o
// destaque grande do grid. Preencha "src" com o link do Cloudinary quando
// a mídia estiver pronta — enquanto estiver vazio, aparece o placeholder
// listrado no lugar (e o item não abre o lightbox).
export const GALERIA_FOTOS = [
  {
    src: "/assets/img/galeria-1.jpg",
    alt: "fachada do hotel",
  },
  {
    src: "/assets/img/galeria-2.jpg",
    alt: "café da manhã servido",
    posicao: "center 23%",
  },
  {
    src: "/assets/img/galeria-3.jpg",
    alt: "quarto arrumado",
  },
  {
    src: "/assets/img/galeria-4.jpg",
    alt: "área de recepção",
    posicao: "center 16%",
  },
  {
    src: "/assets/img/galeria-5.jpg",
    alt: "corredor do hotel",
  },
  {
    src: "/assets/img/galeria-6.jpg",
    alt: "sala de café / mesas",
  },
];

export const EMAIL_RESERVAS = "seu-email@exemplo.com";
export const WHATSAPP_NUMERO = "5500000000000";
export const TELEFONE_EXIBIDO = "(00) 00000-0000";
export const ENDERECO = "Seu endereço aqui";
export const MAPA_LINK = "#";
export const INSTAGRAM_USUARIO = "@seu-instagram";
export const INSTAGRAM_URL = "#";
