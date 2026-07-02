import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#000000] border border-slate-800/60 shadow-2xl">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/25 rounded-full blur-[100px] md:blur-[140px] pointer-events-none select-none mix-blend-screen" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] md:blur-[140px] pointer-events-none select-none mix-blend-screen" />
          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">

            {/* Judul */}
            <h2 className="text-3xl md:text-5xl font-black leading-[1.2] text-white tracking-tight">
              Bersama Bermain Gim sesuai
              <br />
              <span className="block mt-1">dengan Rating Usianya</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-400 tracking-wider font-bold">
              #TauRatingSeruGaming
            </p>

            <div className="mt-10 flex flex-col sm:flex-col justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">

              <Link
              to={'/request-rating'}
                type="button"
                className="w-full flex sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:shadow-xl hover:bg-slate-50 active:scale-95 transition-all duration-200"
              >
                Daftarkan Gim Mandiri <ArrowRight/>
              </Link>

              <Link
              to={'/suggestion'}
                type="button"
                className="w-full flex sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:shadow-xl hover:bg-slate-50 active:scale-95 transition-all duration-200"
              >
                Kritik Dan Saran <ArrowRight/>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}