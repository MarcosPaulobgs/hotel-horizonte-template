import { GALERIA_FOTOS } from "@/lib/media";
import GaleriaGridItem from "./GaleriaGridItem";
import styles from "./Galeria.module.css";

export default function Galeria() {
  return (
    <section className={styles.secao}>
      <div className="container">
        <span className="eyebrow">Galeria</span>
        <h2 className={styles.titulo}>Conheça nossos espaços</h2>
        <p className={styles.subtitulo}>Clique em uma foto para ampliar.</p>

        <GaleriaGridItem fotos={GALERIA_FOTOS} />
      </div>
    </section>
  );
}
