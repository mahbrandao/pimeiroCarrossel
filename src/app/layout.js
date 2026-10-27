import "./globals.css";

export const metadata = {
  title: "Galeria",
  description: "Carrossel de imagens com Swiper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
