import "./globals.css";
import "./sprint3.css";
import Footer from "../components/sprint3/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "JOVI Academy Mode | Conhecimento sem barreiras",
  description: "A câmera acadêmica que traduz, dubla e organiza seus estudos.",
  icons: { icon: "/jovi-mark.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
