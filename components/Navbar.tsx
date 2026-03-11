"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
    { label: "Layanan", href: "#layanan" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Paket", href: "#paket" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {/* ── Bar utama ─────────────────────────────────────────────────────── */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 200,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    backgroundColor: scrolled ? "rgba(250,250,248,0.95)" : "rgba(250,250,248,0.80)",
                    borderBottom: scrolled ? "1px solid #E2E0DB" : "1px solid transparent",
                    boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
                    transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
            >
                <div style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 40px",
                    height: 68,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                }}>

                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, zIndex: 10 }}>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
                            <Image
                                src="/images/Logo_OneLensMedia.png"
                                alt="1ens Media"
                                width={148}
                                height={40}
                                priority
                                style={{ height: 36, width: "auto", objectFit: "contain", display: "block" }}
                            />
                        </motion.div>
                    </Link>

                    {/* Nav links — absolute center */}
                    <ul style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 36,
                        listStyle: "none",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        margin: 0, padding: 0,
                    }} className="hidden-mobile">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="nav-link"
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 13,
                                        color: "#6B6B70",
                                        fontWeight: 500,
                                        letterSpacing: "0.03em",
                                        transition: "color 0.2s",
                                        position: "relative",
                                        paddingBottom: 4,
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#18181A")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#6B6B70")}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA kanan */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 10, flexShrink: 0 }}>
                        {/* Desktop CTA */}
                        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="hidden-mobile">
                            <Link
                                href="#kontak"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "9px 18px",
                                    borderRadius: 8,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "white",
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                    background: "linear-gradient(135deg, #00A8B5, #6B32A8)",
                                    boxShadow: "0 2px 14px rgba(0,168,181,0.28)",
                                }}
                            >
                                Konsultasi Gratis <ArrowRight size={13} strokeWidth={2.5} />
                            </Link>
                        </motion.div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(v => !v)}
                            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                            className="show-mobile"
                            style={{
                                display: "none",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 40, height: 40,
                                borderRadius: 10,
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                color: "#18181A",
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen
                                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.span>
                                    : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.span>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileOpen(false)}
                            style={{ position: "fixed", inset: 0, zIndex: 199, background: "rgba(0,0,0,0.2)", backdropFilter: "blur(4px)" }}
                        />
                        <motion.div
                            key="drawer"
                            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            style={{
                                position: "fixed",
                                top: 68, left: 0, right: 0,
                                zIndex: 200,
                                background: "rgba(250,250,248,0.98)",
                                backdropFilter: "blur(24px)",
                                borderBottom: "1px solid #E2E0DB",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                            }}
                        >
                            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.045, duration: 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            style={{
                                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                                padding: "14px 12px", borderRadius: 12,
                                                fontSize: 15, fontWeight: 500, color: "#6B6B70",
                                                textDecoration: "none", transition: "all 0.15s",
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.color = "#18181A"; e.currentTarget.style.background = "#F2F0EB"; }}
                                            onMouseLeave={e => { e.currentTarget.style.color = "#6B6B70"; e.currentTarget.style.background = "transparent"; }}
                                        >
                                            {link.label}
                                            <ArrowRight size={13} style={{ color: "#00A8B5", opacity: 0.6 }} />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: NAV_LINKS.length * 0.045 + 0.06, duration: 0.2 }}
                                    style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #E2E0DB" }}
                                >
                                    <Link
                                        href="#kontak"
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                            width: "100%", padding: "14px 0", borderRadius: 12,
                                            fontSize: 14, fontWeight: 600, color: "white", textDecoration: "none",
                                            background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                                            boxShadow: "0 4px 20px rgba(0,168,181,0.3)",
                                        }}
                                    >
                                        Konsultasi Gratis <ArrowRight size={14} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
        </>
    );
}