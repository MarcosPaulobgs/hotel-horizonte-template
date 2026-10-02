"use client";

import { useState, useEffect } from "react";
import { MEDIA, ENDERECO } from "@/lib/media";
import { useFecharComBotaoVoltar } from "@/hooks/useFecharComBotaoVoltar";
import styles from "./Sobre.module.css";

export default function Sobre() {
  const [expandida, setExpandida] = useState(false);

  // No celular, o botão "voltar" do aparelho deve fechar só a imagem
  // ampliada, não o site inteiro.
  useFecharComBotaoVoltar(expandida, () => setExpandida(false));

  useEffect(() => {
    if (expandida) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [expandida]);

  return (
    <section className={`container ${styles.secao}`}>
      <div className={styles.texto}>
        <span className="eyebrow">Sobre o hotel</span>
        <h2 className={styles.titulo}>Acolhimento no coração de Sua Cidade</h2>
        <p className={styles.paragrafo}>
          O Hotel Horizonte nasceu com um propósito simples: oferecer um lugar
          tranquilo, limpo e bem cuidado para quem chega a Sua Cidade a
          trabalho, a passeio ou de passagem pela região.
        </p>
        <p className={styles.paragrafo}>
          Estamos localizados em {ENDERECO} — em uma região estratégica,
          com fácil acesso ao comércio, bancos, restaurantes e às principais
          vias da cidade.
        </p>
        <p className={styles.paragrafo}>
          Cada hóspede é recebido pelo nome. Nosso atendimento é próximo e
          flexível: se você precisa de um quarto com camas separadas, de um
          check-in mais cedo ou de uma sugestão do que fazer na cidade, é só
          falar com a gente.
        </p>
      </div>

      <div className={styles.imagemWrapper}>
        <button 
          type="button" 
          className={styles.triggerExpansao}
          onClick={() => setExpandida(true)}
          aria-label="Expandir imagem da recepção"
        >
          <img 
            src={MEDIA.sobre} 
            alt="Entrada e recepção do Hotel Horizonte" 
            loading="lazy"
          />
          <span className={styles.indicadorExpansao}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </span>
        </button>
      </div>

      {expandida && (
        <div 
          className={styles.overlayModal} 
          onClick={() => setExpandida(false)}
          onTouchMove={(e) => e.preventDefault()}
        >
          <div className={styles.conteudoModal} onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className={styles.btnFechar}
              onClick={() => setExpandida(false)}
              aria-label="Fechar imagem"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={MEDIA.sobre} 
              alt="Entrada e recepção do Hotel Horizonte expandida" 
              className={styles.imagemExpandida}
            />
          </div>
        </div>
      )}
    </section>
  );
}