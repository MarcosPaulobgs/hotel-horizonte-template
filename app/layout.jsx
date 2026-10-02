import { Fraunces, Inter } from "next/font/google";
import "@/styles/tokens.css";

const IMAGEM_COMPARTILHAMENTO =
  "/assets/img/opengraph-image.jpg";

export const metadata = {
  title: "Hotel Horizonte — Hospedagem em Sua Cidade, UF",
  description:
    "Hotel no centro de Sua Cidade-UF. Quartos climatizados, café da manhã incluso e atendimento próximo. Monte sua reserva e envie direto pelo WhatsApp.",
  icons: {
        icon: "/assets/img/icon.png",
    apple: "/assets/img/icon.png",
  },
  // Imagem que aparece na prévia do link no WhatsApp, Instagram e Facebook
  openGraph: {
    title: "Hotel Horizonte — Hospedagem em Sua Cidade, UF",
    description:
      "Hotel no centro de Sua Cidade-UF. Quartos climatizados, café da manhã incluso e atendimento próximo.",
    images: [{ url: IMAGEM_COMPARTILHAMENTO, width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Horizonte — Hospedagem em Sua Cidade, UF",
    description:
      "Hotel no centro de Sua Cidade-UF. Quartos climatizados, café da manhã incluso e atendimento próximo.",
    images: [IMAGEM_COMPARTILHAMENTO],
  },
};

// Declara explicitamente que o site é "light" — sem isso, o Chrome/Android
// aplica o "dark mode forçado" do sistema em cima do site no celular.
// "only light" (em vez de só "light") é o que realmente bloqueia essa
// adaptação automática, mesmo com o app/sistema em modo escuro.
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f0",
  colorScheme: "only light",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}