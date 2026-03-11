import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "1ens Media — Live Streaming Vendor",
  description:
    "1ens Media menghadirkan produksi live streaming premium — dari wedding intim hingga konser ribuan penonton.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={montserrat.variable}>
      <body>
        <Navbar />
        <main className="pt-[68px]">{children}</main>
      </body>
    </html>
  );
}