"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Video, Download } from "lucide-react";

/* ── Step data ─────────────────────────────────────────── */
const STEPS = [
    {
        number: "01",
        title: "Hubungi Kami",
        desc: "Hubungi kami via WhatsApp atau media sosial. Ceritakan kebutuhan event Anda dan kami akan memberikan solusi terbaik sesuai skala dan anggaran.",
        color: "#00A8B5",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Koordinasi",
        desc: "Kami diskusikan rundown, kebutuhan teknis, dan survei lokasi bila diperlukan. Semua dipersiapkan dengan matang sebelum hari pelaksanaan.",
        color: "#6B32A8",
        icon: CalendarCheck,
    },
    {
        number: "03",
        title: "Hari H",
        desc: "Tim kami datang lebih awal, setup peralatan, dan pastikan semua sistem jalan sebelum acara mulai. Siaga dari awal sampai akhir.",
        color: "#C4006E",
        icon: Video,
    },
    {
        number: "04",
        title: "Selesai & Rekaman",
        desc: "File rekaman dikirimkan kepada pihak penyewa dan dapat langsung digunakan untuk keperluan dokumentasi atau konten media sosial.",
        color: "#00A8B5",
        icon: Download,
    },
];

/* ── Connector arrow (desktop only) ───────────────────── */
function Connector({ fromColor, toColor, index }: { fromColor: string; toColor: string; index: number }) {
    return (
        <div style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "flex-start",
            paddingTop: 30,
            width: 48,
        }}>
            <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
                <defs>
                    <linearGradient id={`cg-${index}`} x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor={fromColor} />
                        <stop offset="1" stopColor={toColor} />
                    </linearGradient>
                </defs>
                <line x1="0" y1="8" x2="36" y2="8" stroke={`url(#cg-${index})`} strokeWidth="1.5" strokeDasharray="4 3" />
                <path d="M30 4 L40 8 L30 12" stroke={toColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        </div>
    );
}

/* ── Single step card ──────────────────────────────────── */
function StepCard({ step, i }: { step: typeof STEPS[0]; i: number }) {
    const Icon = step.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: step.color, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
            style={{
                flex: 1,
                minWidth: 0,
                background: "#FFFFFF",
                border: "1px solid #E2E0DB",
                borderRadius: 20,
                padding: "28px 24px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle bg glow */}
            <div style={{
                position: "absolute", top: -40, right: -40,
                width: 120, height: 120, borderRadius: "50%",
                background: `radial-gradient(circle, ${step.color}0D 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />

            {/* Step number */}
            <div style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "4.5rem",
                fontWeight: 200,
                lineHeight: 1,
                color: "#E2E0DB",
                marginBottom: 14,
                userSelect: "none",
            }}>
                {step.number}
            </div>

            {/* Accent line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 + 0.25 }}
                style={{
                    height: 3,
                    background: `linear-gradient(90deg, ${step.color}, transparent)`,
                    borderRadius: 2,
                    marginBottom: 16,
                }}
            />

            {/* Title */}
            <h3 style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#18181A",
                lineHeight: 1.3,
                marginBottom: 10,
            }}>
                {step.title}
            </h3>

            {/* Desc */}
            <p style={{
                fontSize: "0.83rem",
                color: "#6B6B70",
                lineHeight: 1.75,
                margin: 0,
                flex: 1,
            }}>
                {step.desc}
            </p>

            {/* Icon badge */}
            <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: `${step.color}12`,
                border: `1px solid ${step.color}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
            }}>
                <Icon size={18} color={step.color} strokeWidth={1.8} />
            </div>
        </motion.div>
    );
}

/* ── Skeleton card ─────────────────────────────────────── */
function SkeletonCard() {
    return (
        <div style={{
            flex: 1,
            minWidth: 0,
            background: "#FFFFFF",
            border: "1px solid #E2E0DB",
            borderRadius: 20,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
        }}>
            <div style={{ width: 56, height: 56, borderRadius: 8, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: 32, height: 3, borderRadius: 2, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: "55%", height: 14, borderRadius: 6, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: "100%", height: 10, borderRadius: 6, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: "80%", height: 10, borderRadius: 6, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: "60%", height: 10, borderRadius: 6, background: "#F0EFED" }} className="sk-pulse" />
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "#F0EFED", marginTop: 8 }} className="sk-pulse" />
        </div>
    );
}

/* ── Exported skeleton ─────────────────────────────────── */
export function HowItWorksSkeleton() {
    return (
        <section style={{
            background: "#FFFFFF",
            borderTop: "1px solid #E2E0DB",
            borderBottom: "1px solid #E2E0DB",
            padding: "88px 0 96px",
        }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }} className="hiw-container">
                {/* Header skeleton */}
                <div style={{ marginBottom: 52 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                        <div style={{ width: 28, height: 2, background: "#F0EFED", borderRadius: 2 }} className="sk-pulse" />
                        <div style={{ width: 80, height: 10, background: "#F0EFED", borderRadius: 6 }} className="sk-pulse" />
                        <div style={{ width: 28, height: 2, background: "#F0EFED", borderRadius: 2 }} className="sk-pulse" />
                    </div>
                    <div style={{ width: 320, height: 36, borderRadius: 8, background: "#F0EFED" }} className="sk-pulse" />
                </div>

                {/* Row skeleton — desktop */}
                <div className="hiw-row" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
                            <SkeletonCard />
                            {i < 3 && (
                                <div style={{ flexShrink: 0, width: 48, paddingTop: 30, display: "flex", alignItems: "flex-start" }}>
                                    <div style={{ width: 48, height: 2, background: "#F0EFED", borderRadius: 2 }} className="sk-pulse" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Column skeleton — mobile */}
                <div className="hiw-mobile" style={{ display: "none", flexDirection: "column", gap: 0 }}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} style={{ display: "flex", gap: 16 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F0EFED", marginTop: 4 }} className="sk-pulse" />
                                {i < 3 && <div style={{ width: 2, flex: 1, minHeight: 60, marginTop: 4, background: "#F0EFED", borderRadius: 2 }} className="sk-pulse" />}
                            </div>
                            <div style={{ flex: 1, minWidth: 0, paddingBottom: 16 }}>
                                <SkeletonCard />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA skeleton */}
                <div style={{ marginTop: 48, height: 68, borderRadius: 16, background: "#F7F5F0", border: "1px solid #E2E0DB" }} className="sk-pulse" />
            </div>

            <style>{`
        @keyframes sk-shimmer { 0%,100%{opacity:1} 50%{opacity:0.45} }
        .sk-pulse { animation: sk-shimmer 1.6s ease-in-out infinite; }
        @media (max-width: 768px) {
          .hiw-row    { display: none !important; }
          .hiw-mobile { display: flex !important; }
          .hiw-container { padding: 0 20px !important; }
        }
      `}</style>
        </section>
    );
}

/* ── Main export ───────────────────────────────────────── */
export default function HowItWorks() {
    return (
        <section id="cara-kerja" style={{
            position: "relative",
            background: "#FFFFFF",
            borderTop: "1px solid #E2E0DB",
            borderBottom: "1px solid #E2E0DB",
            padding: "88px 0 96px",
            overflow: "hidden",
        }}>
            {/* Orb bg */}
            <div style={{
                position: "absolute", width: 700, height: 500,
                top: "40%", left: "50%", transform: "translate(-50%,-50%)",
                background: "radial-gradient(ellipse, rgba(107,50,168,.05) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }} className="hiw-container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 52, position: "relative", zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
                    >
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2, display: "block" }} />
                        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            Cara Kerja
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
                        Dari Konsultasi Hingga{" "}
                        <em style={{
                            fontStyle: "italic", fontWeight: 600,
                            background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>
                            Ke Layar
                        </em>
                    </motion.h2>

    
                </div>

                {/* ── Desktop: horizontal row ── */}
                <div className="hiw-row" style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
                    {STEPS.map((step, i) => (
                        <div key={step.number} style={{ display: "flex", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
                            <StepCard step={step} i={i} />
                            {i < STEPS.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.45, duration: 0.4 }}
                                >
                                    <Connector fromColor={step.color} toColor={STEPS[i + 1].color} index={i} />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── Mobile: vertical timeline ── */}
                <div className="hiw-mobile" style={{ display: "none", flexDirection: "column", gap: 0 }}>
                    {STEPS.map((step, i) => (
                        <div key={step.number} style={{ display: "flex", gap: 16 }}>
                            {/* Timeline dot + line */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.15, duration: 0.35, type: "spring" }}
                                    style={{
                                        width: 12, height: 12, borderRadius: "50%",
                                        background: step.color,
                                        boxShadow: `0 0 0 4px ${step.color}20`,
                                        flexShrink: 0, marginTop: 4, zIndex: 1,
                                    }}
                                />
                                {i < STEPS.length - 1 && (
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                                        style={{
                                            width: 2, flex: 1, minHeight: 60, marginTop: 4,
                                            background: `linear-gradient(to bottom, ${step.color}, ${STEPS[i + 1].color})`,
                                            borderRadius: 2, transformOrigin: "top",
                                        }}
                                    />
                                )}
                            </div>
                            {/* Card */}
                            <div style={{ flex: 1, minWidth: 0, paddingBottom: 16 }}>
                                <StepCard step={step} i={i} />
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>

            <style>{`
        @keyframes live-blink { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .live-dot { animation: live-blink 2s ease-in-out infinite; }

        @media (max-width: 768px) {
          .hiw-row    { display: none !important; }
          .hiw-mobile { display: flex !important; }
          .hiw-container { padding: 0 20px !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .hiw-container { padding: 0 28px !important; }
        }
      `}</style>
        </section>
    );
}