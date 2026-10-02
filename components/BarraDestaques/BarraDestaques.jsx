import React from "react";
import styles from "./BarraDestaques.module.css";

const ITENS = [
  "Wi-Fi grátis",
  "Café da manhã incluso",
  "Ar condicionado",
  "Estacionamento",
  "Recepção 24h",
];

export default function BarraDestaques() {
  return (
    <div className={styles.barra}>
      <div className={`container ${styles.conteudo}`}>
        {ITENS.map((item, i) => (
          <React.Fragment key={item}>
            <span className={styles.item}>{item}</span>
            {i < ITENS.length - 1 && (
              <span className={styles.ponto} aria-hidden="true">
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}