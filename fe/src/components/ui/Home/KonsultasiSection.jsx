import { Heart, ArrowRight } from "lucide-react";
import konseling from "@/assets/Home/konseling.png"

export default function KonsultasiSection() {
  return (
    <section className="bg-[#0B1C30] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4 justify-center items-center bg-green-200 px-2 py-2 w-10 h-10 rounded-xl">
                <Heart className="w-6 h-6 text-green-700"/>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                Butuh Bantuan? Konsultasi Gratis
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Kecanduan gim dapat berdampak pada kesehatan fisik dan mental.
                Tim ahli kami siap mendampingi Anda dan keluarga untuk kembali
                ke pola bermain yang sehat dan produktif.
              </p>
              <div>
                <button className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
                  Hubungi Konselor <ArrowRight/>
                </button>
              </div>
            </div>

          <div className="hidden md:flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-emerald-500/30 rounded-full blur-3xl" />
            <img src={konseling} alt="" className="relative z-10 w-64 h-64 rounded-2xl" />
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}