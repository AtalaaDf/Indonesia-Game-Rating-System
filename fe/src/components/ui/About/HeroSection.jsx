import background from "@/assets/About/background.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px]">

      <img
        src={background}
        className="absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            Tentang Kami{" "}
            <span className="text-blue-500">
              IGRS
            </span>
          </h1>

          {/* Subtitle kecil */}
          <p className="text-[#D8E2FF] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Indonesia Game Rating System
          </p>

          {/* Deskripsi */}
          <div className="border-l-4 border-white pl-5 space-y-4">
            <p className="text-[#FFFFFFE5] text-sm md:text-base leading-relaxed">
              Indonesia Game Rating System (IGRS) adalah layanan publik di bawah
              naungan Direktorat Jenderal Ekosistem Digital, Kementerian
              Komunikasi dan Digital, Republik Indonesia (Komdigi). Kehadiran
              IGRS merupakan langkah strategis pemerintah dalam merespons
              perkembangan pesat industri video gim di tanah air, sekaligus
              menjalankan amanat regulasi yang berlaku.
            </p>
            <p className="text-[#FFFFFFE5] text-sm md:text-base leading-relaxed">
              Kami berkomitmen untuk mendukung ekosistem gim yang sehat dan
              edukatif bagi seluruh masyarakat Indonesia. Dengan menyediakan
              sistem klasifikasi yang transparan dan akurat, IGRS membantu orang
              tua, pendidik, dan pengguna dalam memilih produk gim yang sesuai
              dengan kelompok usia dan nilai-nilai lokal.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}