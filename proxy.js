import { NextResponse } from "next/server";

export function proxy(request) {
  const session = request.cookies.get("jovi_session")?.value;
  if (session !== "jovi-demo-session") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/cofre/:path*"] };
