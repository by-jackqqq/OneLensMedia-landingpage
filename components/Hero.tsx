"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const MARQUEE_ITEMS = [
    { label: "Wedding Live", color: "#00C9D4" },
    { label: "Corporate Event", color: "#D4007A" },
    { label: "Konser Musik", color: "#7E3FBF" },
    { label: "Webinar", color: "#C9A227" },
    { label: "Product Launch", color: "#00C9D4" },
    { label: "Fashion Show", color: "#D4007A" },
    { label: "Conference", color: "#7E3FBF" },
    { label: "Olahraga", color: "#C9A227" },
];
const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const STATS = [
    { num: "500+", label: "Event" },
    { num: "7 Thn", label: "Pengalaman" },
    { num: "99%", label: "Uptime" },
];

function fu(delay = 0) {
    return {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: "easeOut" as const, delay },
    };
}

// Ganti dengan path file MP4 kamu di folder /public/videos/
const VIDEO_SRC = "/videos/demo.mp4";

// Skeleton shimmer component
function Skeleton({ style }: { style?: React.CSSProperties }) {
    return (
        <div style={{
            background: "linear-gradient(90deg, #f0eeea 25%, #e8e5e0 50%, #f0eeea 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.6s ease-in-out infinite",
            borderRadius: 8,
            ...style
        }} />
    );
}

export default function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [contentReady, setContentReady] = useState(false);

    // Delay content reveal slightly sehingga fonts/layout settle
    useEffect(() => {
        const t = setTimeout(() => setContentReady(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <section style={{
                position: "relative",
                height: "100vh",
                minHeight: 600,
                display: "flex",
                alignItems: "center",
                background: "#FAFAF8",
                overflow: "hidden"
            }} className="hero-section">

                {/* Orbs */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                    <div style={{ position: "absolute", width: 600, height: 600, top: -200, right: -150, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,168,181,0.10) 0%, transparent 70%)", filter: "blur(100px)", animation: "drift1 16s ease-in-out infinite" }} />
                    <div style={{ position: "absolute", width: 500, height: 500, bottom: -150, left: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,0,110,0.08) 0%, transparent 70%)", filter: "blur(100px)", animation: "drift2 20s ease-in-out infinite" }} />
                    <div style={{ position: "absolute", width: 350, height: 350, top: "40%", left: "38%", borderRadius: "50%", background: "radial-gradient(circle, rgba(107,50,168,0.07) 0%, transparent 70%)", filter: "blur(100px)", animation: "drift1 24s ease-in-out infinite reverse" }} />
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)" }} />
                </div>

                {/* Grid */}
                <div
                    style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "80px 40px 40px", display: "grid", gap: 48, alignItems: "center", height: "100%" }}
                    className="hero-grid"
                >
                    {/* ── LEFT ─────────────────────────────────────────────────── */}
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        {!contentReady ? (
                            /* LEFT SKELETON */
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <Skeleton style={{ height: 44, width: "80%" }} />
                                <Skeleton style={{ height: 44, width: "60%" }} />
                                <Skeleton style={{ height: 44, width: "70%", marginBottom: 8 }} />
                                <Skeleton style={{ height: 16, width: "100%" }} />
                                <Skeleton style={{ height: 16, width: "90%" }} />
                                <Skeleton style={{ height: 16, width: "75%", marginBottom: 16 }} />
                                <div style={{ display: "flex", gap: 12 }}>
                                    <Skeleton style={{ height: 46, width: 160, borderRadius: 8 }} />
                                    <Skeleton style={{ height: 46, width: 140, borderRadius: 8 }} />
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* H1 */}
                                <motion.h1 {...fu(0.05)} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(2.2rem, 4.2vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.5px", color: "#18181A", marginBottom: 18 }}>
                                    Satu Lensa,<br />
                                    <em style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                        Satu Momen,
                                    </em><br />
                                    Satu Cerita.
                                </motion.h1>

                                {/* Description */}
                                <motion.p {...fu(0.15)} style={{ color: "#6B6B70", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 420, marginBottom: 28 }}>
                                    1ens Media menghadirkan produksi live streaming premium — dari wedding intim
                                    hingga konser ribuan penonton. Jernih, stabil, profesional.
                                </motion.p>

                                {/* Buttons */}
                                <motion.div {...fu(0.25)} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                                    <Link href="#kontak" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "white", textDecoration: "none", background: "linear-gradient(135deg,#00A8B5,#6B32A8)", boxShadow: "0 4px 20px rgba(0,168,181,0.28)", transition: "opacity 0.2s, transform 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "none"; }}
                                    >
                                        Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                                    </Link>
                                    <Link href="#portfolio" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#18181A", textDecoration: "none", border: "1px solid #E2E0DB", background: "transparent", transition: "border-color 0.2s, background 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#18181A"; e.currentTarget.style.background = "rgba(0,0,0,0.03)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E0DB"; e.currentTarget.style.background = "transparent"; }}
                                    >
                                        <Play size={13} style={{ fill: "#18181A" }} /> Lihat Portfolio
                                    </Link>
                                </motion.div>

                                {/* Stats */}
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

                    {/* ── RIGHT — Portrait Video Card ──────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        style={{ position: "relative", display: "flex", justifyContent: "center" }}
                        className="hero-right"
                    >
                        {/* Float card — top right: Behind the Lens */}
                        <motion.div
                            animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : -12 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ position: "absolute", top: 16, right: 12, zIndex: 20, background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.09)" }}
                            className="float-card-hide"
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B32A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                </svg>
                                <span style={{ fontFamily: "Arial,sans-serif", fontSize: 9, color: "#6B6B70", letterSpacing: "0.1em", textTransform: "uppercase" }}>Behind the Lens</span>
                            </div>
                            <div style={{ fontFamily: "var(--font-montserrat)", fontSize: "1rem", fontWeight: 700, lineHeight: 1.3, color: "#18181A" }}>Tim Kami<br />
                                <span style={{ fontWeight: 400, fontSize: "0.8rem", color: "#6B6B70" }}>Bekerja di lapangan</span>
                            </div>
                        </motion.div>

                        {/* Main card */}
                        <div className="video-card" style={{ background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", width: "100%", maxWidth: 300 }}>

                            {/* Video area */}
                            <div className="video-area" style={{ position: "relative", height: "min(62vh, 500px)", background: "#111", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>

                                {/* Loading state */}
                                <AnimatePresence>
                                    {!videoLoaded && (
                                        <motion.div
                                            key="video-skeleton"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ position: "absolute", inset: 0, zIndex: 5, background: "#111", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}
                                        >
                                            {/* Animated loader */}
                                            <div style={{ position: "relative", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "pulse-icon 2s ease-in-out infinite" }}>
                                                    <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                                </svg>
                                                <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: "absolute", inset: 0, animation: "spin 1.4s linear infinite" }}>
                                                    <circle cx="30" cy="30" r="26" fill="none" stroke="url(#loadGrad)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50 114" />
                                                    <defs>
                                                        <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#00A8B5" />
                                                            <stop offset="100%" stopColor="#C4006E" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Memuat video...</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <video
                                    src={VIDEO_SRC}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    onCanPlay={() => setVideoLoaded(true)}
                                    style={{
                                        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                                        opacity: videoLoaded ? 1 : 0,
                                        transition: "opacity 0.6s ease"
                                    }}
                                />

                                {/* Cinematic badge — muncul setelah video loaded */}
                                <AnimatePresence>
                                    {videoLoaded && (
                                        <motion.div
                                            key="cinematic-badge"
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                            style={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "5px 12px", backdropFilter: "blur(8px)", zIndex: 10, pointerEvents: "none" }}
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="rgba(255,255,255,0.85)" stroke="none" />
                                            </svg>
                                            <span style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}>CINEMATIC</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Card body */}
                            <div style={{ padding: "14px 18px" }}>
                                {!videoLoaded ? (
                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <Skeleton style={{ height: 13, width: "55%" }} />
                                        <Skeleton style={{ height: 4, width: "100%", borderRadius: 4 }} />
                                    </div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                                            <h4 style={{ fontSize: 13, fontWeight: 600, color: "#18181A" }}>Behind the Scene</h4>
                                            <span style={{ fontFamily: "Arial,sans-serif", fontSize: 11, color: "#6B6B70" }}>1ens Media Crew</span>
                                        </div>
                                        <div style={{ height: 2, background: "rgba(0,0,0,0.06)", borderRadius: 2, overflow: "hidden" }}>
                                            <div style={{ height: "100%", width: "58%", background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2 }} />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Float card — bottom left: Produksi Profesional */}
                        <motion.div
                            animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 12 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            style={{ position: "absolute", bottom: 80, left: 10, zIndex: 20, background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.09)" }}
                            className="float-card-hide"
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00A8B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <span style={{ fontSize: 12, fontWeight: 600, color: "#18181A" }}>Produksi Profesional</span>
                            </div>
                            <div style={{ fontFamily: "Arial,sans-serif", fontSize: 10, color: "#6B6B70" }}>Crew berpengalaman</div>
                        </motion.div>
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
        /* ── Keyframes ───────────────────────────────── */
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-icon {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.08); }
        }

        /* ── Desktop default ─────────────────────────── */
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        .float-card-hide {
          display: flex;
        }

        /* ── Tablet ≤ 1024px ─────────────────────────── */
        @media (max-width: 1024px) {
          .hero-grid {
            gap: 32px !important;
            padding: 80px 28px 36px !important;
          }
        }

        /* ── Mobile ≤ 768px ──────────────────────────── */
        @media (max-width: 768px) {
          /* Single column: teks di atas, video di bawah */
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 88px 20px 36px !important;
            gap: 24px !important;
            height: auto !important;
            align-items: start !important;
          }

          /* Section tinggi auto di mobile */
          .hero-section {
            height: auto !important;
            min-height: 100svh !important;
          }

          /* Sembunyikan float cards */
          .float-card-hide {
            display: none !important;
          }

          /* Video card full width */
          .video-card {
            max-width: 100% !important;
          }

          /* Video area lebih pendek di mobile */
          .video-area {
            height: 52vw !important;
            max-height: 300px !important;
          }
        }

        /* ── Small mobile ≤ 480px ────────────────────── */
        @media (max-width: 480px) {
          .hero-grid {
            padding: 80px 16px 28px !important;
            gap: 20px !important;
          }
          .video-area {
            height: 58vw !important;
          }
        }
      `}</style>
        </>
    );
}