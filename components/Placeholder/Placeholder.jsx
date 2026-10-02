import styles from "./Placeholder.module.css";

// Renderiza a mídia real (Cloudinary) quando `src` estiver preenchido em lib/media.js.
// Enquanto estiver vazio, mostra um bloco listrado com o rótulo do que deve entrar ali.
export default function Placeholder({ src, label, type = "imagem", aspect = "4 / 3" }) {
  if (src) {
    if (type === "video") {
      return (
        <video
          className={styles.midia}
          style={{ aspectRatio: aspect }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={styles.midia} style={{ aspectRatio: aspect }} src={src} alt={label} />;
  }

  return (
    <div className={styles.placeholder} style={{ aspectRatio: aspect }} role="img" aria-label={label}>
      <span className={styles.rotulo}>
        {type === "video" ? "VÍDEO" : "IMAGEM"}: {label}
      </span>
    </div>
  );
}
