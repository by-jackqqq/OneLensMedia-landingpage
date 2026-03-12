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
    { label: "Tentang", href: "/tentang" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
];

/* ── Skeleton bar ─────────────────────────────────────────── */
function NavSkeleton() {
    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
            height: 68, background: "rgba(250,250,248,0.95)",
            borderBottom: "1px solid #E2E0DB",
            display: "flex", alignItems: "center",
            padding: "0 40px",
        }}>
            {/* Logo skeleton */}
            <div style={{ width: 120, height: 28, borderRadius: 6, background: "linear-gradient(90deg,#ede9e3 25%,#e3dfd8 50%,#ede9e3 75%)", backgroundSize: "200% 100%", animation: "nav-shimmer 1.6s ease-in-out infinite" }} />

            {/* Center links skeleton — hidden on mobile */}
            <div className="nav-sk-links" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 32, alignItems: "center" }}>
                {[72, 80, 52, 76, 40].map((w, i) => (
                    <div key={i} style={{ width: w, height: 12, borderRadius: 4, background: "linear-gradient(90deg,#ede9e3 25%,#e3dfd8 50%,#ede9e3 75%)", backgroundSize: "200% 100%", animation: `nav-shimmer 1.6s ease-in-out ${i * 0.1}s infinite` }} />
                ))}
            </div>

            {/* CTA skeleton */}
            <div style={{ marginLeft: "auto", width: 148, height: 36, borderRadius: 8, background: "linear-gradient(90deg,#ede9e3 25%,#e3dfd8 50%,#ede9e3 75%)", backgroundSize: "200% 100%", animation: "nav-shimmer 1.6s ease-in-out 0.2s infinite" }} className="nav-sk-cta" />

            {/* Hamburger skeleton — mobile only */}
            <div style={{ marginLeft: "auto", width: 36, height: 36, borderRadius: 8, background: "linear-gradient(90deg,#ede9e3 25%,#e3dfd8 50%,#ede9e3 75%)", backgroundSize: "200% 100%", animation: "nav-shimmer 1.6s ease-in-out infinite" }} className="nav-sk-burger" />
        </div>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    /* Tampilkan skeleton sampai client mount */
    if (!mounted) return (
        <>
            <NavSkeleton />
            <style>{`
        @keyframes nav-shimmer {
          0%   { background-position:  200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 767px) {
          .nav-sk-links { display: none !important; }
          .nav-sk-cta   { display: none !important; }
          .nav-sk-burger { display: block !important; }
        }
        @media (min-width: 768px) {
          .nav-sk-burger { display: none !important; }
        }
      `}</style>
        </>
    );

    return (
        <>
            {/* ── Bar utama ──────────────────────────────────────────────────── */}
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
                }} className="nav-inner">

                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, zIndex: 10 }}>
                        <motion.div
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                        >
                            <Image
                                src="/images/Logo_OneLensMedia.png"
                                alt="1ens Media"
                                width={148} height={40} priority
                                style={{ height: 32, width: "auto", objectFit: "contain", display: "block" }}
                            />
                        </motion.div>
                    </Link>

                    {/* Nav links — desktop center */}
                    <ul style={{
                        display: "flex", alignItems: "center", gap: 32,
                        listStyle: "none",
                        position: "absolute", left: "50%", top: "50%",
                        transform: "translate(-50%,-50%)",
                        margin: 0, padding: 0,
                    }} className="nav-links-desktop">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: 13,
                                        color: "#6B6B70",
                                        fontWeight: 500,
                                        letterSpacing: "0.03em",
                                        transition: "color 0.2s",
                                        paddingBottom: 4,
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#18181A")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#6B6B70")}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 10, flexShrink: 0 }}>

                        {/* Desktop CTA */}
                        <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="nav-cta-desktop">
                            <Link
                                href="#kontak"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    padding: "9px 18px", borderRadius: 8,
                                    fontSize: 13, fontWeight: 600, color: "white",
                                    textDecoration: "none", whiteSpace: "nowrap",
                                    background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                                    boxShadow: "0 2px 14px rgba(0,168,181,0.28)",
                                }}
                            >
                                Konsultasi Gratis <ArrowRight size={13} strokeWidth={2.5} />
                            </Link>
                        </motion.div>

                        {/* Mobile hamburger */}
                        <motion.button
                            onClick={() => setMobileOpen(v => !v)}
                            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                            whileTap={{ scale: 0.9 }}
                            className="nav-burger"
                            style={{
                                display: "none",
                                alignItems: "center", justifyContent: "center",
                                width: 40, height: 40,
                                borderRadius: 10,
                                border: "1px solid #E2E0DB",
                                background: "white",
                                cursor: "pointer",
                                color: "#18181A",
                                flexShrink: 0,
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen
                                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: "flex" }}><X size={18} /></motion.span>
                                    : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} style={{ display: "flex" }}><Menu size={18} /></motion.span>
                                }
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile drawer ──────────────────────────────────────────────── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileOpen(false)}
                            style={{ position: "fixed", inset: 0, zIndex: 199, background: "rgba(0,0,0,0.18)", backdropFilter: "blur(4px)" }}
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            style={{
                                position: "fixed",
                                top: 68, left: 0, right: 0,
                                zIndex: 200,
                                background: "rgba(250,250,248,0.98)",
                                backdropFilter: "blur(24px)",
                                borderBottom: "1px solid #E2E0DB",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div style={{ padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: 2 }}>
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.18 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            style={{
                                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                                padding: "13px 12px", borderRadius: 12,
                                                fontSize: 15, fontWeight: 500, color: "#3A3A40",
                                                textDecoration: "none", transition: "all 0.15s",
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.background = "#F2F0EB"; e.currentTarget.style.color = "#18181A"; }}
                                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#3A3A40"; }}
                                        >
                                            {link.label}
                                            <ArrowRight size={13} color="#00A8B5" strokeWidth={2.5} style={{ opacity: 0.7 }} />
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* CTA mobile */}
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: NAV_LINKS.length * 0.04 + 0.05, duration: 0.2 }}
                                    style={{ marginTop: 10, paddingTop: 14, borderTop: "1px solid #E2E0DB" }}
                                >
                                    <Link
                                        href="#kontak"
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                            width: "100%", padding: "14px 0", borderRadius: 12,
                                            fontSize: 14, fontWeight: 600, color: "white",
                                            textDecoration: "none",
                                            background: "linear-gradient(135deg,#00A8B5,#6B32A8)",
                                            boxShadow: "0 4px 20px rgba(0,168,181,0.28)",
                                        }}
                                    >
                                        Konsultasi Gratis <ArrowRight size={14} strokeWidth={2.5} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
        @keyframes nav-shimmer {
          0%   { background-position:  200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Desktop (≥ 768px) ── */
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-cta-desktop   { display: block !important; }
          .nav-burger        { display: none !important; }
          .nav-inner         { padding: 0 40px !important; }
        }

        /* ── Mobile (< 768px) ── */
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop   { display: none !important; }
          .nav-burger        { display: flex !important; }
          .nav-inner         { padding: 0 20px !important; }
        }

        /* ── Small mobile (< 480px) ── */
        @media (max-width: 479px) {
          .nav-inner { padding: 0 16px !important; }
        }
      `}</style>
        </>
    );
}