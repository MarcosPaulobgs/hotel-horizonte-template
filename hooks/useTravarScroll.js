"use client";

import { useEffect } from "react";

/**
 * Trava o scroll do fundo enquanto um modal/lightbox está aberto.
 *
 * Trava tanto o <html> quanto o <body> e fixa a posição com base no
 * scrollY atual — no iOS Safari, travar só com "overflow: hidden" às
 * vezes não impede o "arrasto" do fundo por trás do modal.
 *
 * @param {boolean} travado - true enquanto o modal/lightbox estiver aberto
 */
export function useTravarScroll(travado) {
  useEffect(() => {
    if (!travado) return;

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
      // "volta pro topo e desce de novo" ao fechar o modal.
      const comportamentoAnterior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      document.documentElement.style.scrollBehavior = comportamentoAnterior;
    };
  }, [travado]);
}
