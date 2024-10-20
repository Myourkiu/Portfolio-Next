import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900", ],
});

export const metadata: Metadata = {
  title: "Pedro - Portfolio Next.js",
  description: "Portfólio pessoal criado em Next.js, TypeScript e Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-[#2E073F]`}>
        {children}
      </body>
    </html>
  );
}
