import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami — 1ens Media",
    description: "Kenali lebih dekat 1ens Media, penyedia layanan live streaming profesional di Malang untuk berbagai acara.",
};

export default function TentangPage() {
    return (
        <main className="pt-[68px]">
            <AboutUs />
        </main>
    );
}