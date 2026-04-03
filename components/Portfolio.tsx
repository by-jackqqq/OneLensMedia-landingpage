"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Calendar, ExternalLink, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO, type PortfolioItem } from "@/data/portfolioData";

// ── Data ada di: src/data/portfolioData.ts ────────────────

const ITEMS_PER_PAGE = 6;


/* ── Thumbnail placeholder ───────────────────────────────── */
function ThumbPlaceholder({ color, title }: { color: string; title: string }) {
    return (
        <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg,${color}18 0%,${color}06 100%)`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
            <div style={{
                width: 48, height: 48, borderRadius: 13,
                background: `${color}18`, border: `1px solid ${color}28`,
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <Play size={20} color={color} strokeWidth={1.8} style={{ marginLeft: 3 }} />
            </div>
            <span style={{
                fontFamily: "var(--font-montserrat)", fontSize: "0.7rem", fontWeight: 600,
                color: `${color}70`, letterSpacing: "0.07em", textTransform: "uppercase",
                textAlign: "center", padding: "0 16px", maxWidth: 160, lineHeight: 1.5,
            }}>{title}</span>
        </div>
    );
}

/* ── Portfolio card ──────────────────────────────────────── */
function PortCard({ item, i }: { item: PortfolioItem; i: number }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
                background: "#FFFFFF", borderRadius: 20, overflow: "hidden",
                border: `1px solid ${hovered ? item.accentColor : "#E2E0DB"}`,
                boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "0 4px 18px rgba(0,0,0,0.04)",
                transform: hovered ? "translateY(-5px)" : "none",
                transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                cursor: "default",
            }}
        >
            {/* Thumbnail */}
            <div style={{ position: "relative", height: 196, background: "#F5F3EF", overflow: "hidden" }}>
                {item.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.thumbnail} alt={item.thumbnailAlt} style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        transition: "transform 0.4s ease",
                    }} />
                ) : (
                    <ThumbPlaceholder color={item.accentColor} title={item.thumbnailAlt} />
                )}

                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{
                                position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                            }}
                        >
                            {item.videoUrl && (
                                <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" style={{
                                    display: "flex", alignItems: "center", gap: 6,
                                    padding: "8px 16px", borderRadius: 8,
                                    background: "white", color: "#18181A",
                                    fontSize: "0.76rem", fontWeight: 600, textDecoration: "none",
                                    fontFamily: "var(--font-montserrat)",
                                }}>
                                    <Play size={11} strokeWidth={2.5} style={{ marginLeft: 1 }} /> Tonton
                                </a>
                            )}
                            <div style={{
                                display: "flex", alignItems: "center", gap: 6,
                                padding: "8px 16px", borderRadius: 8,
                                background: "rgba(255,255,255,0.15)", color: "white",
                                fontSize: "0.76rem", fontWeight: 600,
                                fontFamily: "var(--font-montserrat)", border: "1px solid rgba(255,255,255,0.3)",
                            }}>
                                <Eye size={11} strokeWidth={2} /> {item.viewerCount}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Category badge */}
                <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: "rgba(255,255,255,0.93)", backdropFilter: "blur(8px)",
                    borderRadius: 100, padding: "4px 11px",
                    fontSize: 10, fontWeight: 600, color: item.accentColor,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    border: `1px solid ${item.accentColor}28`,
                    fontFamily: "var(--font-montserrat)",
                }}>
                    {item.category}
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "18px 20px 20px" }}>
                <div style={{ width: 24, height: 2, background: `linear-gradient(90deg,${item.accentColor},transparent)`, borderRadius: 2, marginBottom: 10 }} />
                <h3 style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.9rem", fontWeight: 700, color: "#18181A", lineHeight: 1.35, marginBottom: 7 }}>
                    {item.title}
                </h3>
                <p style={{ fontSize: "0.81rem", color: "#6B6B70", lineHeight: 1.72, marginBottom: 14 }}>
                    {item.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#9B9BA0" }}>
                        <Calendar size={11} strokeWidth={2} />
                        <span style={{ fontSize: "0.74rem", fontFamily: "var(--font-montserrat)" }}>{item.date}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, color: item.accentColor }}>
                        <Eye size={11} strokeWidth={2} />
                        <span style={{ fontSize: "0.74rem", fontWeight: 600, fontFamily: "var(--font-montserrat)" }}>{item.viewerCount}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ── Pagination button ───────────────────────────────────── */
function PageBtn({ children, active = false, disabled = false, onClick }: {
    children: React.ReactNode; active?: boolean; disabled?: boolean; onClick: () => void;
}) {
    return (
        <button onClick={onClick} disabled={disabled} style={{
            minWidth: 38, height: 38, borderRadius: 9, padding: "0 10px",
            fontFamily: "var(--font-montserrat)", fontSize: "0.82rem", fontWeight: 600,
            border: "1px solid",
            borderColor: active ? "transparent" : "#E2E0DB",
            background: active ? "linear-gradient(135deg,#00A8B5,#6B32A8)" : "#FFFFFF",
            color: active ? "white" : disabled ? "#C8C6C2" : "#6B6B70",
            cursor: disabled ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: active ? "0 4px 14px rgba(0,168,181,0.28)" : "none",
            transition: "all 0.18s",
        }}>
            {children}
        </button>
    );
}

/* ── Main export ─────────────────────────────────────────── */
export default function Portfolio() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        const q = query.toLowerCase().trim();
        const data = !q
            ? PORTFOLIO
            : PORTFOLIO.filter(p =>
                p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
            );

        // Sort descending by id
        return [...data].sort((a, b) => b.id - a.id);
    }, [query]);
    
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const pageItems = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

    function handleSearch(v: string) { setQuery(v); setPage(1); }

    function pageRange() {
        const delta = 1;
        const range: (number | "…")[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= safePage - delta && i <= safePage + delta)) {
                range.push(i);
            } else if (range[range.length - 1] !== "…") {
                range.push("…");
            }
        }
        return range;
    }

    return (
        <section id="portfolio" style={{
            position: "relative", background: "#F5F3EF",
            padding: "88px 0 96px", overflow: "hidden",
        }}>
            <div style={{
                position: "absolute", width: 600, height: 500, bottom: -80, right: -80,
                background: "radial-gradient(ellipse,rgba(0,168,181,.06) 0%,transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }} className="port-container">

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: 44 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}
                    >
                        <span style={{ width: 28, height: 2, background: "linear-gradient(90deg,#00A8B5,#6B32A8)", borderRadius: 2, display: "block" }} />
                        <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 11, color: "#6B6B70", letterSpacing: "0.12em", textTransform: "uppercase" }}>Hasil Kerja Kami</span>
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
                        Portfolio{" "}
                        <em style={{
                            fontStyle: "italic", fontWeight: 600,
                            background: "linear-gradient(120deg,#00A8B5 0%,#6B32A8 50%,#C4006E 100%)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                        }}>Live Streaming</em>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
                        style={{ color: "#6B6B70", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 440, margin: "0 auto" }}
                    >
                        Setiap event yang kami tangani adalah bukti komitmen kami terhadap kualitas.
                    </motion.p>
                </div>

                {/* ── Searchbar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.18 }}
                    style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
                >
                    <div style={{ position: "relative", flex: "1 1 auto", maxWidth: 380 }}>
                        <Search size={15} color="#9B9BA0" strokeWidth={2} style={{
                            position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                            pointerEvents: "none",
                        }} />
                        <input
                            type="text"
                            value={query}
                            onChange={e => handleSearch(e.target.value)}
                            placeholder="Cari event atau kategori..."
                            style={{
                                width: "100%", height: 44, borderRadius: 10,
                                border: "1px solid #E2E0DB", background: "#FFFFFF",
                                paddingLeft: 42, paddingRight: query ? 38 : 16,
                                fontFamily: "var(--font-montserrat)", fontSize: "0.83rem",
                                color: "#18181A", outline: "none",
                                transition: "border-color 0.2s, box-shadow 0.2s",
                                boxSizing: "border-box",
                            }}
                            onFocus={e => {
                                e.currentTarget.style.borderColor = "#00A8B5";
                                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,168,181,0.12)";
                            }}
                            onBlur={e => {
                                e.currentTarget.style.borderColor = "#E2E0DB";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                        {query && (
                            <button onClick={() => handleSearch("")} style={{
                                position: "absolute", right: 11, top: "50%", transform: "translateY(-50%)",
                                background: "none", border: "none", cursor: "pointer", padding: 2,
                                display: "flex", alignItems: "center", color: "#9B9BA0",
                            }}>
                                <X size={13} strokeWidth={2.5} />
                            </button>
                        )}
                    </div>

                    <span style={{
                        fontFamily: "var(--font-montserrat)", fontSize: "0.76rem",
                        color: "#9B9BA0", whiteSpace: "nowrap", flexShrink: 0,
                    }}>
                        {filtered.length} event
                    </span>
                </motion.div>

                {/* ── Grid ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${query}-${safePage}`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                    >
                        {pageItems.length > 0 ? (
                            <div className="port-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
                                {pageItems.map((item, i) => (
                                    <PortCard key={item.id} item={item} i={i} />
                                ))}
                            </div>
                        ) : (
                            <div style={{
                                textAlign: "center", padding: "72px 24px",
                                background: "#FFFFFF", borderRadius: 20, border: "1px dashed #E2E0DB",
                            }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: 14, margin: "0 auto 16px",
                                    background: "linear-gradient(135deg,rgba(0,168,181,.1),rgba(107,50,168,.1))",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Search size={20} color="#00A8B5" strokeWidth={1.8} />
                                </div>
                                <p style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, color: "#18181A", marginBottom: 6 }}>
                                    Tidak ada hasil
                                </p>
                                <p style={{ fontSize: "0.84rem", color: "#9B9BA0", marginBottom: 20 }}>
                                    Coba kata kunci lain.
                                </p>
                                <button onClick={() => handleSearch("")} style={{
                                    padding: "8px 20px", borderRadius: 8,
                                    fontFamily: "var(--font-montserrat)", fontSize: "0.8rem", fontWeight: 600,
                                    border: "1px solid #E2E0DB", background: "#FFFFFF",
                                    color: "#6B6B70", cursor: "pointer",
                                }}>
                                    Reset
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* ── Pagination ── */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.4 }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 44 }}
                    >
                        <PageBtn disabled={safePage === 1} onClick={() => setPage(p => p - 1)}>
                            <ChevronLeft size={15} strokeWidth={2.5} />
                        </PageBtn>

                        {pageRange().map((p, i) =>
                            p === "…" ? (
                                <span key={`e-${i}`} style={{
                                    width: 38, textAlign: "center",
                                    fontFamily: "var(--font-montserrat)", fontSize: "0.82rem", color: "#9B9BA0",
                                }}>…</span>
                            ) : (
                                <PageBtn key={p} active={p === safePage} onClick={() => setPage(p)}>
                                    {p}
                                </PageBtn>
                            )
                        )}

                        <PageBtn disabled={safePage === totalPages} onClick={() => setPage(p => p + 1)}>
                            <ChevronRight size={15} strokeWidth={2.5} />
                        </PageBtn>
                    </motion.div>
                )}

                {filtered.length > 0 && (
                    <p style={{
                        textAlign: "center", marginTop: 12,
                        fontFamily: "var(--font-montserrat)", fontSize: "0.74rem", color: "#B0AEA8",
                    }}>
                        Menampilkan {(safePage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(safePage * ITEMS_PER_PAGE, filtered.length)} dari {filtered.length} event
                    </p>
                )}

            </div>

            <style>{`
        @media (max-width: 1024px) {
          .port-container { padding: 0 28px !important; }
          .port-grid      { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .port-container { padding: 0 20px !important; }
          .port-grid      { grid-template-columns: repeat(2,1fr) !important; gap: 14px !important; }
        }
        @media (max-width: 480px) {
          .port-container { padding: 0 16px !important; }
          .port-grid      { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}