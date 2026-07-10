# Makaroni Law Firm — Opsi C: "Berkas & Presisi"

Website resmi company profile **Makaroni Law Firm**, sebuah firma hukum korporasi yang didirikan pada tahun 2010 di Jakarta. Proyek ini dibangun sepenuhnya menggunakan **Vanilla HTML5, CSS3, dan JavaScript (ES6)** tanpa ketergantungan pada framework berat atau library eksternal, menawarkan performa instan, aksesibilitas tinggi, serta estetika visual premium yang terinspirasi langsung dari struktur fisik dokumen hukum korporasi.

---

## 🏛️ Deskripsi Project & Filosofi Desain: "Berkas & Presisi"

Berbeda dari website firma hukum konvensional yang sering kali bergantung pada template umum, ikon generik klise (seperti timbangan keadilan atau palu hakim), serta foto stok, **Opsi C ("Berkas & Presisi")** menerjemahkan anatomi dan ketelitian dokumen hukum ke dalam antarmuka digital modern:

- **Anatomi Dokumen Hukum (`.doc-layout`)**: Setiap section utama mengadopsi tata letak dua kolom presisi. Kolom margin kiri (`.doc-margin`) menampilkan penomoran referensi klausul/pasal (`§ 1`, `Ref. MLF/2026/01`), sedangkan kolom kanan (`.doc-content`) memuat substansi informasi dengan hierarki yang tegas.
- **Tipografi Berpasangan (Modern Serif & Monospace)**: Mengombinasikan tipografi *Display Serif* modern untuk judul berwibawa dengan *Monospace* (`letter-spacing` terukur) untuk nomor referensi kasus, sitasi, dan metadata waktu — menghadirkan kesan kepastian dan ketepatan eksak.
- **Palet Warna Curated (*Design Tokens*)**: Menggunakan variabel CSS berbasis warna kertas dokumen hukum (*Parchment* `#f5f2eb`), tinta (*Ink* `#1a1a18`), dan merah segel stempel (*Seal* `#8b261f`).

---

## ✨ Daftar Fitur Utama

### 1. 🌙 Dark Mode Presisi & Konsisten
- Dilengkapi tombol *toggle* tema (☀️/🌙) di *navbar* yang mengubah seluruh variabel warna secara dinamis tanpa kedipan (*flicker-free*).
- Pilihan tema pengguna disimpan secara otomatis di browser via `localStorage` (`mlf-theme`).
- Memiliki aturan *nested sub-element overrides* (`[data-theme="dark"] .bg-dark`) yang memastikan teks pada bagian berlatar gelap (seperti section *Careers* dan *Colophon Footer*) tetap berkontras tinggi dan mudah dibaca.

### 2. 📝 Form Validasi Interaktif (Kontak & Newsletter)
- **Formulir Kontak (`contact.html`) & Newsletter (`insights.html` / `main.js`)** dilengkapi validasi ganda menggunakan HTML5 `form.checkValidity()` dan *Regular Expression* (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
- Mencegah pengiriman data kosong atau format email yang salah dengan memunculkan pesan peringatan (*custom validity alert*).
- Saat form valid, pengiriman diproses secara mulus tanpa *reload* halaman dan langsung menampilkan kartu konfirmasi sukses (`#successMessage`).

### 3. 🕸️ Tekstur & Pola Latar Belakang Custom (CSS/SVG Murni)
- Tidak menggunakan gambar foto stok untuk dekorasi latar belakang. Setiap section diperkaya dengan tekstur visual halus berbasis **CSS Murni dan inline SVG**:
  - **Garis Ledger / Ruling Lines (`--ruling`)**: Garis pembatas tipis bergaya kertas ledger hukum.
  - **Grid & Border Klausul**: Pembagian kartu klausul dan referensi yang terkotak rapi.
  - **Subtle Gradient & Sidebar Highlights**: Membedakan setiap section agar tidak monoton namun tetap satu keluarga visual.

### 4. 🖋️ Logo Custom SVG Monogram "M"
- Logo Makaroni Law Firm dirancang khusus secara langsung di dalam kode HTML/CSS (*Inline SVG*), BUKAN file gambar eksternal atau ikon klise hukum.
- Mengadopsi bentuk monogram huruf "M" yang dimodifikasi dengan garis tebal-tipis layaknya goresan tanda tangan dan stempel/segel hukum modern.
- Bersifat *infinite scalable* (tajam di semua ukuran layar) dan otomatis mengikuti warna variabel CSS (`currentColor` & `var(--ink)`).

### 5. 👥 Foto Tim Advokat Asli & Responsive Grid
- Section "Tim Kami" (`team.html` & `index.html`) menampilkan foto profil 8 advokat/partner asli yang dimuat dari direktori `img/team/`.
- Memiliki rasio aspek yang dikunci secara konsisten (`aspect-ratio: 4/5`, `object-fit: cover`) sehingga seluruh kartu foto tampil rapi dan sejajar meskipun ukuran asli gambar berbeda-beda.
- Grid kartu responsif dari 4 kolom di desktop, 2 kolom di tablet, hingga 1 kolom di smartphone.

### 6. ⚡ Scroll Reveal, Tombol Back to Top & Filter Interaktif
- **Scroll Reveal (`.reveal`)**: Efek animasi *fade-up* berbobot ringan saat elemen memasuki *viewport* yang dikendalikan oleh `IntersectionObserver`.
- **Tombol Back to Top (`.back-to-top`)**: Tombol mengambang interaktif (`↑`) yang otomatis muncul ketika pengguna menggulir halaman ke bawah lebih dari 400px dan mengembalikan posisi scroll ke paling atas dengan transisi halus (`behavior: 'smooth'`).
- **Filter Tab Instant (`data-filter`)**: Memungkinkan penyaringan kartu area praktik (`practice-areas.html`) dan rekam jejak kasus (`track-record.html`) secara instan tanpa memuat ulang halaman (*zero-page reload*).

---

## 🛠️ Tech Stack

Proyek ini sengaja dibangun tanpa framework dan **tanpa build step** untuk menjamin *footprint* sekecil mungkin, kemudahan deployment, dan kecepatan muat maksimal:

- **HTML5 (Vanilla)**: Semantik HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) dengan struktur kelas *doc-layout* konsisten.
- **CSS3 (Vanilla)**: *CSS Custom Properties (Design Tokens)* di `:root`, Flexbox, CSS Grid Layout, Media Queries (`900px` & `768px`), serta CSS Transitions tanpa preprocessor (tanpa SASS/LESS/Tailwind).
- **JavaScript (Vanilla ES6+)**: *DOM Manipulation*, `IntersectionObserver` API, `localStorage` API, Event Delegation, dan Form Validation API murni tanpa bundler (tanpa Webpack/Vite).

---

## 🚀 Cara Menjalankan Project secara Lokal

Karena website ini dibangun menggunakan **Vanilla HTML/CSS/JS tanpa build step**, Anda dapat menjalankannya dengan mudah melalui langkah-langkah berikut:

### Langkah 1: Clone Repository
Buka terminal/command prompt Anda dan jalankan perintah clone (atau unduh ZIP repository ini):

```bash
git clone <URL_REPOSITORY_ANDA>
cd makaroni-law-firm-opsi-c
