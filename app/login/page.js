
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("aluno@jovi.com");
  const [password, setPassword] = useState("jovi2026");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        cache: "no-store",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao entrar.");
      }

      window.location.assign("/cofre");
    } catch (err) {
      setError(err.message || "Não foi possível entrar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-[75vh] place-items-center px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-[#E5E2EE] bg-white p-8 shadow-xl shadow-[#1A1A1A]/5 sm:p-10">

        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#7157FC] text-xl font-black text-white">
          J
        </span>

        <p className="mt-7 text-xs font-black tracking-[.2em] text-[#7157FC]">
          BEM-VINDO DE VOLTA
        </p>

        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight">
          Entre no seu cofre.
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#6B6875]">
          Use uma conta demonstrativa para acessar a área acadêmica.
        </p>

        <form onSubmit={submit} className="mt-8 flex flex-col gap-5">

          <label className="block text-sm font-bold">
            E-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              className="mt-2 block w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 outline-none focus:border-[#7157FC]"
            />
          </label>

          <label className="block text-sm font-bold">
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-2 block w-full rounded-xl border border-[#E5E2EE] bg-[#FAF9FE] px-4 py-3 outline-none focus:border-[#7157FC]"
            />
          </label>

          {error && (
            <p role="alert" className="text-sm font-semibold text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#7157FC] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#5540C2] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar no JOVI →"}
          </button>

        </form>

        <div className="mt-6 rounded-2xl bg-[#FFF1A8] p-4 text-xs leading-6 text-[#493B0B]">
          <strong>Acesso para avaliação</strong>
          <p>E-mail: aluno@jovi.com</p>
          <p>Senha: jovi2026</p>
        </div>

      </div>
    </main>
  );
}