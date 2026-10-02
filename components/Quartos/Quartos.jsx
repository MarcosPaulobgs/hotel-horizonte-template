import { MEDIA } from "@/lib/media";
import Placeholder from "../Placeholder/Placeholder";
import styles from "./Quartos.module.css";

const QUARTOS = [
  {
    nome: "Solteiro",
    descricao: "Ideal para quem viaja a trabalho. Cama de solteiro, ar condicionado, TV e Wi-Fi.",
    preco: "R$ 99,00",
    label: "quarto de solteiro",
    src: MEDIA.quartoSolteiro,
  },
  {
    nome: "Casal",
    descricao: "Cama de casal, enxoval branco, climatização e banheiro privativo com água quente.",
    preco: "R$ 129,00",
    label: "quarto de casal",
    src: MEDIA.quartoCasal,
  },
  {
    nome: "Duplo (2 camas)",
    descricao: "Duas camas de solteiro — perfeito para colegas de viagem ou amigos.",
    preco: "R$ 149,00",
    label: "quarto duplo com duas camas",
    src: MEDIA.quartoDuplo,
  },
  {
    nome: "Família",
    descricao: "Espaço maior com três ou mais camas, para famílias e grupos pequenos.",
    preco: "R$ 189,00",
    label: "quarto família com três camas",
    src: MEDIA.quartoFamilia,
  },
];

export default function Quartos() {
  return (
    <section id="quartos" className={`container ${styles.secao}`}>
      <span className="eyebrow">Acomodações</span>
      <h2 className={styles.titulo}>Quartos limpos, climatizados e prontos para você</h2>

      <div className={styles.grid}>
        {QUARTOS.map((q) => (
          <article key={q.nome} className={styles.card}>
            <Placeholder src={q.src} label={q.label} aspect="4 / 3" />
            <div className={styles.corpo}>
              <h3 className={styles.nome}>{q.nome}</h3>
              <p className={styles.descricao}>{q.descricao}</p>
              <p className={styles.preco}>
                a partir de <strong>{q.preco}</strong>
              </p>
              <a href="#reserva" className={`btn ${styles.botao}`}>
                Solicitar reserva
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
