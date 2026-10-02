import { MEDIA, ENDERECO } from "@/lib/media";
import Placeholder from "../Placeholder/Placeholder";
import styles from "./Localizacao.module.css";

export default function Localizacao() {
  return (
    <section id="localizacao" className={`container ${styles.secao}`}>
      <div className={styles.texto}>
        <span className="eyebrow">Localização</span>
        <h2 className={styles.titulo}>No Centro, perto de tudo</h2>
        <p className={styles.paragrafo}>
          Estamos em uma das vias mais movimentadas de Sua Cidade, com acesso
          rápido ao comércio, bancos, praça central e às rodovias de entrada
          e saída da cidade. Quem chega de carro conta com garagem, e quem
          chega a pé encontra tudo a poucos minutos.
        </p>
        <p className={styles.endereco}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.3" />
          </svg>
          {ENDERECO}
        </p>
      </div>

      <div className={styles.mapa}>
        {MEDIA.mapaEmbedUrl ? (
          <iframe
            className={styles.iframe}
            src={MEDIA.mapaEmbedUrl}
            loading="lazy"
            title="Mapa — Hotel Horizonte"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <Placeholder
            label={`Google Maps embed — ${ENDERECO}`}
            aspect="4 / 3"
          />
        )}
      </div>
    </section>
  );
}
