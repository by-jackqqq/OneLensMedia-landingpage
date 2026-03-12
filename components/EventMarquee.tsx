"use client";

import { motion } from "framer-motion";
import {
    GraduationCap, Users, Building2, Heart,
    BookOpen, Megaphone, Music2, Monitor,
    Trophy, Star, Camera, Shirt,
} from "lucide-react";

/* ── Marquee data ──────────────────────────────────────── */
const ROW_1 = [
    { label: "Wisuda Sekolah", icon: GraduationCap, color: "#00A8B5" },
    { label: "Class Meeting", icon: Users, color: "#6B32A8" },
    { label: "Dies Natalis", icon: Building2, color: "#C4006E" },
    { label: "Pengajian", icon: Heart, color: "#00A8B5" },
    { label: "Workshop", icon: BookOpen, color: "#6B32A8" },
    { label: "Komunitas", icon: Megaphone, color: "#C4006E" },
    { label: "Konser Musik", icon: Music2, color: "#00A8B5" },
    { label: "Seminar", icon: Monitor, color: "#6B32A8" },
];

const ROW_2 = [
    { label: "Corporate Event", icon: Trophy, color: "#C4006E" },
    { label: "Anniversary", icon: Star, color: "#00A8B5" },
    { label: "Fashion Show", icon: Shirt, color: "#6B32A8" },
    { label: "Pameran", icon: Camera, color: "#C4006E" },
    { label: "Gathering", icon: Users, color: "#00A8B5" },
    { label: "Pelantikan", icon: GraduationCap, color: "#6B32A8" },
    { label: "Kajian Rutin", icon: Heart, color: "#C4006E" },
    { label: "Bazar Sekolah", icon: Megaphone, color: "#00A8B5" },
];

/* ── Event cards ───────────────────────────────────────── */
const EVENTS = [
    {
        icon: GraduationCap, color: "#00A8B5", tag: "Pendidikan",
        title: "Wisuda Sekolah",
        desc: "Abadikan momen kelulusan dengan siaran langsung berkualitas tinggi — agar keluarga di mana pun bisa ikut hadir.",
    },
    {
        icon: Users, color: "#6B32A8", tag: "Sekolah",
        title: "Class Meeting & Gathering",
        desc: "Tunjukkan keseruan setiap kegiatan sekolah secara live agar semua pihak bisa menyaksikan momen terbaik.",
    },
    {
        icon: Building2, color: "#C4006E", tag: "Perayaan",
        title: "Dies Natalis / Anniversary",
        desc: "Siarkan perayaan sekolah atau organisasi dengan tampilan profesional dan kualitas broadcast terbaik.",
    },
    {
        icon: Heart, color: "#00A8B5", tag: "Keagamaan",
        title: "Pengajian & Kajian Rutin",
        desc: "Hadirkan pengalaman menonton yang nyaman bagi peserta online dengan audio jernih dan visual stabil.",
    },
    {
        icon: BookOpen, color: "#6B32A8", tag: "Edukasi",
        title: "Workshop & Seminar",
        desc: "Live streaming acara edukatif dengan kualitas suara dan video yang jernih untuk setiap peserta virtual.",
    },
    {
        icon: Megaphone, color: "#C4006E", tag: "Komunitas",
        title: "Acara Komunitas & Sosial",
        desc: "Dari lomba, charity event, hingga bazar sekolah — kami siap menyiarkan setiap momen komunitas Anda.",
    },
];

/* ── Marquee pill ──────────────────────────────────────── */
function Pill({ item }: { item: typeof ROW_1[0] }) {
    const Icon = item.icon;
    return (
        <div style={{
            display: "inline-flex", alignItems: "center", gap: 9,
            padding: "10px 20px", borderRadius: 100,
            background: "#FFFFFF", border: "1px solid #E2E0DB",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            flexShrink: 0, whiteSpace: "nowrap", userSelect: "none",
        }}>
            <div style={{
                width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                background: `${item.color}12`, border: `1px solid ${item.color}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <Icon size={13} color={item.color} strokeWidth={2} />
            </div>
            <span style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "0.8rem", fontWeight: 600, color: "#18181A",
            }}>
                {item.label}
            </span>
        </div>
    );
}

/* ── Marquee row ───────────────────────────────────────── */
function MarqueeRow({ items, reverse = false }: { items: typeof ROW_1; reverse?: boolean }) {
    const track = [...items, ...items, ...items, ...items];
    const dur = items.length * 4.5;
    return (
        <div style={{ overflow: "hidden", position: "relative" }}>
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: "linear-gradient(90deg,#FAFAF8,transparent)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: "linear-gradient(270deg,#FAFAF8,transparent)", pointerEvents: "none" }} />
            <div
                className={reverse ? "mq-rev" : "mq-fwd"}
                style={{
                    display: "flex", gap: 10, width: "max-content",
                    animationDuration: `${dur}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
            >
                {track.map((item, i) => <Pill key={i} item={item} />)}
            </div>
        </div>
    );
}

/* ── Event card ────────────────────────────────────────── */
function EventCard({ ev, i }: { ev: typeof EVENTS[0]; i: number }) {
    const Icon = ev.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.07 }}
            whileHover={{ y: -5, borderColor: ev.color, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
            style={{
                background: "#FFFFFF", border: "1px solid #E2E0DB",
                borderRadius: 20, padding: "26px 24px",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                display: "flex", flexDirection: "column",
                cursor: "default",
            }}
        >
            {/* Icon + tag */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `${ev.color}12`, border: `1px solid ${ev.color}22`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    <Icon size={20} color={ev.color} strokeWidth={1.8} />
                </div>
                <span style={{
                    fontSize: 10, fontWeight: 600, letterSpacing: "0.07em",
                    textTransform: "uppercase", color: ev.color,
                    background: `${ev.color}10`, border: `1px solid ${ev.color}20`,
                    borderRadius: 100, padding: "3px 10px",
                }}>
                    {ev.tag}
                </span>
            </div>

            {/* Accent line */}
            <div style={{ width: 28, height: 2, background: `linear-gradient(90deg,${ev.color},transparent)`, borderRadius: 2, marginBottom: 12 }} />

            <h3 style={{
                fontFamily: "var(--font-montserrat)", fontSize: "0.93rem",
                fontWeight: 700, color: "#18181A", lineHeight: 1.3, marginBottom: 10,
            }}>
                {ev.title}
            </h3>
            <p style={{ fontSize: "0.83rem", color: "#6B6B70", lineHeight: 1.75, margin: 0 }}>
                {ev.desc}
            </p>
        </motion.div>
    );
}

/* ── Main export ───────────────────────────────────────── */
export default function EventMarquee() {
    return (
        <section id="layanan" style={{
            position: "relative", background: "#FAFAF8",
            padding: "88px 0 96px", overflow: "hidden",
        }}>
            {/* Orb bg */}
            <div style={{
                position: "absolute", width: 700, height: 500,
                top: "30%", left: "50%", transform: "translate(-50%,-50%)",
                background: "radial-gradient(ellipse,rgba(107,50,168,.05) 0%,transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            {/* ── Header ── */}
            <div style={{ textAlign: "center", padding: "0 24px", marginBottom: 52, position: "relative", zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
                >
                    <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2, display: "block" }} />
                    <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        Layanan Kami
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
                    Event yang{" "}
                    <em style={{
                        fontStyle: "italic", fontWeight: 600,
                        background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                        Kami Tangani
                    </em>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
                    style={{ color: "#6B6B70", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 460, margin: "0 auto" }}
                >
                    Dari skala sekolah hingga korporat — kami siap menyiarkan setiap momen penting Anda secara profesional.
                </motion.p>
            </div>

            {/* ── Marquee ── */}
            <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.18 }}
                style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 72 }}
                onMouseEnter={e => {
                    (e.currentTarget.querySelectorAll(".mq-fwd,.mq-rev") as NodeListOf<HTMLElement>)
                        .forEach(el => el.style.animationPlayState = "paused");
                }}
                onMouseLeave={e => {
                    (e.currentTarget.querySelectorAll(".mq-fwd,.mq-rev") as NodeListOf<HTMLElement>)
                        .forEach(el => el.style.animationPlayState = "running");
                }}
            >
                <MarqueeRow items={ROW_1} />
                <MarqueeRow items={ROW_2} reverse />
            </motion.div>

            {/* ── Cards ── */}
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }} className="ev-container">
                <div className="ev-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                    {EVENTS.map((ev, i) => <EventCard key={ev.title} ev={ev} i={i} />)}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ textAlign: "center", marginTop: 48 }}
                >
                    <p style={{ color: "#6B6B70", fontSize: "0.9rem", marginBottom: 20 }}>
                        Tidak ada acara Anda di daftar? Kami tetap siap membantu.
                    </p>
                    <a
                        href="#kontak"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            padding: "12px 28px", borderRadius: 10,
                            fontFamily: "var(--font-montserrat)", fontSize: "0.88rem", fontWeight: 600,
                            color: "white", textDecoration: "none",
                            background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                            boxShadow: "0 4px 20px rgba(0,168,181,0.28)",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,168,181,0.38)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.transform = "";
                            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,168,181,0.28)";
                        }}
                    >
                        Konsultasi Acara Anda
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            <style>{`
        @keyframes mq-scroll-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes mq-scroll-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .mq-fwd { animation-name: mq-scroll-fwd; }
        .mq-rev { animation-name: mq-scroll-rev; }

        @media (max-width: 1024px) {
          .ev-container { padding: 0 28px !important; }
          .ev-grid      { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .ev-container { padding: 0 20px !important; }
          .ev-grid      { grid-template-columns: repeat(2,1fr) !important; gap: 14px !important; }
        }
        @media (max-width: 480px) {
          .ev-container { padding: 0 16px !important; }
          .ev-grid      { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}