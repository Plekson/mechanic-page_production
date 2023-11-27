import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Mechanika samochodowa - Lubecki",
  description:
    "Mechanika samochodowa - Lubecki pomorze gdansk koscierzyna kartuzy somonino zukowo",
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
        <Analytics />
      </body>
    </html>
  );
}
