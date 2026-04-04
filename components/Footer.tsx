"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* ── Data ──────────────────────────────────────────────── */
const FOOTER_LINKS = [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
];

const SOCIALS = [
    {
        label: "WhatsApp",
        href: "https://wa.me/6285257121642",
        icon: FaWhatsapp,
        color: "#25D366",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/1lens.media",
        icon: FaInstagram,
        color: "#C4006E",
    },
    {
        label: "TikTok",
        href: "https://tiktok.com/@1lens.media",
        icon: FaTiktok,
        color: "#6B32A8",
    },
    {
        label: "YouTube",
        href: "https://youtube.com/@1lens.media",
        icon: FaYoutube,
        color: "#FF0000",
    },
    {
        label: "Email",
        href: "mailto:info@onelensmedia.web.id",
        icon: MdEmail,
        color: "#00A8B5",
    },
];

/* ── Social icon button ────────────────────────────────── */
function SocialBtn({ item }: { item: typeof SOCIALS[0] }) {
    const Icon = item.icon;
    return (
        <motion.a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${item.color}12`,
                border: `1px solid ${item.color}28`,
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", color: item.color,
                transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = `${item.color}20`;
                (e.currentTarget as HTMLElement).style.borderColor = `${item.color}55`;
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = `${item.color}12`;
                (e.currentTarget as HTMLElement).style.borderColor = `${item.color}28`;
            }}
        >
            <Icon size={17} />
        </motion.a>
    );
}

/* ── Footer ────────────────────────────────────────────── */
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            background: "#FFFFFF",
            borderTop: "1px solid #E2E0DB",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Top color stripe */}
            <div style={{
                height: 3,
                background: "linear-gradient(90deg,#00A8B5,#6B32A8,#C4006E,#00A8B5)",
            }} />

            {/* Main footer body */}
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 40px 0" }} className="footer-inner">
                <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 48, paddingBottom: 48 }}>

                    {/* Col 1 — Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                    >
                        {/* Logo */}
                        <Link href="/" style={{ display: "inline-block", marginBottom: 16, textDecoration: "none" }}>
                            <Image
                                src="/images/Logo_OneLensMedia.png"
                                alt="OneLens Media"
                                width={140} height={38}
                                style={{ height: 30, width: "auto", objectFit: "contain", display: "block" }}
                            />
                        </Link>

                        <p style={{
                            fontSize: "0.85rem",
                            color: "#6B6B70",
                            lineHeight: 1.75,
                            marginBottom: 24,
                            maxWidth: 280,
                        }}>
                            Layanan live streaming & dokumentasi event sekolah profesional. Kami pastikan setiap momen berharga dapat disaksikan oleh semua orang.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            {SOCIALS.map(s => <SocialBtn key={s.label} item={s} />)}
                        </div>
                    </motion.div>

                    {/* Col 2 — Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
                    >
                        <div style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: 10, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase" as const,
                            color: "#18181A", marginBottom: 20,
                        }}>
                            Navigasi
                        </div>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                            {FOOTER_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#6B6B70",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                            display: "inline-flex", alignItems: "center", gap: 6,
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#18181A")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#6B6B70")}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3 — Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
                    >
                        <div style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: 10, fontWeight: 700,
                            letterSpacing: "0.12em", textTransform: "uppercase" as const,
                            color: "#18181A", marginBottom: 20,
                        }}>
                            Hubungi Kami
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            {[
                                { icon: FaWhatsapp, color: "#25D366", label: "+62 852-5712-1642", href: "https://wa.me/6285257121642" },
                                { icon: MdEmail, color: "#00A8B5", label: "info@onelensmedia.web.id", href: "mailto:info@onelensmedia.web.id" },
                                { icon: FaInstagram, color: "#C4006E", label: "@1les.media", href: "https://instagram.com/1lens.media" },
                                { icon: FaTiktok, color: "#6B32A8", label: "@1lens.media", href: "https://tiktok.com/@1lens.media" },
                            ].map(({ icon: Icon, color, label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex", alignItems: "center", gap: 10,
                                        textDecoration: "none",
                                        transition: "opacity 0.2s",
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                                >
                                    <div style={{
                                        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                                        background: `${color}12`,
                                        border: `1px solid ${color}22`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        <Icon size={14} color={color} />
                                    </div>
                                    <span style={{ fontSize: "0.83rem", color: "#6B6B70" }}>{label}</span>
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} style={{ marginTop: 24 }}>
                            <Link
                                href="#kontak"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    padding: "10px 20px", borderRadius: 10,
                                    fontSize: "0.83rem", fontWeight: 600,
                                    color: "white", textDecoration: "none",
                                    background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                                    boxShadow: "0 4px 16px rgba(0,168,181,0.28)",
                                }}
                            >
                                🏫 Konsultasi Sekarang
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid #E2E0DB" }}>
                <div style={{
                    maxWidth: 1280, margin: "0 auto",
                    padding: "18px 40px",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 16,
                    flexWrap: "wrap",
                }} className="footer-bottom">
                    <span style={{ fontSize: "0.78rem", color: "#ADADB0", fontFamily: "var(--font-montserrat)" }}>
                        © {year} OneLens Media. All rights reserved.
                    </span>

                    {/* Gradient divider — desktop only */}
                    <div className="footer-divider" style={{
                        flex: 1, height: 2,
                        background: "linear-gradient(90deg,transparent,#00A8B520,#6B32A820,transparent)",
                        borderRadius: 2,
                        margin: "0 24px",
                    }} />

                    <span style={{ fontSize: "0.78rem", color: "#ADADB0", fontFamily: "var(--font-montserrat)" }}>
                        Built by JQ.WORKS
                    </span>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-inner  { padding: 40px 20px 0 !important; }
          .footer-grid   { grid-template-columns: 1fr !important; gap: 36px !important; }
          .footer-bottom { padding: 16px 20px !important; flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .footer-divider { display: none !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-inner { padding: 40px 28px 0 !important; }
          .footer-grid  { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom { padding: 16px 28px !important; }
        }
      `}</style>
        </footer>
    );
}