"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import {
    Award, Users, Camera, MapPin, Wallet,
} from "lucide-react";

const WHY_ITEMS = [
    {
        icon: Award,
        color: "#00A8B5",
        title: "Pengalaman Terbukti",
        desc: "Menangani berbagai event dengan hasil live streaming yang memuaskan klien dari skala kecil hingga besar.",
    },
    {
        icon: Users,
        color: "#6B32A8",
        title: "Tim Profesional & Kreatif",
        desc: "Solusi inovatif untuk setiap jenis acara — kami menyesuaikan produksi dengan karakter unik event Anda.",
    },
    {
        icon: Camera,
        color: "#C4006E",
        title: "Peralatan Berkualitas",
        desc: "Kamera, audio, dan software live streaming terbaru untuk hasil siaran yang jernih dan stabil.",
    },
    {
        icon: MapPin,
        color: "#00A8B5",
        title: "Dekat dengan Komunitas",
        desc: "Memahami kebutuhan acara lokal di Malang sehingga layanan lebih personal dan tepat sasaran.",
    },
    {
        icon: Wallet,
        color: "#6B32A8",
        title: "Paket Fleksibel & Terjangkau",
        desc: "Pilihan paket sesuai skala acara Anda — tanpa kompromi kualitas, tanpa biaya tersembunyi.",
    },
];

function fadeUp(delay = 0) {
    return {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6, ease: "easeOut" as const, delay },
    };
}

function WhyCard({ item, Icon, delay }: { item: typeof WHY_ITEMS[0]; Icon: React.ElementType; delay: number }) {
    return (
        <motion.div
            {...fadeUp(delay)}
            style={{
                background: "#FFFFFF",
                border: "1px solid #E2E0DB",
                borderRadius: 20,
                padding: "28px 26px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                cursor: "default",
            }}
            whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(0,0,0,0.09)", borderColor: item.color }}
            transition={{ duration: 0.2 }}
        >
            <div style={{
                width: 44, height: 44, borderRadius: 12, marginBottom: 18,
                background: `linear-gradient(135deg,${item.color}18,${item.color}08)`,
                border: `1px solid ${item.color}28`,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <Icon size={20} color={item.color} strokeWidth={1.8} />
            </div>
            <div style={{ width: 32, height: 2, background: `linear-gradient(90deg,${item.color},transparent)`, borderRadius: 2, marginBottom: 14 }} />
            <h3 style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.95rem", fontWeight: 700, color: "#18181A", marginBottom: 8, lineHeight: 1.3 }}>
                {item.title}
            </h3>
            <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.85rem", color: "#6B6B70", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
            </p>
        </motion.div>
    );
}

export default function AboutUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="tentang"
            ref={sectionRef}
            style={{ position: "relative", background: "#FAFAF8", overflow: "hidden", padding: "96px 0 80px" }}
        >
            {/* ── Subtle orbs ── */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", width: 500, height: 500, top: -160, left: -120, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,168,181,.07) 0%,transparent 70%)", filter: "blur(80px)" }} />
                <div style={{ position: "absolute", width: 400, height: 400, bottom: -100, right: -80, borderRadius: "50%", background: "radial-gradient(circle,rgba(107,50,168,.06) 0%,transparent 70%)", filter: "blur(80px)" }} />
            </div>

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 40px" }} className="about-container">

                {/* ════════════════ ABOUT US ════════════════ */}
                <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginBottom: 96 }}>

                    {/* Left — text */}
                    <div>
                        {/* Section label */}
                        <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                            <span style={{ display: "block", width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2 }} />
                            <span style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>Tentang Kami</span>
                        </motion.div>

                        <motion.h2 {...fadeUp(0.08)} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(2rem,3.6vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.3px", color: "#18181A", marginBottom: 24 }}>
                            Streaming Terbaik,<br />
                            <em style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                Untuk Setiap Momen.
                            </em>
                        </motion.h2>

                        <motion.p {...fadeUp(0.16)} style={{ color: "#6B6B70", fontSize: "0.97rem", lineHeight: 1.85, marginBottom: 32, maxWidth: 480 }}>
                            Kami menyediakan layanan live streaming profesional untuk berbagai acara — mulai dari wisuda, class meeting, dies natalis, hingga pengajian dan kegiatan komunitas di Malang. Dengan fokus pada kualitas siaran dan pengalaman menonton yang nyaman, kami memastikan setiap momen tersampaikan dengan jelas dan berkesan, baik untuk peserta langsung maupun penonton online.
                        </motion.p>

                        {/* Event tags */}
                        <motion.div {...fadeUp(0.22)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {["Wisuda", "Class Meeting", "Dies Natalis", "Pengajian", "Komunitas", "Corporate"].map((tag) => (
                                <span key={tag} style={{
                                    fontFamily: "Arial,sans-serif",
                                    fontSize: 11, fontWeight: 500,
                                    color: "#18181A",
                                    background: "#FFFFFF",
                                    border: "1px solid #E2E0DB",
                                    borderRadius: 100,
                                    padding: "5px 14px",
                                    letterSpacing: "0.04em",
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — visual card stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                        style={{ position: "relative", display: "flex", justifyContent: "center" }}
                    >
                        {/* Background card (tilt) */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                            borderRadius: 24,
                            transform: "rotate(3deg) scale(0.97)",
                            opacity: 0.12,
                        }} />

                        {/* Main stat card */}
                        <div style={{
                            position: "relative",
                            background: "#FFFFFF",
                            border: "1px solid #E2E0DB",
                            borderRadius: 24,
                            padding: "40px 36px",
                            boxShadow: "0 12px 48px rgba(0,0,0,0.07)",
                            width: "100%",
                        }}>
                            {/* Gradient accent line */}
                            <div style={{ height: 3, background: "linear-gradient(90deg,#00A8B5,#6B32A8,#C4006E)", borderRadius: 2, marginBottom: 32 }} />

                            {/* Stats grid */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }}>
                                {[
                                    { num: "20+", label: "Event Ditangani", color: "#00A8B5" },
                                    { num: "2 Thn", label: "Pengalaman", color: "#6B32A8" },
                                    { num: "99%", label: "Client Puas", color: "#C4006E" },
                                    { num: "Malang", label: "Berbasis Di", color: "#00A8B5" },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <div style={{
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: "1.9rem", fontWeight: 700, lineHeight: 1,
                                            marginBottom: 4,
                                            background: `linear-gradient(120deg,${s.color},#18181A)`,
                                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                                        }}>{s.num}</div>
                                        <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#9B9BA0", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: "#F0EDE8", marginBottom: 20 }} />

                            {/* Location pill */}
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,rgba(0,168,181,.12),rgba(107,50,168,.12))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <MapPin size={14} color="#6B32A8" strokeWidth={2} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 12, fontWeight: 600, color: "#18181A" }}>Malang, Jawa Timur</div>
                                    <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#9B9BA0" }}>Melayani seluruh area Malang Raya</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ════════════════ KENAPA MEMILIH KAMI ════════════════ */}
                <div>
                    {/* Section header */}
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16, justifyContent: "center" }}>
                            <span style={{ display: "block", width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2 }} />
                            <span style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>Keunggulan Kami</span>
                            <span style={{ display: "block", width: 28, height: 2, background: "linear-gradient(90deg,#6B32A8,#C4006E)", borderRadius: 2 }} />
                        </motion.div>

                        <motion.h2 {...fadeUp(0.08)} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(1.8rem,3.2vw,2.7rem)", lineHeight: 1.2, letterSpacing: "-0.3px", color: "#18181A", marginBottom: 14 }}>
                            Kenapa Memilih{" "}
                            <em style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(120deg,#00A8B5,#C4006E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                OneLens Media?
                            </em>
                        </motion.h2>

                        <motion.p {...fadeUp(0.14)} style={{ color: "#6B6B70", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
                            Lebih dari sekadar vendor — kami adalah mitra produksi yang memahami setiap detail acara Anda.
                        </motion.p>
                    </div>

                    {/* Baris 1 — 3 card */}
                    <div className="why-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20 }}>
                        {WHY_ITEMS.slice(0, 3).map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <WhyCard key={item.title} item={item} Icon={Icon} delay={i * 0.07} />
                            );
                        })}
                    </div>

                    {/* Baris 2 — 2 card ter-center */}
                    <div className="why-row-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: "calc(66.666% + 10px)", margin: "0 auto" }}>
                        {WHY_ITEMS.slice(3).map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <WhyCard key={item.title} item={item} Icon={Icon} delay={(i + 3) * 0.07} />
                            );
                        })}
                    </div>
                </div>

            </div>

            <style>{`
        /* ── Responsive ─────────────────────────── */
        @media (max-width: 1024px) {
          .about-container { padding: 0 28px !important; }
          .about-grid      { gap: 48px !important; }
          .why-row   { grid-template-columns: repeat(2, 1fr) !important; }
          .why-row-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; }
        }

        @media (max-width: 768px) {
          .about-container { padding: 0 20px !important; }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 64px !important;
          }
          .why-row   { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
          .why-row-2 { grid-template-columns: 1fr 1fr !important; gap: 14px !important; max-width: 100% !important; }
        }

        @media (max-width: 480px) {
          .about-container { padding: 0 16px !important; }
          .why-row   { grid-template-columns: 1fr !important; }
          .why-row-2 { grid-template-columns: 1fr !important; max-width: 100% !important; }
        }
      `}</style>
        </section>
    );
}