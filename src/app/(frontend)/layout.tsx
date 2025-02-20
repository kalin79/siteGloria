import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import "@/styles/scss/global.scss";
import NavBar from "@/components/navbar/NavBar"
import localFont from "next/font/local";
import { Poppins } from "next/font/google"
// Fuente Roboto
const misti = localFont({
  src: [
    { path: "../../../public/fonts/MistiFont-Black.woff2", weight: "900", style: "black" },
    { path: "../../../public/fonts/MistiFont-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Bold.woff2", weight: "700", style: "bold" },
    { path: "../../../public/fonts/MistiFont-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Light.woff2", weight: "300", style: "light" },
    { path: "../../../public/fonts/MistiFont-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Medium.woff2", weight: "500", style: "medium" },
    { path: "../../../public/fonts/MistiFont-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../../public/fonts/MistiFont-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/MistiFont-RegularItalic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--fuente-misti",
  display: "swap",
});


const poppins = Poppins({
  subsets: ["latin"], // Subconjunto de caracteres
  weight: ["400", "700"], // Pesos que quieres usar (regular y bold)
  variable: "--fuente-poppins", // Variable CSS para su uso global
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gloria",
  description: "Este es el sitio Web de Gloria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${misti.variable} ${poppins.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
