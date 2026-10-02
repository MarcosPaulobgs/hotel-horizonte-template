/**
 * Rola suavemente até a seção pelo id, sem deixar o #hash na URL.
 * O alinhamento correto abaixo do header fixo (mobile e desktop) é
 * garantido pelo "scroll-margin-top" definido em styles/tokens.css
 * para cada seção com id de navegação.
 */
export function irParaSecao(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
