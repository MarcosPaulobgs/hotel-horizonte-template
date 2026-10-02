import { MEDIA } from "@/lib/media";
import styles from "./Comodidades.module.css";

// Os 2 diferenciais que merecem foto e destaque
const DESTAQUES = [
  {
    titulo: "Café da manhã incluso",
    texto: "Servido diariamente das 06:30 às 09:30, com opções caseiras.",
    imagem: MEDIA.comodidadeCafe,
    icone: (
      <>
        <path d="M4 8h13a3 3 0 0 1 0 6h-1" strokeLinecap="round" />
        <path d="M4 8v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1" strokeLinecap="round" />
        <path d="M7 3c-.6.8-.6 1.4 0 2.2M10.5 3c-.6.8-.6 1.4 0 2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    titulo: "Perto do centro, com mais sossego",
    texto: "A poucos minutos do comércio e das vias principais de Sua Cidade, mas numa rua mais tranquila — com bem menos movimento à noite.",
    imagem: MEDIA.comodidadeLocalizacao,
    icone: (
      <>
        <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </>
    ),
  },
];

// Itens de checklist — não precisam de foto, só de clareza
const COMPACTOS = [
  {
    titulo: "Ar condicionado",
    texto: "Climatização para as noites mais quentes.", // ⚠️ confirmar com o hotel: é em todos os quartos?
    icone: (
      <path d="M12 2v20M4 6l16 12M20 6L4 18M2 12h20" strokeLinecap="round" />
    ),
  },
  {
    titulo: "Wi-Fi gratuito",
    texto: "Internet em todo o hotel.",
    icone: (
      <>
        <path d="M2 8.5a16 16 0 0 1 20 0" strokeLinecap="round" />
        <path d="M5.5 12.5a11 11 0 0 1 13 0" strokeLinecap="round" />
        <path d="M9 16.5a5.5 5.5 0 0 1 6 0" strokeLinecap="round" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    titulo: "TV",
    texto: "Nos apartamentos.", //
    icone: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="1.5" />
        <path d="M9 21h6M12 18v3" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Comodidades() {
  return (
    <section id="comodidades" className={styles.secao}>
      <div className="container">
        <span className="eyebrow">O que oferecemos</span>
        <h2 className={styles.titulo}>Comodidades pensadas para o seu conforto</h2>

        {/* Destaques — os 2 diferenciais reais, com foto */}
        <div className={styles.destaques}>
          {DESTAQUES.map((item, index) => (
            <article
              key={item.titulo}
              className={`${styles.cardDestaque} ${
                index === 0 ? styles.cardGrande : ""
              }`}
            >
              <img
                src={item.imagem}
                alt=""
                aria-hidden="true"
                className={styles.imagemFundo}
                loading="lazy"
              />
              <div className={styles.pelicula} aria-hidden="true" />

              <div className={styles.conteudoDestaque}>
                <svg
                  aria-hidden="true"
                  className={styles.icone}
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  {item.icone}
                </svg>
                <h3 className={styles.cardTitulo}>{item.titulo}</h3>
                <p className={styles.cardTexto}>{item.texto}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Checklist — sem foto, direto no fundo da seção */}
        <div className={styles.listaCompacta}>
          {COMPACTOS.map((item) => (
            <div key={item.titulo} className={styles.itemCompacto}>
              <svg
                aria-hidden="true"
                className={styles.iconeCompacto}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {item.icone}
              </svg>
              <div>
                <h3 className={styles.tituloCompacto}>{item.titulo}</h3>
                <p className={styles.textoCompacto}>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}