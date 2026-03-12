"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Video, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const MARQUEE_ITEMS = [
    { label: "Wisuda Sekolah", color: "#00C9D4" },
    { label: "Dies Natalis", color: "#D4007A" },
    { label: "Pentas Seni", color: "#7E3FBF" },
    { label: "Seminar Sekolah", color: "#C9A227" },
    { label: "Podcast", color: "#00C9D4" },
    { label: "E-Sport", color: "#D4007A" },
    { label: "Workshop", color: "#7E3FBF" },
    { label: "Pengajian", color: "#C9A227" },
]
const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const STATS = [
    { num: "20+", label: "Event" },
    { num: "2+ Thn", label: "Pengalaman" },
    { num: "99%", label: "Uptime" },
];

function fu(delay = 0) {
    return {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: "easeOut" as const, delay },
    };
}

const VIDEO_SRC = "/videos/demo.mp4";

function Skeleton({ w, h, radius = 8 }: { w: string | number; h: number; radius?: number }) {
    return (
        <div style={{
            width: w, height: h, borderRadius: radius, flexShrink: 0,
            background: "linear-gradient(90deg,#ede9e3 25%,#e3dfd8 50%,#ede9e3 75%)",
            backgroundSize: "200% 100%",
            animation: "sk-shimmer 1.6s ease-in-out infinite",
        }} />
    );
}

export default function Hero() {
    const [videoReady, setVideoReady] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <section className="hero-section" style={{
                position: "relative", height: "100vh", minHeight: 600,
                display: "flex", alignItems: "center",
                background: "#FAFAF8", overflow: "hidden",
            }}>

                {/* Orbs */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                    <div style={{ position: "absolute", width: 600, height: 600, top: -200, right: -150, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,168,181,.10) 0%,transparent 70%)", filter: "blur(100px)", animation: "drift1 16s ease-in-out infinite" }} />
                    <div style={{ position: "absolute", width: 500, height: 500, bottom: -150, left: -100, borderRadius: "50%", background: "radial-gradient(circle,rgba(196,0,110,.08) 0%,transparent 70%)", filter: "blur(100px)", animation: "drift2 20s ease-in-out infinite" }} />
                    <div style={{ position: "absolute", width: 350, height: 350, top: "40%", left: "38%", borderRadius: "50%", background: "radial-gradient(circle,rgba(107,50,168,.07) 0%,transparent 70%)", filter: "blur(100px)", animation: "drift1 24s ease-in-out infinite reverse" }} />
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%,black 30%,transparent 100%)" }} />
                </div>

                {/* Grid */}
                <div className="hero-grid" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "80px 40px 40px", display: "grid", gap: 48, alignItems: "center", height: "100%" }}>

                    {/* ════ LEFT ════ */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {!mounted ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <Skeleton w="78%" h={48} />
                                <Skeleton w="58%" h={48} />
                                <Skeleton w="68%" h={48} />
                                <div style={{ height: 12 }} />
                                <Skeleton w="100%" h={14} />
                                <Skeleton w="88%" h={14} />
                                <Skeleton w="72%" h={14} />
                                <div style={{ height: 8 }} />
                                <div style={{ display: "flex", gap: 12 }}>
                                    <Skeleton w={156} h={46} radius={8} />
                                    <Skeleton w={136} h={46} radius={8} />
                                </div>
                                <div style={{ height: 8 }} />
                                <div style={{ display: "flex" }}>
                                    <Skeleton w={64} h={40} radius={4} />
                                    <div style={{ width: 64 }} />
                                    <Skeleton w={64} h={40} radius={4} />
                                    <div style={{ width: 64 }} />
                                    <Skeleton w={64} h={40} radius={4} />
                                </div>
                            </div>
                        ) : (
                            <>
                                <motion.h1 {...fu(0.05)} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(2.2rem,4.2vw,4rem)", lineHeight: 1.1, letterSpacing: "-0.5px", color: "#18181A", marginBottom: 18 }}>
                                    Satu Lensa,<br />
                                    <em style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                        Satu Momen,
                                    </em><br />
                                    Satu Cerita.
                                </motion.h1>

                                <motion.p {...fu(0.15)} style={{ color: "#6B6B70", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 420, marginBottom: 28 }}>
                                        OneLens Media menghadirkan layanan live streaming profesional untuk berbagai event sekolah dan komunitas — mulai dari wisuda, pengajian, hingga pentas seni. Jernih, stabil, dan siap disaksikan dari mana saja.
                                </motion.p>

                                <motion.div {...fu(0.25)} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                                    <Link href="#kontak"
                                        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "white", textDecoration: "none", background: "linear-gradient(135deg,#00A8B5,#6B32A8)", boxShadow: "0 4px 20px rgba(0,168,181,.28)", transition: "opacity .2s,transform .2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
                                    >
                                        Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                                    </Link>
                                    <Link href="#portfolio"
                                        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#18181A", textDecoration: "none", border: "1px solid #E2E0DB", background: "transparent", transition: "border-color .2s,background .2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#18181A"; e.currentTarget.style.background = "rgba(0,0,0,.03)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E0DB"; e.currentTarget.style.background = "transparent"; }}
                                    >
                                        <Play size={13} style={{ fill: "#18181A" }} /> Lihat Portfolio
                                    </Link>
                                </motion.div>

                                <motion.div {...fu(0.35)} style={{ display: "flex", alignItems: "center" }}>
                                    {STATS.map((s, i) => (
                                        <div key={s.label} style={{ display: "flex", alignItems: "stretch" }}>
                                            <div>
                                                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "2.2rem", fontWeight: 700, lineHeight: 1, marginBottom: 4, background: "linear-gradient(120deg,#00A8B5,#C4006E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                                    {s.num}
                                                </div>
                                                <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#6B6B70", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                                                    {s.label}
                                                </div>
                                            </div>
                                            {i < STATS.length - 1 && (
                                                <div style={{ width: 1, background: "#E2E0DB", margin: "0 32px", alignSelf: "stretch" }} />
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </div>

                    {/* ════ RIGHT ════ */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ display: "flex", justifyContent: "center" }}
                        className="hero-right"
                    >
                        {/* Inner wrapper — semua float cards posisi relatif ke sini */}
                        <div style={{ position: "relative", width: "100%", maxWidth: 300 }}>

                            {/* Float card TOP RIGHT */}
                            <motion.div
                                className="float-card-hide"
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: videoReady ? 1 : 0, y: videoReady ? 0 : -12 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                style={{ position: "absolute", top: -20, right: -20, zIndex: 20, background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,.09)", width: 164 }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                                    <Video size={13} color="#6B32A8" strokeWidth={2} />
                                    <span style={{ fontFamily: "Arial,sans-serif", fontSize: 9, color: "#6B6B70", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Behind the Lens</span>
                                </div>
                                <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", fontWeight: 700, lineHeight: 1.3, color: "#18181A" }}>Tim Kami</div>
                                <div style={{ fontFamily: "Arial,sans-serif", fontSize: "0.8rem", color: "#6B6B70", marginTop: 2 }}>Bekerja di lapangan</div>
                            </motion.div>

                            {/* Main Card */}
                            <div style={{ background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,.08)", width: "100%" }}>

                                {/* Video area */}
                                <div className="video-area" style={{ position: "relative", height: "min(62vh,500px)", background: "#111", overflow: "hidden" }}>

                                    {/* Loading skeleton */}
                                    <AnimatePresence>
                                        {!videoReady && (
                                            <motion.div
                                                key="vsk"
                                                initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                style={{ position: "absolute", inset: 0, zIndex: 5, background: "#111", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}
                                            >
                                                <div style={{ position: "relative", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Video size={28} color="rgba(255,255,255,0.2)" strokeWidth={1.5} style={{ animation: "sk-pulse 2s ease-in-out infinite" }} />
                                                    <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: "absolute", inset: 0, animation: "sk-spin 1.4s linear infinite" }}>
                                                        <circle cx="30" cy="30" r="26" fill="none" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50 114" />
                                                        <defs>
                                                            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                <stop offset="0%" stopColor="#00A8B5" />
                                                                <stop offset="100%" stopColor="#C4006E" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <span style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Memuat video…</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Video */}
                                    <video
                                        src={VIDEO_SRC}
                                        autoPlay loop muted playsInline preload="auto"
                                        onCanPlay={() => setVideoReady(true)}
                                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: videoReady ? 1 : 0, transition: "opacity .6s ease" }}
                                    />

                                    {/* Cinematic badge */}
                                    <AnimatePresence>
                                        {videoReady && (
                                            <motion.div
                                                key="badge"
                                                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.4 }}
                                                style={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,.45)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 100, padding: "5px 12px", backdropFilter: "blur(8px)", zIndex: 10, pointerEvents: "none" }}
                                            >
                                                <Play size={10} color="rgba(255,255,255,0.85)" fill="rgba(255,255,255,0.85)" />
                                                <span style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "rgba(255,255,255,.9)", letterSpacing: "0.1em" }}>CINEMATIC</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Card body */}
                                <div style={{ padding: "14px 18px" }}>
                                    {!videoReady ? (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                            <Skeleton w="55%" h={13} />
                                            <Skeleton w="100%" h={4} radius={4} />
                                        </div>
                                    ) : (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                                                <h4 style={{ fontSize: 13, fontWeight: 600, color: "#18181A" }}>Behind the Scene</h4>
                                                <span style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#6B6B70" }}>Oneens Media Crew</span>
                                            </div>
                                            <div style={{ height: 2, background: "rgba(0,0,0,.06)", borderRadius: 2, overflow: "hidden" }}>
                                                <div style={{ height: "100%", width: "58%", background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2 }} />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Float card BOTTOM LEFT */}
                            <motion.div
                                className="float-card-hide"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: videoReady ? 1 : 0, y: videoReady ? 0 : 12 }}
                                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                style={{ position: "absolute", bottom: 86, left: -20, zIndex: 20, background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,.09)", width: 174 }}
                            >
                                {/* Row icon + label */}
                                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                                    {/* ShieldCheck dirender dalam span terpisah agar tidak terpotong overflow */}
                                    <span style={{ display: "flex", flexShrink: 0 }}>
                                        <ShieldCheck size={14} color="#00A8B5" strokeWidth={2} />
                                    </span>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: "#18181A", whiteSpace: "nowrap" }}>Produksi Profesional</span>
                                </div>
                                <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#6B6B70" }}>Crew berpengalaman</div>
                            </motion.div>

                        </div>{/* end inner wrapper */}
                    </motion.div>

                </div>
            </section>

            {/* Marquee */}
            <div style={{ borderTop: "1px solid #E2E0DB", borderBottom: "1px solid #E2E0DB", background: "#FFFFFF", padding: "14px 0", overflow: "hidden" }}>
                <div className="mq-track">
                    {MARQUEE_DOUBLED.map((item, i) => (
                        <div key={i} className="mq-item">
                            <div className="mq-dot" style={{ background: item.color }} />
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes sk-shimmer {
          0%   { background-position:  200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes sk-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sk-pulse {
          0%,100% { opacity:.2; transform:scale(1); }
          50%     { opacity:.5; transform:scale(1.08); }
        }

        /* Desktop */
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .float-card-hide { display: block; }
        .video-area { border-radius: 20px 20px 0 0; }

        /* Tablet ≤ 1024px */
        @media (max-width: 1024px) {
          .hero-grid { gap: 32px !important; padding: 80px 28px 36px !important; }
        }

        /* Mobile ≤ 768px */
        @media (max-width: 768px) {
          .hero-section { height: auto !important; min-height: 100svh !important; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 88px 20px 40px !important;
            gap: 28px !important;
            height: auto !important;
            align-items: start !important;
          }
          .float-card-hide { display: none !important; }
          .video-area { height: 56vw !important; max-height: 280px !important; }
          .hero-right > div { max-width: 100% !important; }
        }

        /* Small mobile ≤ 480px */
        @media (max-width: 480px) {
          .hero-grid { padding: 80px 16px 32px !important; gap: 22px !important; }
          .video-area { height: 60vw !important; }
        }
      `}</style>
        </>
    );
}