import { MEDIA } from "@/lib/media";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#quartos", label: "Quartos" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#reserva", label: "Reservar" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.linha}`}>
        <a href="#inicio" className={styles.marca}>
          <img src={MEDIA.logoIcone} alt="" aria-hidden="true" className={styles.logoIcone} />
          <img src={MEDIA.logoTexto} alt="Hotel Horizonte" className={styles.logoTexto} />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#reserva" className={`btn btnPrimario ${styles.cta}`}>
          Reservar agora
        </a>
      </div>
    </header>
  );
}
