import { ExternalLink } from "lucide-react"; 
import { mockBeritaTerbaru, mockBlogTerbaru } from "@/api/mock/berita";

export default function BeritaSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Berita Terbaru */}
          <div className="lg:col-span-2">
            <div className="flex">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Berita Terbaru
            </h2>
            <div className="ml-8 mt-3">
            <div className="w-[630px] h-[1px] bg-[#E5EEFF] self-end mb-1 hidden sm:block "/>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockBeritaTerbaru.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400 text-xs">[Gambar Berita]</span>
                    )}
                  </div>
                  <div className="p-4">
                    <span className={`${item.categoryColor} text-white text-xs font-semibold px-2 py-0.5 rounded mb-2 inline-block`}>
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {item.date} · {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Blog Terbaru */}
        <div className="bg-white max-h-[640px] h-[640px] shadow-md rounded-2xl flex flex-col justify-between overflow-hidden">
  
        {/* Header Blog */}
        <div className="flex items-center justify-between px-4 py-4 shrink-0">
          <h2 className="text-xl font-bold text-gray-900">Blog Terbaru</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-1">
          {mockBlogTerbaru.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:shadow-md transition-shadow group flex gap-3 p-3 cursor-pointer mb-2"
            >
              <div className="w-20 h-20 shrink-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <span className="text-gray-400 text-xs text-center px-1">[Img]</span>
                )}
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {item.date} · {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-0 shrink-0 bg-white pb-5 pt-2">
          <div className="flex justify-center items-center mb-3">
            <div className="w-full mx-4 h-[1px] bg-black/10 block"/>
          </div>
          <div className="flex justify-center items-center">
            <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Lihat Selengkapnya <ExternalLink className="w-4 h-4"/>
            </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}