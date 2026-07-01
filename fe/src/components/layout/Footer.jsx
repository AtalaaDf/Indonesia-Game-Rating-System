import { Link } from "react-router";

const pintasan = [
  { label: "Beranda", to: "/" },
  { label: "Blog", to: "/blog" },
];

const informasi = [
  { label: "Tentang IGRS", to: "/about" },
  { label: "Maklumat Pelayanan", to: "/maklumat" },
  { label: "Informasi Rating", to: "/rating-info" },
  { label: "FAQ", to: "/faq" },
];

const kontak = [
  { label: "Hubungi Kami", to: "/hubungi-kami" },
];

export default function Footer() {
  return (
    <footer className="bg-[#131B2E] text-gray-300">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Kolom 1 - Logo + Deskripsi */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/komdigi1.png" alt="Komdigi" className="h-10 w-auto" />
              <img src="/igrs1.png" alt="IGRS" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Indonesia Game Rating System (IGRS) merupakan pengklasifikasian
              Permainan Interaktif Elektronik (PIE) atau game berdasarkan konten
              dan kelompok usia pengguna.
            </p>
            <div>
              <p className="text-sm text-gray-400 mb-2">Didukung oleh :</p>
              <img src="/balai1.png" alt="Balai Sertifikasi Elektronik" className="h-10 w-auto" />
            </div>
          </div>

          {/* Kolom 2 - Pintasan */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Pintasan
            </h3>
            <ul className="space-y-2">
              {pintasan.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 - Informasi */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Informasi
            </h3>
            <ul className="space-y-2">
              {informasi.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4 - Kontak + Alamat */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Kontak
              </h3>
              <ul className="space-y-2">
                {kontak.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Alamat Kami
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="leading-relaxed">
                  Jl. Medan Merdeka Barat No.9, RT.002/RW.003, Gambir, Jakarta
                  Pusat, DKI Jakarta 10110
                </p>
                <a href="tel:+62811806860"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +62811806860
                </a>

                <a href="mailto:helpdesk@igrs.id"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  helpdesk@igrs.id
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider + Syarat */}
      <div className=" border-gray-700">
        <div className="flex item-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-400">
          <p className="hover:text-white transition-colors">
            Syarat dan Ketentuan
          </p>
          <span className="mx-2">|</span>
          <p className="hover:text-white transition-colors">
            Kebijakan Privasi
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-gray-500">
          © IGRS 2026 - Direktorat Jenderal Ekosistem Digital | Kementerian
          Komunikasi dan Digital RI
        </div>
      </div>

    </footer>
  );
}