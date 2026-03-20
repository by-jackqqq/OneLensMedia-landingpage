/* ══════════════════════════════════════════════════════════
   🎯 DATA PORTFOLIO — EDIT FILE INI UNTUK MENGISI KONTEN
   ══════════════════════════════════════════════════════════
   Cara isi:
   - thumbnail : path foto di /public, contoh: "/images/portfolio/wisuda.jpg"
   - videoUrl  : link YouTube, contoh: "https://youtu.be/xxxx" (null jika tidak ada)
   - accentColor: "#00A8B5" | "#6B32A8" | "#C4006E" (pilih salah satu)
   ══════════════════════════════════════════════════════════ */

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  thumbnail: string | null;
  thumbnailAlt: string;
  videoUrl: string | null;
  viewerCount: string;
  accentColor: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Upacara Peringatan Hari Pahlawan 2024 | SMK Telkom Malang",
    category: "Upacara",
    date: "11 November 2024",
    description:
      "Live streaming upacara peringatan Hari Pahlawan 2024 di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/hMduAkmr2eo/maxresdefault.jpg",
    thumbnailAlt: "Upacara Peringatan Hari Pahlawan 2024 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/hMduAkmr2eo?si=01nA4QFrJ9NjGXQb",
    viewerCount: "400+",
    accentColor: "#00A8B5",
  },
  {
    id: 2,
    title: "CLASSMEET MOVIBES 2024 Move with Purpose Vibe with Passion | Day 2",
    category: "Classmeet",
    date: "16 Desember 2024",
    description:
      "Live streaming classmeeting yang diselenggarakan oleh OSIS SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/0uU8pt7nyx4/maxresdefault.jpg",
    thumbnailAlt:
      "CLASSMEET MOVIBES 2024 Move with Purpose Vibe with Passion | Day 2",
    videoUrl: "https://www.youtube.com/live/0uU8pt7nyx4?si=3CI7LMWCeMcit-jK",
    viewerCount: "500+",
    accentColor: "#6B32A8",
  },
  {
    id: 3,
    title:
      "🎙️PODCAST FOMO - Fun Of Moklet!🎙️| Smart Trip: Aplikasi Wajib untuk Liburan Asyik di Malang",
    category: "Podcast",
    date: "21 Desember 2024",
    description:
      "Live streaming podcast Fun Of Moklet bersama Mima Mindut di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/r14yVCmEc5o/maxresdefault.jpg",
    thumbnailAlt: "🎙️PODCAST FOMO - Fun Of Moklet!🎙️2",
    videoUrl: "https://www.youtube.com/live/r14yVCmEc5o?si=q7WboklLKMaeYV-5",
    viewerCount: "400+",
    accentColor: "#C4006E",
  },
  {
    id: 4,
    title: "DEBATE OF FEBRUARY (DORY) 2025 | SMK Telkom Malang",
    category: "EVENT",
    date: "26 Februari 2025",
    description:
      "Live streaming event debat menggunakan bahasa inggris di bulan februari di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/rG_IjcoAWeg/maxresdefault.jpg",
    thumbnailAlt: "DEBATE OF FEBRUARY (DORY) 2025 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/rG_IjcoAWeg?si=lL27Rk7t_liLGr8B",
    viewerCount: "200+",
    accentColor: "#00A8B5",
  },
  {
    id: 5,
    title: "Pondok Ramadhan 2025 | 1446H | SMK Telkom Malang",
    category: "event",
    date: "6 Maret 2025",
    description:
      "Live streaming kegiatan Pondok Ramadhan 1446H di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/fOHxt9YlMuE/maxresdefault.jpg",
    thumbnailAlt: "Pondok Ramadhan 2025 | 1446 H | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/fOHxt9YlMuE?si=GLzNP0BSk1m1UmiL",
    viewerCount: "100+",
    accentColor: "#6B32A8",
  },
  {
    id: 6,
    title: "Maulid Nabi Muhammad SAW 2025 | 1447 H | SMK Telkom Malang",
    category: "Peringatan",
    date: "12 September 2025",
    description:
      "Live streaming kegiatan peringatan Maulid Nabi Muhammad SAW 2025  1447H di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/ARrIcYTx7-Q/maxresdefault.jpg",
    thumbnailAlt: "Maulid Nabi Muhammad SAW 2025 | 1447 H | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/ARrIcYTx7-Q?si=mRtBVtlMfY0OqX7y",
    viewerCount: "300+",
    accentColor: "#C4006E",
  },
  {
    id: 7,
    title: "Upacara Pembukaan MPLS Angkatan 34 | SMK Telkom Malang",
    category: "Upacara",
    date: "16 Juli 2025",
    description:
      "Live streaming upacara pembukaan MPLS angkatan 34 SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/fKKakdOfLTM/maxresdefault.jpg",
    thumbnailAlt: "Upacara Pembukaan MPLS Angkatan 34 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/fKKakdOfLTM?si=LgTO9Uim0RHk15CK",
    viewerCount: "1300+",
    accentColor: "#00A8B5",
  },
];
