# 🎥 OneLens Media — Landing Page

> Layanan live streaming & dokumentasi event sekolah profesional.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📋 Deskripsi

Landing page resmi **OneLens Media** — startup pelajar yang menyediakan jasa live streaming dan dokumentasi event sekolah secara profesional. Dibangun dengan Next.js App Router, Tailwind CSS, dan Framer Motion untuk menghadirkan pengalaman yang mulus, modern, dan responsif di semua perangkat.

---

## ✨ Fitur

- ⚡ **Next.js 15 App Router** — routing & rendering modern
- 🎨 **Desain konsisten** — semua section menggunakan design system yang seragam (warna, tipografi, spacing)
- 📱 **Fully responsive** — mobile-first, dioptimalkan untuk semua ukuran layar
- 🎞️ **Framer Motion** — animasi scroll-triggered, stagger, dan micro-interaction
- 💀 **Skeleton loading** — setiap section memiliki skeleton placeholder saat loading
- 🔍 **SEO-ready** — metadata terstruktur dengan Next.js Metadata API
- 🌐 **React Icons** — ikon sosial media dengan warna brand asli

---

## 🗂️ Struktur Section

| Section | ID | Deskripsi |
|---|---|---|
| `Navbar` | — | Navigasi fixed dengan mobile drawer & scroll detection |
| `Hero` | `#hero` | Hero utama dengan live streaming mockup |
| `AboutUs` | `#story` | Cerita & timeline perjalanan OneLens |
| `EventMarquee` | `#layanan` | Marquee event + card layanan yang ditangani |
| `Portfolio` | `#portfolio` | Galeri portfolio event yang telah dikerjakan |
| `HowItWorks` | `#cara-kerja` | 4 langkah proses kerja: konsultasi → rekaman |
| `FAQ` | `#faq` | Accordion tanya jawab interaktif |
| `Contact` | `#kontak` | Form kontak + card sosial media |
| `Footer` | — | Footer lengkap dengan navigasi & social links |

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| [Next.js](https://nextjs.org) | 15 | Framework React dengan App Router |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | 11 | Animasi & transisi |
| [React Icons](https://react-icons.github.io/react-icons) | 5 | Icon set (FA, MD, dll) |
| [Lucide React](https://lucide.dev) | latest | Icon UI |

---

## 🚀 Memulai

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x atau **yarn** / **pnpm** / **bun**

### Instalasi

```bash
# 1. Clone repository
git clone https://github.com/by-jackqqq/OneLensMedia-landingpage.git
cd OneLensMedia-landingpage

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
# Build
npm run build

# Jalankan production server
npm run start
```

---

## 📁 Struktur Folder

```
OneLensMedia-landingpage/
├── app/
│   ├── layout.tsx              # Root layout + font config
│   ├── page.tsx                # Halaman utama (menyusun semua section)
│   └── globals.css             # Global styles & CSS variables
│
├── components/
│   ├── Navbar.tsx              # Navigasi fixed + mobile drawer
│   ├── Hero.tsx                # Hero section
│   ├── AboutUs.tsx             # Cerita & timeline
│   ├── EventMarquee.tsx        # Marquee + card layanan
│   ├── Portfolio.tsx           # Galeri portfolio
│   ├── HowItWorks.tsx          # Cara kerja (4 step)
│   ├── FAQ.tsx                 # Accordion FAQ
│   ├── Contact.tsx             # Form kontak + social links
│   └── Footer.tsx              # Footer
│
├── public/
│   └── images/
│       ├── Logo_OneLensMedia.png
│       └── jqworks-logo.png
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Warna Utama

| Token | Hex | Penggunaan |
|---|---|---|
| Cyan | `#00A8B5` | Primary, CTA, aksen utama |
| Purple | `#6B32A8` | Secondary, gradient |
| Pink | `#C4006E` | Accent, highlight |
| Ink | `#18181A` | Teks utama |
| Muted | `#6B6B70` | Teks sekunder |
| Border | `#E2E0DB` | Border & divider |
| Offwhite | `#FAFAF8` | Background section |

### Tipografi

- **Font utama**: `Montserrat` (via `next/font/google`)
- Heading: `font-weight: 300` (light) dengan gradient text untuk emphasis
- Body: `font-size: 0.83–0.95rem`, `line-height: 1.75`
- Label/tag: uppercase, `letter-spacing: 0.12em`

### Gradient Utama

```css
/* Gradient brand */
background: linear-gradient(135deg, #00A8B5, #6B32A8, #C4006E);

/* Gradient text */
background: linear-gradient(120deg, #00A8B5 0%, #6B32A8 50%, #C4006E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 📱 Responsivitas

| Breakpoint | Lebar | Perilaku |
|---|---|---|
| Mobile | < 768px | Stack vertikal, mobile drawer, padding 16–20px |
| Tablet | 768–1024px | 2 kolom, padding 28px |
| Desktop | > 1024px | Layout penuh, padding 40px, max-width 1280px |

---

## 📦 Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Build production
npm run start    # Jalankan hasil build
npm run lint     # ESLint check
```

---

## 🙌 Kontribusi

Project ini dikelola oleh tim internal OneLens Media. Untuk pertanyaan atau laporan bug, silakan buka [Issue](https://github.com/by-jackqqq/OneLensMedia-landingpage/issues).

---

## 📄 Lisensi

MIT License © 2025 OneLens Media

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://jqworks.is-a.dev">JQ.WORKS</a></sub>
</div>