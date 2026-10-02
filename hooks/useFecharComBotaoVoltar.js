"use client";

import { useEffect, useRef } from "react";

/**
 * Faz o botão "voltar" do aparelho (ou do navegador) fechar um modal/lightbox
 * em vez de sair do site inteiro.
 *
 * Como funciona: quando o modal abre, empurramos uma entrada extra no
 * histórico do navegador. Se o usuário aperta "voltar" com o modal aberto,
 * o navegador consome essa entrada extra (em vez de sair da página) e
 * disparamos o evento "popstate" para fechar o modal nesse momento.
 *
 * Se o modal for fechado de outra forma (botão de fechar, clique fora,
 * Esc, troca de foto), a entrada extra é removida do histórico ao mesmo
 * tempo, para que o botão "voltar" continue funcionando normalmente depois.
 *
 * @param {boolean} aberto - true enquanto o modal/lightbox estiver aberto
 * @param {() => void} aoFechar - função que fecha o modal (ex: setActiveIndex(null))
 */
export function useFecharComBotaoVoltar(aberto, aoFechar) {
  const fechandoPeloBotaoVoltar = useRef(false);

  useEffect(() => {
    if (!aberto) return;

    window.history.pushState({ modalAberto: true }, "");

    function aoDetectarVoltar() {
      fechandoPeloBotaoVoltar.current = true;
      aoFechar();
    }

    window.addEventListener("popstate", aoDetectarVoltar);

    return () => {
      window.removeEventListener("popstate", aoDetectarVoltar);

      // Só consome a entrada extra do histórico se o fechamento NÃO veio
      // do botão voltar (senão o navegador já cuidou disso sozinho).
      if (!fechandoPeloBotaoVoltar.current) {
        window.history.back();
      }
      fechandoPeloBotaoVoltar.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aberto]);
}
