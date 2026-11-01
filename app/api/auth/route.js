import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  return NextResponse.json({ authenticated: cookieStore.get("jovi_session")?.value === "jovi-demo-session" });
}
export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Dados inválidos."},{status:400}); }
  if (body.email !== "aluno@jovi.com" || body.password !== "jovi2026") {
    return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set("jovi_session", "jovi-demo-session", {
    httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production",
    path: "/", maxAge: 60 * 60 * 8,
  });
  return response;
}
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete("jovi_session");
  return response;
}
