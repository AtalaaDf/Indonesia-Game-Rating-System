import { ExternalLink } from "lucide-react"

export default function MelindungiGamerSection() {
  return (
    <section className="bg-[#0D1C2D] py-14 md:py-20 rounded-4xl shadow-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <div className="bg-blue-200/10 rounded-2xl mb-4 px-4 py-1 w-[285px]">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em]">
              Melindungi Gamer Indonesia
            </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              <span className="text-blue-600">IGRS</span> atau Klasifikasi
              Permainan Interaktif Elektronik{" "}
              <span className="text-green-400">(KPIE)</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              IGRS adalah sistem klasifikasi permainan interaktif elektronik
              yang diselenggarakan oleh Pemerintah Indonesia melalui Kementerian
              Komunikasi dan Digital. Tujuan kami adalah memberikan pedoman bagi
              orang tua dan pengguna dalam memilih permainan yang sesuai dengan
              usia.
            </p>
            <button className="inline-flex items-center gap-2 text-black text-sm font-semibold px-6 py-3 rounded-lg bg-[#ADC6FF] hover:bg-[#96b6ff] transition-colors">
              Pelajari Lebih Lanjut <ExternalLink/>
            </button>
          </div>

          <div className="hidden md:flex flex justify-center md:justify-end">
            <img src="/igrslogo2.png" alt="IGRS Logo" />
          </div>

        </div>
      </div>
    </section>
  );
}