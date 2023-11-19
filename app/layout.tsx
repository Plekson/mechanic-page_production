import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Mechanika samochodowa",
  description: "Mechanika samochodowa - Lubecki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${montserrat.className} flex flex-col gap-24`}>
        {children}
      </body>
    </html>
  );
}
