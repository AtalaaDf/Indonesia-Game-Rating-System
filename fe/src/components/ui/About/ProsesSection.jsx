import {
  UserPlus,
  ClipboardList,
  ShieldCheck,
  Scale,
  Award,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Pendaftaran Akun",
    description: "Penerbit Gim/Pengembang mendaftar akun pada website IGRS",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Self-assessment",
    description: "Penerbit Gim/Pengembang melakukan self-assessment Gim",
  },
  {
    number: 3,
    icon: ShieldCheck,
    title: "Verifikasi",
    description: "Penerbit Gim/Pengembang menunggu hasil verifikasi dari IGRS",
  },
  {
    number: 4,
    icon: Scale,
    title: "Sanggah",
    description:
      "Penerbit Gim/Pengembang dapat mengajukan proses sanggah terhadap hasil verifikasi",
  },
  {
    number: 5,
    icon: Award,
    title: "Sertifikasi",
    description:
      "Penerbit Gim/Pengembang mengunduh sertifikat hasil klasifikasi",
  },
];

export default function ProsesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#0058BE] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Alur Kerja Kami
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4">
            Proses Klasifikasi Gim IGRS
          </h2>
          <p className="text-[#45464D] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Proses pengajuan klasifikasi gim kini dilakukan sepenuhnya secara
            daring melalui portal resmi IGRS dengan langkah-langkah yang
            terstruktur dan transparan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center text-center">

                <div className="relative mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 md:w-9 md:h-9 text-blue-600" strokeWidth={1.5} />
                  </div>

                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}