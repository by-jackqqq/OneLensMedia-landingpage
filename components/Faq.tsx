"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ── FAQ data ──────────────────────────────────────────── */
const FAQS = [
    {
        q: "Berapa lama persiapan sebelum event?",
        a: "Kami biasanya membutuhkan 2–3 jam untuk setup. Untuk event besar, kami bisa datang H-1 agar persiapan lebih matang dan terstruktur.",
        color: "#00A8B5",
    },
    {
        q: "Streaming-nya ke platform apa?",
        a: "YouTube (paling umum untuk event sekolah), Instagram Live, Facebook, atau TikTok Live. Kalau ada platform lain yang diinginkan, bisa didiskusikan.",
        color: "#6B32A8",
    },
    {
        q: "Bagaimana kalau sinyal di sekolah lemah?",
        a: "Kami selalu bawa perangkat hotspot sendiri sebagai backup. Sudah terbukti di beberapa sekolah dengan sinyal kurang bagus — live tetap berjalan tanpa gangguan.",
        color: "#C4006E",
    },
    {
        q: "Ada rekaman yang bisa kami simpan?",
        a: "Ya! Semua paket sudah termasuk file rekaman. Kami kirim lewat Google Drive setelah event selesai. Langsung bisa dipakai untuk dokumentasi atau konten sosmed sekolah.",
        color: "#00A8B5",
    },
    {
        q: "Apakah harga dapat didiskusikan?",
        a: "Ya, terutama untuk sekolah atau OSIS dengan anggaran terbatas. Kami terbuka untuk berdiskusi terlebih dahulu — yang terpenting adalah kerja sama yang baik dan hasil yang memuaskan.",
        color: "#6B32A8",
    },
];

/* ── Single FAQ item ───────────────────────────────────── */
function FAQItem({ item, index, isOpen, onToggle }: {
    item: typeof FAQS[0];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
            style={{
                background: "#FFFFFF",
                border: `1px solid ${isOpen ? item.color + "55" : "#E2E0DB"}`,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: isOpen
                    ? `0 8px 32px ${item.color}12`
                    : "0 2px 10px rgba(0,0,0,0.04)",
                transition: "border-color 0.25s, box-shadow 0.25s",
            }}
        >
            {/* Question row */}
            <button
                onClick={onToggle}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 28px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                }}
            >
                {/* Left accent + question */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, minWidth: 0 }}>
                    <motion.div
                        animate={{ background: isOpen ? item.color : "#E2E0DB" }}
                        transition={{ duration: 0.25 }}
                        style={{ width: 3, height: 18, borderRadius: 2, flexShrink: 0 }}
                    />
                    <span style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#18181A",
                        lineHeight: 1.4,
                    }}>
                        {item.q}
                    </span>
                </div>

                {/* Plus / minus icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? item.color : "#8A8A8E" }}
                    transition={{ duration: 0.2 }}
                    style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: isOpen ? `${item.color}12` : "#F7F5F0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.1rem",
                        fontWeight: 300,
                        lineHeight: 1,
                        transition: "background 0.25s",
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </motion.div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{
                            padding: "0 28px 22px 45px",
                            borderTop: `1px solid ${item.color}20`,
                        }}>
                            <p style={{
                                fontSize: "0.85rem",
                                color: "#6B6B70",
                                lineHeight: 1.8,
                                margin: "16px 0 0",
                            }}>
                                {item.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ── Skeleton ──────────────────────────────────────────── */
export function FAQSkeleton() {
    return (
        <section style={{ background: "#FAFAF8", padding: "88px 0 96px" }}>
            <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 24px" }}>
                {/* Header skeleton */}
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <div style={{ width: 60, height: 10, background: "#F0EFED", borderRadius: 6, margin: "0 auto 16px" }} className="sk-pulse" />
                    <div style={{ width: 280, height: 36, background: "#F0EFED", borderRadius: 8, margin: "0 auto" }} className="sk-pulse" />
                </div>
                {/* Item skeletons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[72, 56, 56, 56, 72].map((h, i) => (
                        <div key={i} style={{
                            height: h,
                            background: "#FFFFFF",
                            border: "1px solid #E2E0DB",
                            borderRadius: 16,
                        }} className="sk-pulse" />
                    ))}
                </div>
            </div>
            <style>{`
        @keyframes sk-shimmer { 0%,100%{opacity:1} 50%{opacity:0.45} }
        .sk-pulse { animation: sk-shimmer 1.6s ease-in-out infinite; }
      `}</style>
        </section>
    );
}

/* ── Main export ───────────────────────────────────────── */
export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" style={{
            position: "relative",
            background: "#FAFAF8",
            padding: "88px 0 96px",
            overflow: "hidden",
        }}>
            {/* Orb bg */}
            <div style={{
                position: "absolute", width: 600, height: 400,
                top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                background: "radial-gradient(ellipse, rgba(107,50,168,.04) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }} className="faq-container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 52, position: "relative", zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
                    >
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2, display: "block" }} />
                        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            FAQ
                        </span>
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#6B32A8,#C4006E)", borderRadius: 2, display: "block" }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
                        style={{
                            fontFamily: "var(--font-montserrat)", fontWeight: 700,
                            fontSize: "clamp(1.8rem,3.2vw,2.7rem)", lineHeight: 1.2,
                            letterSpacing: "-0.3px", color: "#18181A", marginBottom: 12,
                        }}
                    >
                        Pertanyaan Yang{" "}
                        <em style={{
                            fontStyle: "italic", fontWeight: 600,
                            background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>
                            Sering Diajukan
                        </em>
                    </motion.h2>
                </div>

                {/* ── Items ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {FAQS.map((item, i) => (
                        <FAQItem
                            key={i}
                            item={item}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .faq-container { padding: 0 16px !important; }
        }
      `}</style>
        </section>
    );
}