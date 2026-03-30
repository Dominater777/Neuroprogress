import "./globals.css";

import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "NeuroProgress",
  description: "Neural disorder progression visualization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}