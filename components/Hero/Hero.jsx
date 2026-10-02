import { MEDIA } from "@/lib/media";
import styles from "./Hero.module.css";

export default function Hero() {
  const temVideo = Boolean(MEDIA.heroVideo);

  return (
    <section id="inicio" className={styles.hero}>
      {temVideo ? (
        <video
          className={styles.midiaFundo}
          src={MEDIA.heroVideo}
          poster={MEDIA.heroPoster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : (
        <div
          className={styles.midiaFundo}
          style={
            MEDIA.heroPoster ? { backgroundImage: `url(${MEDIA.heroPoster})` } : undefined
          }
        />
      )}

      <div className={styles.overlay} />

      <div className={`container ${styles.conteudo}`}>
        <span className={styles.eyebrow}>Hotel em Sua Cidade — UF</span>

        <h1 className={styles.titulo}>
          Seu descanso em <br />
          Sua Cidade <span className={styles.destaque}>começa aqui</span>
        </h1>

        <p className={styles.subtitulo}>
          Localização privilegiada no centro da cidade, quartos climatizados,
          café da manhã incluso e um atendimento que faz a diferença.
        </p>

        <a href="#reserva" className={`btn btnPrimario ${styles.cta}`}>
          Fazer minha reserva
        </a>
      </div>
    </section>
  );
}