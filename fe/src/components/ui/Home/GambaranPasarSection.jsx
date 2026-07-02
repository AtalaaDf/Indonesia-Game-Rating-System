// src/components/ui/Home/GambaranPasarSection.jsx
import { mockPasarTotal, mockPasarCards } from "@/api/mock/pasarStats";

export default function GambaranPasarSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">
            Gambaran Umum Pasar
          </h2>
          
          <div className="flex items-center gap-8 md:gap-12">
            <div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Total Gim Yang Terdaftar
              </p>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {mockPasarTotal.totalGame}
              </p>
            </div>

            <div className="w-[1px] h-12 bg-slate-200 self-end mb-1 hidden sm:block" />
            
            <div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Total Penerbit Gim Yang Terdaftar
              </p>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {mockPasarTotal.totalPenerbit}
              </p>
            </div>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockPasarCards.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-[#0c111d] rounded-2xl p-6 flex flex-col justify-between min-h-[190px] relative overflow-hidden shadow-2xl"
            >
              
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${stat.color || "bg-blue-500"}`} />

              {/* Konten Card Atas: Gambar/Badge IGRS */}
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <img 
                  src={stat.coverImage} 
                  alt={`Rating ${stat.label}`}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              {/* Konten Card Bawah: Angka Statistik & Deskripsi */}
              <div className="mt-auto">
                <p className="text-3xl font-black text-white tracking-tight mb-2">
                  {stat.count}
                </p>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}