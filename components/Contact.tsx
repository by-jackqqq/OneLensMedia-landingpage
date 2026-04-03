"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* ── Social / contact links ────────────────────────────── */
const CONTACTS = [
    {
        label: "WhatsApp",
        value: "+62 852-5712-1642",
        href: "https://wa.me/6285257121642",
        icon: FaWhatsapp,
        color: "#25D366",
    },
    {
        label: "Email",
        value: "info@onelensmedia.web.id",
        href: "mailto:info@onelensmedia.web.id",
        icon: MdEmail,
        color: "#00A8B5",
    },
    {
        label: "Instagram",
        value: "@1lens.media",
        href: "https://instagram.com/1lens.media",
        icon: FaInstagram,
        color: "#C4006E",
    },
    {
        label: "TikTok",
        value: "@1lens.media",
        href: "https://tiktok.com/@1lens.media",
        icon: FaTiktok,
        color: "#6B32A8",
    },
];

const EVENT_TYPES = [
    "Pilih jenis event...",
    "Dinamika Santri / Pentas Seni",
    "Classmeet / Turnamen",
    "Wisuda & Pelepasan",
    "Konser / Pertunjukan Ekskul",
    "Acara Keagamaan Sekolah",
    "Event Lainnya",
];

/* ── Contact card ──────────────────────────────────────── */
function ContactCard({ item, i }: { item: typeof CONTACTS[0]; i: number }) {
    const Icon = item.icon;
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px",
                background: hovered ? `${item.color}08` : "#FFFFFF",
                border: `1px solid ${hovered ? item.color + "55" : "#E2E0DB"}`,
                borderRadius: 16,
                textDecoration: "none",
                boxShadow: hovered
                    ? `0 8px 28px ${item.color}18`
                    : "0 2px 10px rgba(0,0,0,0.04)",
                transition: "all 0.25s ease",
                cursor: "pointer",
            }}
        >
            {/* Icon badge */}
            <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${item.color}12`,
                border: `1px solid ${item.color}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "transform 0.2s",
                transform: hovered ? "scale(1.1)" : "scale(1)",
            }}>
                <Icon size={20} color={item.color} />
            </div>

            {/* Label + value */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: item.color,
                    marginBottom: 3,
                }}>
                    {item.label}
                </div>
                <div style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#18181A",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap" as const,
                }}>
                    {item.value}
                </div>
            </div>

            {/* Arrow */}
            <motion.div
                animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.3 }}
                transition={{ duration: 0.2 }}
                style={{ color: item.color, flexShrink: 0 }}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.div>
        </motion.a>
    );
}

/* ── Shared input style factory ────────────────────────── */
function inputStyle(focused: boolean): React.CSSProperties {
    return {
        width: "100%",
        background: "#F7F5F0",
        border: `1px solid ${focused ? "#00A8B5" : "#E2E0DB"}`,
        borderRadius: 12,
        padding: "13px 16px",
        fontFamily: "var(--font-montserrat)",
        fontSize: "0.88rem",
        color: "#18181A",
        outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: focused ? "0 0 0 3px rgba(0,168,181,0.12)" : "none",
    };
}

function Label({ children }: { children: React.ReactNode }) {
    return (
        <div style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "#6B6B70",
            marginBottom: 8,
        }}>
            {children}
        </div>
    );
}

/* ── Skeleton ──────────────────────────────────────────── */
export function ContactSkeleton() {
    return (
        <section style={{ background: "#FAFAF8", padding: "88px 0 96px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <div style={{ width: 60, height: 10, background: "#F0EFED", borderRadius: 6, margin: "0 auto 16px" }} className="sk-pulse" />
                    <div style={{ width: 300, height: 36, background: "#F0EFED", borderRadius: 8, margin: "0 auto 12px" }} className="sk-pulse" />
                    <div style={{ width: 220, height: 12, background: "#F0EFED", borderRadius: 6, margin: "0 auto" }} className="sk-pulse" />
                </div>
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, alignItems: "start" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} style={{ height: 76, background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 16 }} className="sk-pulse" />
                        ))}
                    </div>
                    <div style={{ background: "#FFFFFF", border: "1px solid #E2E0DB", borderRadius: 24, padding: 32 }}>
                        <div style={{ height: 4, background: "#F0EFED", borderRadius: 4, marginBottom: 28 }} className="sk-pulse" />
                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {[44, 44, 44, 108, 52].map((h, i) => (
                                <div key={i} style={{ height: h, background: "#F0EFED", borderRadius: 12 }} className="sk-pulse" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes sk-shimmer { 0%,100%{opacity:1} 50%{opacity:0.45} }
        .sk-pulse { animation: sk-shimmer 1.6s ease-in-out infinite; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </section>
    );
}

/* ── Main export ───────────────────────────────────────── */
export default function Contact() {
    const [focused, setFocused] = useState<string | null>(null);
    const [form, setForm] = useState({ name: "", phone: "", event: EVENT_TYPES[0], desc: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = () => {
        const msg = encodeURIComponent(
            `Halo OneLens Media 

Perkenalkan, saya dari:
Nama/Instansi: ${form.name}
WhatsApp: ${form.phone}

Saya ingin mengajukan kerja sama untuk dokumentasi:
Jenis Event: ${form.event}

Deskripsi Event:
${form.desc}

Mohon informasi lebih lanjut terkait ketersediaan jadwal, paket layanan, serta penawaran harga dari OneLens Media.

Terima kasih atas perhatian dan responnya `
        );
        window.open(`https://wa.me/6285257121642?text=${msg}`, "_blank");
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="kontak" style={{
            position: "relative",
            background: "#FAFAF8",
            padding: "88px 0 96px",
            overflow: "hidden",
        }}>
            {/* Orbs */}
            <div style={{
                position: "absolute", width: 700, height: 500,
                top: "40%", left: "50%", transform: "translate(-50%,-50%)",
                background: "radial-gradient(ellipse, rgba(0,168,181,.05) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", width: 400, height: 400,
                bottom: "-100px", right: "-80px",
                background: "radial-gradient(ellipse, rgba(196,0,110,.04) 0%, transparent 70%)",
                filter: "blur(60px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }} className="contact-container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
                    >
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2, display: "block" }} />
                        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            Ajak Kami
                        </span>
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#6B32A8,#C4006E)", borderRadius: 2, display: "block" }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 300,
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            lineHeight: 1.2,
                            color: "#18181A",
                            marginBottom: 12,
                        }}
                    >
                        Ceritakan kebutuhan{" "}
                        <em style={{
                            fontStyle: "italic", fontWeight: 300,
                            background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>
                            event Anda
                        </em>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
                        style={{ color: "#6B6B70", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}
                    >
                        Konsultasikan kebutuhan event Anda bersama kami. Kami siap merespons dengan cepat.
                    </motion.p>
                </div>

                {/* ── Two-column grid ── */}
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, alignItems: "start" }}>

                    {/* Left: contact cards + note */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {CONTACTS.map((item, i) => (
                            <ContactCard key={item.label} item={item} i={i} />
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.38 }}
                            style={{
                                marginTop: 4,
                                padding: "14px 18px",
                                background: "linear-gradient(135deg, rgba(0,168,181,0.06), rgba(107,50,168,0.06))",
                                border: "1px solid rgba(0,168,181,0.18)",
                                borderRadius: 14,
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                            }}
                        >
                            <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🏫</span>
                            <p style={{ fontSize: "0.82rem", color: "#6B6B70", margin: 0, lineHeight: 1.6 }}>
                                <strong style={{ color: "#18181A", fontWeight: 600 }}>Siap datang ke lokasi Anda</strong>
                                <br />Survey & koordinasi langsung di sekolah Anda.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
                        style={{
                            background: "#FFFFFF",
                            border: "1px solid #E2E0DB",
                            borderRadius: 24,
                            padding: "36px 32px",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                        }}
                    >
                        {/* Color stripe */}
                        <div style={{
                            height: 4,
                            background: "linear-gradient(90deg,#00A8B5,#6B32A8,#C4006E,#00A8B5)",
                            borderRadius: 4,
                            marginBottom: 28,
                        }} />

                        {/* Name + Phone */}
                        <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                            <div>
                                <Label>Nama / Instansi / Sekolah</Label>
                                <input
                                    type="text"
                                    placeholder="Nama atau nama sekolah"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    onFocus={() => setFocused("name")}
                                    onBlur={() => setFocused(null)}
                                    style={inputStyle(focused === "name")}
                                />
                            </div>
                            <div>
                                <Label>WhatsApp</Label>
                                <input
                                    type="tel"
                                    placeholder="08xx-xxxx-xxxx"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                    onFocus={() => setFocused("phone")}
                                    onBlur={() => setFocused(null)}
                                    style={inputStyle(focused === "phone")}
                                />
                            </div>
                        </div>

                        {/* Event type */}
                        <div style={{ marginBottom: 14 }}>
                            <Label>Jenis Event</Label>
                            <div style={{ position: "relative" }}>
                                <select
                                    value={form.event}
                                    onChange={e => setForm({ ...form, event: e.target.value })}
                                    onFocus={() => setFocused("event")}
                                    onBlur={() => setFocused(null)}
                                    style={{
                                        ...inputStyle(focused === "event"),
                                        paddingRight: 40,
                                        cursor: "pointer",
                                        appearance: "none" as const,
                                    }}
                                >
                                    {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
                                </select>
                                <div style={{
                                    position: "absolute", right: 14, top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none", color: "#6B6B70",
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div style={{ marginBottom: 24 }}>
                            <Label>Deskripsi Event</Label>
                            <textarea
                                rows={4}
                                placeholder="Kapan? Di mana? Estimasi peserta? Anggaran yang tersedia? Ceritakan detail event Anda..."
                                value={form.desc}
                                onChange={e => setForm({ ...form, desc: e.target.value })}
                                onFocus={() => setFocused("desc")}
                                onBlur={() => setFocused(null)}
                                style={{ ...inputStyle(focused === "desc"), resize: "none", lineHeight: 1.7 }}
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            onClick={handleSubmit}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: "100%",
                                padding: "15px 24px",
                                borderRadius: 100,
                                border: "none",
                                cursor: "pointer",
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                color: "white",
                                background: sent
                                    ? "linear-gradient(135deg,#25D366,#00A8B5)"
                                    : "linear-gradient(135deg,#00A8B5,#6B32A8,#C4006E)",
                                boxShadow: "0 4px 20px rgba(0,168,181,0.3)",
                                transition: "background 0.4s, box-shadow 0.2s, transform 0.2s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,168,181,0.4)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = "";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,168,181,0.3)";
                            }}
                        >
                            {sent ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    Pesan Terkirim!
                                </>
                            ) : (
                                <>
                                    <FaWhatsapp size={16} />
                                    Kirim via WhatsApp
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-container { padding: 0 20px !important; }
          .contact-grid      { grid-template-columns: 1fr !important; }
          .form-row          { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .contact-container { padding: 0 28px !important; }
        }
        input::placeholder, textarea::placeholder { color: #ADADB0; }
      `}</style>
        </section>
    );
}