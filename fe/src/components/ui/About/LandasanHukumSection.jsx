import { FileText } from "lucide-react";
import foto from "@/assets/About/LandasanHukum.png";

const peraturan = [
  {
    id: 1,
    title: "Permen Kominfo No. 2 Tahun 2024",
    description: "Klasifikasi Gim sebagai landasan operasional utama IGRS saat ini.",
  },
  {
    id: 2,
    title: "Permen Kominfo No. 11 Tahun 2016",
    description: "Klasifikasi Permainan Elektronik Interaktif (Basis Perubahan).",
  },
];

export default function LandasanHukumSection() {
  return (
    <section className="bg-[#D3E4FE4D] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Kolom kiri - teks + cards */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Landasan Hukum
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              IGRS beroperasi di bawah kerangka hukum yang kuat untuk
              menstandarisasi distribusi video gim di Indonesia dan melindungi
              kepentingan publik.
            </p>

            {/* Cards peraturan */}
            <div className="space-y-4">
              {peraturan.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 md:p-5 border border-gray-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-blue-500 font-semibold text-sm md:text-base mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom kanan - ilustrasi */}
          <div className="relative flex justify-center lg:justify-end">

          {/* Background Card */}
          <div
            className="
              absolute w-[420px] h-[415px] -m-3 bg-slate-300 rounded-3xl rotate-3 shadow-xl"
          />

          {/* Image */}
          <img
            src={foto}
            alt="Landasan Hukum"
            className=" relative rounded-2xl shadow-2xl z-10 w-[400px] object-contain"
          />

          </div>

        </div>
      </div>
    </section>
  );
}