import Link from "next/link";
import {
  MEDIA,
  WHATSAPP_NUMERO,
  TELEFONE_EXIBIDO,
  ENDERECO,
  MAPA_LINK,
  INSTAGRAM_USUARIO,
  INSTAGRAM_URL,
} from "@/lib/media";
import styles from "./Footer.module.css";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.colunaPrincipal}>
          <Link 
            href="/" 
            className={styles.logoWrapper}
            aria-label="Voltar para a página inicial do Hotel Horizonte"
          >
            <img src={MEDIA.logoIcone} alt="" aria-hidden="true" className={styles.logoIcone} />
            <img src={MEDIA.logoTexto} alt="Hotel Horizonte" className={styles.logoTexto} />
          </Link>

          <p className={styles.descricao}>
            Conforto, café da manhã incluso e atendimento próximo e flexível em Sua Cidade.
          </p>
        </div>

        <div className={styles.coluna}>
          <p className={styles.tituloColuna}>Navegação</p>
          <nav className={styles.navLinks} aria-label="Navegação de rodapé">
            <a href="#sobre" className={styles.link}>Sobre o Hotel</a>
            <a href="#quartos" className={styles.link}>Acomodações</a>
            <a href="#galeria" className={styles.link}>Galeria</a>
            <a href="#contato" className={styles.link}>Contato</a>
          </nav>
        </div>

        <div className={styles.coluna}>
          <p className={styles.tituloColuna}>Contato & Informações</p>

          <a 
            href={`tel:+${WHATSAPP_NUMERO}`} 
            className={styles.linha}
            aria-label={`Ligar para o hotel no número ${TELEFONE_EXIBIDO}`}
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.5 17.5c0 1.9-1.7 3.4-3.6 3.1C9.9 19.5 4.5 14.1 3.4 7.1 3.1 5.2 4.6 3.5 6.5 3.5h1a1.6 1.6 0 0 1 1.6 1.3l.6 3a1.6 1.6 0 0 1-.5 1.6l-1.1 1a13 13 0 0 0 5.5 5.5l1-1.1a1.6 1.6 0 0 1 1.6-.5l3 .6a1.6 1.6 0 0 1 1.3 1.6v1Z" />
            </svg>
            {TELEFONE_EXIBIDO}
          </a>

          <a
            href={MAPA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linha}
            aria-label="Abrir endereço no Google Maps"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.3" />
            </svg>
            {ENDERECO}
          </a>

          <p className={styles.linhaItem}>
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.2 1.9" strokeLinecap="round" />
            </svg>
            Café da manhã: 06:30 às 09:30
          </p>
        </div>

        <div className={styles.coluna}>
          <p className={styles.tituloColuna}>Redes Sociais</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linha}
            aria-label="Visitar perfil do Hotel Horizonte no Instagram, abre em uma nova aba"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            {INSTAGRAM_USUARIO}
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linha}
            aria-label="Falar com o Hotel Horizonte no WhatsApp, abre em uma nova aba"
          >
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.baixo}>
        <div className={`container ${styles.baixoConteudo}`}>
          <p>© {ano} Hotel Horizonte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}