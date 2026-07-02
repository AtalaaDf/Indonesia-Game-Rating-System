import {
  Ghost, Wifi, User, Swords, EyeOff,
  Cigarette, MessageCircleWarning, Dices, Droplet,
} from "lucide-react";
import { mockKategoriKonten } from "@/api/mock/kategoriKonten";

const iconMap = {
  Ghost, Wifi, User, Swords, EyeOff,
  Cigarette, MessageCircleWarning, Dices, Droplet,
};

export default function KategoriKontenSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Kategori Konten
          </h2>
          <p className="text-black text-sm md:text-base max-w-2xl mx-auto">
            Berdasarkan Permen Kominfo No. 2/2024, gim diklasifikasikan
            berdasarkan kategori konten berikut untuk menjamin keamanan pengguna.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {mockKategoriKonten.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-[#C6C6CD33] shadow-md hover:border-blue-200 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-6 h-6 text-black group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-xs text-black leading-snug font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}