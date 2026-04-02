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
    title: "Theater Drama Kelas X - Saraya Bulan Bahasa SMK Telkom Malang 2024",
    category: "EVENT",
    date: "24 Oktober 2024",
    description:
      "Live streaming kegiatan peringatan sjmpah pemuda dalam event Bulan Bahasa di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/rUpvbQb8JSo/maxresdefault.jpg",
    thumbnailAlt:
      "Theater Drama Kelas X - Saraya Bulan Bahasa SMK Telkom Malang 2024",
    videoUrl: "https://www.youtube.com/live/rUpvbQb8JSo?si=mxv4JsDH-JIwS69Z",
    viewerCount: "3100+",
    accentColor: "#C4006E",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title:
      "🎙️PODCAST FOMO - Fun Of Moklet!🎙️Make The Glory through Extracurricular of Moklet",
    category: "Podcast",
    date: "8 Januari 2025",
    description:
      "Live streaming podcast Fun Of Moklet Make The Glory through Extracurricular of Moklet di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/UwVau7nlWGs/maxresdefault.jpg",
    thumbnailAlt:
      "🎙️PODCAST FOMO - Fun Of Moklet!🎙️Make The Glory through Extracurricular of Moklet",
    videoUrl: "https://youtu.be/UwVau7nlWGs?si=UhEpgQZJ-zw7NxQ6",
    viewerCount: "200+",
    accentColor: "#C4006E",
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
  {
    id: 10,
    title: "Upacara Peringatan HUT RI Ke-80 | SMK Telkom Malang",
    category: "upacara",
    date: "17 Agustus 2025",
    description:
      "Live streaming upacara peringatan HUT RI KE-80 di SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/6pqLq2gIyew/maxresdefault.jpg",
    thumbnailAlt: "Upacara Peringatan HUT RI Ke-80 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/6pqLq2gIyew?si=xYe8XUuQqfBK2gI9",
    viewerCount: "650+",
    accentColor: "#6B32A8",
  },
  {
    id: 11,
    title: "Orasi 5 Kandidat Calon Ketua Osis | SMK Telkom Malang",
    category: "event",
    date: "18 September 2025",
    description:
      "Live Streaming orasi 5 Kandidat Calon Ketua Osis SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/9Vc3aYXwJIU/maxresdefault.jpg",
    thumbnailAlt: "Upacara Peringatan HUT RI Ke-80 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/9Vc3aYXwJIU?si=I9-PtpBHmSuDJ9nI",
    viewerCount: "400+",
    accentColor: "#6B32A8",
  },
  {
    id: 12,
    title:
      "Tasyakuran - Dies Natalis Ke-33 | Jum'at 26, September 2025 | SMK Telkom Malang",
    category: "event",
    date: "26 September 2025",
    description:
      "Live Streaming tasyakuran dies natalis ke-33 SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/KCckJ2HxvGY/maxresdefault.jpg",
    thumbnailAlt:
      "Tasyakuran - Dies Natalis Ke-33 | Jum'at, 26 September 2025 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/KCckJ2HxvGY?si=kcpmO45ZPCB0eTQ8",
    viewerCount: "500+",
    accentColor: "#6B32A8",
  },
  {
    id: 13,
    title:
      "Specta Show - Dies Natalis Ke- 33 | Jum'at, 26 September 2025 | SMK Telkom Malang",
    category: "event",
    date: "26 September 2025",
    description:
      "Live Streaming specta show dies natalis ke-33 SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/-orpT69Ui5g/maxresdefault.jpg",
    thumbnailAlt:
      "Live Streaming tasyakuran dies natalis ke-33 SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/-orpT69Ui5g?si=IueCgTvf-b0uFAnS",
    viewerCount: "1800+",
    accentColor: "#6B32A8",
  },
  {
    id: 14,
    title: "Reuni Akbar - Dies Natalis Ke- 33 | SMK Telkom Malang",
    category: "event",
    date: "27 September 2025",
    description:
      "Live Streaming reuni akbar dies natalis ke-33 SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/av4I4zRsNBs/maxresdefault.jpg",
    thumbnailAlt: "Reuni Akbar - Dies Natalis Ke- 33 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/av4I4zRsNBs?si=6pCKvbotzI4H2WLe",
    viewerCount: "700+",
    accentColor: "#6B32A8",
  },
  {
    id: 15,
    title:
      "Siapa Paling Layak Mimpin Kita? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    category: "Podcast",
    date: "2 Oktober 2025",
    description:
      "Podcast Jam Istirahat MEMO Siapa Paling Layak Mimpin Kita? SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/T97QHznT2h0/maxresdefault.jpg",
    thumbnailAlt:
      "Siapa Paling Layak Mimpin Kita? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    videoUrl: "https://youtu.be/T97QHznT2h0?si=L6FxBIwxKuVUx01N",
    viewerCount: "300+",
    accentColor: "#6B32A8",
  },
  {
    id: 16,
    title: "Debat 2 Kandidat OSIS | PILKETOS 2025 | SMK Telkom Malang",
    category: "event",
    date: "2 Oktober 2025",
    description: "Live Streaming debat 2 kandidat ketua OSIS SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/MXejm7ZoAVw/maxresdefault.jpg",
    thumbnailAlt: "Debat 2 Kandidat OSIS | PILKETOS 2025 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/MXejm7ZoAVw?si=NVzQKsS2APYzRmVK",
    viewerCount: "300+",
    accentColor: "#6B32A8",
  },
  {
    id: 17,
    title:
      "APEL SERTIJAB (Serah Terima Jabatan) OSIS/MPK Masa Bakti 2025/2026 | SMK Telkom Malang",
    category: "UPACARA",
    date: "17 Oktober 2025",
    description: "Live Streaming sertijab OSIS/MPK SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/XpWWzR485bA/maxresdefault.jpg",
    thumbnailAlt:
      "APEL SERTIJAB (Serah Terima Jabatan) OSIS/MPK Masa Bakti 2025/2026 || SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/XpWWzR485bA?si=qAmNSjNnUjeR1-3G",
    viewerCount: "500+",
    accentColor: "#6B32A8",
  },
  {
    id: 18,
    title:
      "Ada Apa Dibulan Bahasa Tahun Ini? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    category: "event",
    date: "27 Oktober 2025",
    description:
      "Podcast Jam Istirahat MEMO Ada Apa Dibulan Bahasa Tahun Ini? SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/1LPbryeQSfk/maxresdefault.jpg",
    thumbnailAlt:
      "Ada Apa Dibulan Bahasa Tahun Ini? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    videoUrl: "https://youtu.be/1LPbryeQSfk?si=_k_YpIWJYNP7k6Fv",
    viewerCount: "200+",
    accentColor: "#6B32A8",
  },
  {
    id: 19,
    title:
      "Upacara Peringatan Hari Pahlawan SMK Telkom Malang || 10 November 2025",
    category: "upacara",
    date: "10 November 2025",
    description:
      "Live Streaming upacara peringatan hari pahlawan SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/Ow-ACaIooX0/maxresdefault.jpg",
    thumbnailAlt:
      "Upacara Peringatan Hari Pahlawan SMK Telkom Malang || 10 November 2025",
    videoUrl: "https://www.youtube.com/live/Ow-ACaIooX0?si=u4MV-54zVVLKAkoc",
    viewerCount: "200+",
    accentColor: "#6B32A8",
  },
  {
    id: 20,
    title:
      "Apa sih itu ANTAREJA? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    category: "event",
    date: "14 November 2025",
    description:
      "Podcast Jam Istirahat MEMO Apa sih itu ANTAREJA? SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/q1YQhLEazzU/maxresdefault.jpg",
    thumbnailAlt:
      "Apa sih itu ANTAREJA? | Podcast Jam Istirahat MEMO | SMK Telkom Malang",
    videoUrl: "https://youtu.be/q1YQhLEazzU?si=gy7oPK3o61VFcM9n",
    viewerCount: "200+",
    accentColor: "#6B32A8",
  },
  {
    id: 21,
    title: "Moklet Bilingual Week 2025 | SMK Telkom Malang",
    category: "event",
    date: "12 Desember 2025",
    description: "Live Streaming Moklet Bilingual Week 2025 SMK Telkom Malang",
    thumbnail: "https://img.youtube.com/vi/-PpKsG0JOL8/maxresdefault.jpg",
    thumbnailAlt: "Moklet Bilingual Week 2025 | SMK Telkom Malang",
    videoUrl: "https://www.youtube.com/live/-PpKsG0JOL8?si=9DMGHgjnZu4M8V3B",
    viewerCount: "400+",
    accentColor: "#6B32A8",
  },
  {
    id: 22,
    title: "🔴 LIVE Pagi HUT 66 Spentacolour SMPN 6 Malang | 15-01-2026",
    category: "event",
    date: "15 Januari 2026",
    description: "Live Streaming HUT 66 Spentacolour SMPN 6 Malang",
    thumbnail: "https://img.youtube.com/vi/A7Rx4llpm6g/maxresdefault.jpg",
    thumbnailAlt: "🔴 LIVE Pagi HUT 66 Spentacolour SMPN 6 Malang | 15-01-2026",
    videoUrl: "https://www.youtube.com/live/A7Rx4llpm6g?si=fnp13ioTwMtQFTlu",
    viewerCount: "1900+",
    accentColor: "#6B32A8",
  },
];