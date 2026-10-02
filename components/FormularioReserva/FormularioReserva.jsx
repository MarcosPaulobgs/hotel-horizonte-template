"use client";

import { useState, useEffect } from "react";
import { EMAIL_RESERVAS, WHATSAPP_NUMERO } from "@/lib/media";
import styles from "./FormularioReserva.module.css";

const VALOR_INICIAL = {
  nome: "",
  telefone: "",
  email: "",
  checkin: "",
  checkout: "",
  hospedes: "1",
  camas: "1 cama",
  arCondicionado: "Sim",
  cafeManha: "Sim, confirmar",
  observacoes: "",
};

function formatarData(valor) {
  if (!valor) return "";
  const [ano, mes, dia] = valor.split("-");
  return `${dia}/${mes}/${ano}`;
}

function montarMensagem(dados) {
  const linhas = [
    "Olá! Gostaria de solicitar uma reserva no Hotel Horizonte:",
    "",
    `Nome: ${dados.nome}`,
    `Check-in: ${formatarData(dados.checkin)} | Check-out: ${formatarData(dados.checkout)}`,
    `Hóspedes: ${dados.hospedes} | Camas: ${dados.camas}`,
    `Ar condicionado: ${dados.arCondicionado}`,
    `Café da manhã: ${dados.cafeManha}`,
  ];

  if (dados.telefone) linhas.splice(2, 0, `Telefone: ${dados.telefone}`);
  if (dados.observacoes) linhas.push(`Observações: ${dados.observacoes}`);

  return linhas.join("\n");
}

export default function FormularioReserva() {
  const [dados, setDados] = useState(VALOR_INICIAL);
  const [erros, setErros] = useState({});
  const [dataAtual, setDataAtual] = useState("");

  // Pega a data atual para bloquear seleções no passado
  useEffect(() => {
    setDataAtual(new Date().toISOString().split("T")[0]);
  }, []);

  function atualizar(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
    // Limpa o erro do campo assim que o usuário começa a digitar
    if (erros[campo]) {
      setErros((atuais) => ({ ...atuais, [campo]: null }));
    }
  }

  function validar() {
    const novosErros = {};
    if (!dados.nome.trim()) novosErros.nome = "Informe seu nome completo.";
    if (!dados.telefone.trim()) novosErros.telefone = "Informe um telefone ou WhatsApp.";
    if (!dados.checkin) novosErros.checkin = "Escolha a data de check-in.";
    if (!dados.checkout) novosErros.checkout = "Escolha a data de check-out.";
    if (dados.checkin && dados.checkout && dados.checkout <= dados.checkin) {
      novosErros.checkout = "O check-out deve ser depois do check-in.";
    }
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function enviarWhatsApp() {
    if (!validar()) return;
    const mensagem = encodeURIComponent(montarMensagem(dados));
    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
  }

  function enviarEmail() {
    if (!validar()) return;
    const assunto = encodeURIComponent("Solicitação de reserva — Hotel Horizonte");
    const corpo = encodeURIComponent(montarMensagem(dados));
    window.location.href = `mailto:${EMAIL_RESERVAS}?subject=${assunto}&body=${corpo}`;
  }

  return (
    <section id="reserva" className={styles.secao}>
      <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Reserva</span>
          <h2 className={styles.titulo}>Monte sua reserva ideal e envie para o hotel</h2>
          <p className={styles.subtitulo}>
            Preencha os dados abaixo. Enviamos tudo formatado para o nosso
            WhatsApp — sem precisar digitar nada.
          </p>
        </div>

        <form
          className={styles.form}
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.campo}>
            <label htmlFor="nome">Nome completo *</label>
            <input
              id="nome"
              type="text"
              value={dados.nome}
              onChange={(e) => atualizar("nome", e.target.value)}
              aria-invalid={!!erros.nome}
              aria-describedby={erros.nome ? "erro-nome" : undefined}
            />
            {erros.nome && <span id="erro-nome" className={styles.erro} role="alert">{erros.nome}</span>}
          </div>

          <div className={styles.linha2}>
            <div className={styles.campo}>
              <label htmlFor="telefone">Telefone / WhatsApp *</label>
              <input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={dados.telefone}
                onChange={(e) => atualizar("telefone", e.target.value)}
                aria-invalid={!!erros.telefone}
                aria-describedby={erros.telefone ? "erro-telefone" : undefined}
              />
              {erros.telefone && <span id="erro-telefone" className={styles.erro} role="alert">{erros.telefone}</span>}
            </div>

            <div className={styles.campo}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu-email@exemplo.com"
                value={dados.email}
                onChange={(e) => atualizar("email", e.target.value)}
              />
            </div>
          </div>

          <div className={styles.linha2}>
            <div className={styles.campo}>
              <label htmlFor="checkin">Check-in *</label>
              <input
                id="checkin"
                type="date"
                min={dataAtual}
                value={dados.checkin}
                onChange={(e) => atualizar("checkin", e.target.value)}
                aria-invalid={!!erros.checkin}
                aria-describedby={erros.checkin ? "erro-checkin" : undefined}
              />
              {erros.checkin && <span id="erro-checkin" className={styles.erro} role="alert">{erros.checkin}</span>}
            </div>

            <div className={styles.campo}>
              <label htmlFor="checkout">Check-out *</label>
              <input
                id="checkout"
                type="date"
                min={dados.checkin || dataAtual}
                value={dados.checkout}
                onChange={(e) => atualizar("checkout", e.target.value)}
                aria-invalid={!!erros.checkout}
                aria-describedby={erros.checkout ? "erro-checkout" : undefined}
              />
              {erros.checkout && <span id="erro-checkout" className={styles.erro} role="alert">{erros.checkout}</span>}
            </div>
          </div>

          <div className={styles.linha2}>
            <div className={styles.campo}>
              <label htmlFor="hospedes">Quantidade de hóspedes *</label>
              <select
                id="hospedes"
                value={dados.hospedes}
                onChange={(e) => atualizar("hospedes", e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className={styles.campo}>
              <label htmlFor="camas">Quantidade de camas *</label>
              <select
                id="camas"
                value={dados.camas}
                onChange={(e) => atualizar("camas", e.target.value)}
              >
                <option value="1 cama">1 cama</option>
                <option value="2 camas">2 camas</option>
                <option value="3+ camas">3+ camas</option>
              </select>
            </div>
          </div>

          <div className={styles.linha2}>
            <div className={styles.campo}>
              <label htmlFor="ar">Ar condicionado</label>
              <select
                id="ar"
                value={dados.arCondicionado}
                onChange={(e) => atualizar("arCondicionado", e.target.value)}
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>

            <div className={styles.campo}>
              <label htmlFor="cafe">Café da manhã (já incluso)</label>
              <select
                id="cafe"
                value={dados.cafeManha}
                onChange={(e) => atualizar("cafeManha", e.target.value)}
              >
                <option value="Sim, confirmar">Sim, confirmar</option>
                <option value="Não preciso">Não preciso</option>
              </select>
            </div>
          </div>

          <div className={styles.campo}>
            <label htmlFor="observacoes">Observações / pedidos especiais</label>
            <textarea
              id="observacoes"
              rows={3}
              placeholder="Chegada tardia, quarto no térreo, decoração especial..."
              value={dados.observacoes}
              onChange={(e) => atualizar("observacoes", e.target.value)}
            />
          </div>

          <div className={styles.acoes}>
            <button
              type="button"
              className={`btn btnPrimario ${styles.botaoWhats}`}
              onClick={enviarWhatsApp}
            >
              Enviar solicitação por WhatsApp
            </button>
            <button
              type="button"
              className={`btn ${styles.botaoEmail}`}
              onClick={enviarEmail}
            >
              Enviar por e-mail
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}