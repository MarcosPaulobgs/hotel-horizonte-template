"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Placeholder from "../Placeholder/Placeholder";
import { useScrollZoom } from "@/hooks/useScrollZoom";
import { useFecharComBotaoVoltar } from "@/hooks/useFecharComBotaoVoltar";
import styles from "./Galeria.module.css";

const SWIPE_MINIMO = 50;

export default function GaleriaGridItem({ fotos = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { scale, origin, imgRef, onWheel, resetZoom } = useScrollZoom();

  function indiceComSrc(atual, direcao) {
    let i = atual;
    for (let tentativas = 0; tentativas < fotos.length; tentativas++) {
      i = (i + direcao + fotos.length) % fotos.length;
      if (fotos[i].src) return i;
    }
    return atual;
  }

  function abrirLightbox(index, foto) {
    if (!foto.src) return; // placeholder vazio não abre lightbox
    setActiveIndex(index);
  }

  function fecharLightbox() {
    setActiveIndex(null);
  }

  // No celular, o botão "voltar" do aparelho deve fechar só a foto ampliada,
  // não o site inteiro.
  useFecharComBotaoVoltar(activeIndex !== null, fecharLightbox);

  function proxima() {
    setActiveIndex((atual) => indiceComSrc(atual, 1));
  }

  function anterior() {
    setActiveIndex((atual) => indiceComSrc(atual, -1));
  }

  function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e) {
    if (e.cancelable) e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    const distancia = touchStart - touchEnd;
    if (distancia > SWIPE_MINIMO) proxima();
    else if (distancia < -SWIPE_MINIMO) anterior();
  }

  useEffect(() => {
    resetZoom();
  }, [activeIndex, resetZoom]);

  useEffect(() => {
    if (activeIndex === null) return;

    // Trava tanto o <html> quanto o <body> — no iOS Safari, travar só o
    // body às vezes não impede o "arrasto" do fundo por trás do lightbox.
    const scrollY = window.scrollY;
    const estiloHtmlAnterior = document.documentElement.style.overflow;
    const estiloBodyAnterior = document.body.style.overflow;
    const posicaoBodyAnterior = document.body.style.position;
    const topoBodyAnterior = document.body.style.top;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = estiloHtmlAnterior;
      document.body.style.overflow = estiloBodyAnterior;
      document.body.style.position = posicaoBodyAnterior;
      document.body.style.top = topoBodyAnterior;
      document.body.style.width = "";

      // Restaura a posição sem a animação suave do site — senão o
      // scroll-behavior: smooth do tokens.css faz parecer que a página
      // "volta pro topo e desce de novo" ao fechar o lightbox.
      const comportamentoAnterior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = comportamentoAnterior;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    function aoTeclar(e) {
      if (e.key === "ArrowRight") proxima();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "Escape") fecharLightbox();
    }
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const fotoAtiva = activeIndex !== null ? fotos[activeIndex] : null;

  return (
    <>
      <div className={styles.grid}>
        {fotos.map((foto, index) => (
          <div
            key={foto.alt || index}
            className={`${styles.item} ${index === 0 ? styles.itemDestaque : ""}`}
            onClick={() => abrirLightbox(index, foto)}
            style={{ cursor: foto.src ? "pointer" : "default" }}
          >
            {foto.src ? (
              foto.tipo === "video" ? (
                <video
                  className={styles.midia}
                  src={foto.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 780px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: foto.posicao || "center" }}
                />
              )
            ) : (
              <Placeholder
                label={foto.alt}
                type={foto.tipo === "video" ? "video" : "imagem"}
              />
            )}
          </div>
        ))}
      </div>

      {fotoAtiva && (
        <div
          className={styles.lightbox}
          onClick={fecharLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className={styles.fechar} onClick={fecharLightbox} aria-label="Fechar imagem">
            &times;
          </button>

          <button
            className={`${styles.navBtn} ${styles.navAnterior}`}
            onClick={(e) => { e.stopPropagation(); anterior(); }}
            aria-label="Foto anterior"
          >
            &#10094;
          </button>

          <button
            className={`${styles.navBtn} ${styles.navProxima}`}
            onClick={(e) => { e.stopPropagation(); proxima(); }}
            aria-label="Próxima foto"
          >
            &#10095;
          </button>

          <div className={styles.lightboxConteudo} onClick={(e) => e.stopPropagation()}>
            {fotoAtiva.tipo === "video" ? (
              <video className={styles.lightboxMidia} src={fotoAtiva.src} controls autoPlay />
            ) : (
              <img
                ref={imgRef}
                src={fotoAtiva.src}
                alt={fotoAtiva.alt}
                className={styles.lightboxMidia}
                onWheel={onWheel}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: origin,
                  cursor: scale > 1 ? "zoom-out" : "zoom-in",
                }}
              />
            )}
            <p className={styles.legenda}>{fotoAtiva.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}