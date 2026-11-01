"use client";

import React, { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [protocolo, setProtocolo] = useState(null);

  function gerarProtocolo() {
    // Operação com Math: randomização e arredondamento
    return Math.floor(100000 + Math.random() * 900000);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const protocoloGerado = gerarProtocolo();
    setProtocolo(protocoloGerado);

    // Salvar no localStorage
    const novoContato = {
      nome,
      email,
      assunto,
      mensagem,
      protocolo: protocoloGerado,
      data: new Date().toLocaleString("pt-BR"),
    };

    const dadosSalvos = localStorage.getItem("jovi_contatos");
    let contatosSalvos = [];
    try { const stored = dadosSalvos ? JSON.parse(dadosSalvos) : []; contatosSalvos = Array.isArray(stored) ? stored : []; } catch { contatosSalvos = []; }

    contatosSalvos.push(novoContato);

    localStorage.setItem(
      "jovi_contatos",
      JSON.stringify(contatosSalvos)
    );

    // Limpar formulário
    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  }

  return (
    <section className="section contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">CONTATO</p>

          <h2>
            Vamos falar sobre o <span>Jovi?</span>
          </h2>

          <p>
            Envie uma mensagem para nossa equipe. Este formulário está pronto
            para você conectar ao serviço de envio de sua preferência.
          </p>

          <div className="contact-details">
            <div>
              <span>✉</span>
              <div>
                <small>E-MAIL</small>
                <strong>contato@jovi.com</strong>
              </div>
            </div>

            <div>
              <span>◎</span>
              <div>
                <small>PROJETO</small>
                <strong>Jovi Academy • Tradução & Organização</strong>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {protocolo !== null && (
            <div
              style={{
                marginBottom: "20px",
                padding: "10px",
                background: "#DBEAFE",
                borderRadius: "8px",
                color: "#1E3A8A",
                fontWeight: "bold",
              }}
            >
              Mensagem registrada neste navegador (demonstração). Protocolo: {protocolo}
            </div>
          )}

          <div className="form-row">
            <label>
              Nome

              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(e) =>
                  setNome(e.target.value)
                }
              />
            </label>

            <label>
              E-mail

              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </label>
          </div>

          <label>
            Assunto

            <select
              name="assunto"
              required
              value={assunto}
              onChange={(e) =>
                setAssunto(e.target.value)
              }
            >
              <option value="" disabled>
                Selecione uma opção
              </option>

              <option>Quero saber mais sobre o Jovi</option>
              <option>Feedback</option>
              <option>Parceria</option>
              <option>Outro assunto</option>
            </select>
          </label>

          <label>
            Mensagem

            <textarea
              name="mensagem"
              rows={6}
              placeholder="Escreva sua mensagem..."
              required
              value={mensagem}
              onChange={(e) =>
                setMensagem(e.target.value)
              }
            />
          </label>

          <button
            className="button button-primary submit-button"
            type="submit"
          >
            Enviar mensagem <span>→</span>
          </button>

          <p className="form-note">* Formulário demonstrativo</p>
        </form>
      </div>
    </section>
  );
}

