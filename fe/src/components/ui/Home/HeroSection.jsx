import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";
import { mockRatings } from "@/api/mock/ratings";

import pubg from "@/assets/Home/pubg.png";
import ml from "@/assets/Home/mobilelegends.png";
import wukong from "@/assets/Home/wukong.png";
import er from "@/assets/Home/eldenring.png";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/games?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleRatingClick = (rating) => {
    navigate(`/rating-info?rating=${rating.label}`);
  };

  return (
    <section className="relative overflow-hidden min-h-[600px] md:h-[700px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blur */}
        <div className="absolute top-0 left-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-700/30 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-black/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-44 h-28 sm:w-56 sm:h-36 md:w-72 md:h-40 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Game Images */}
        <img
          src={ml}
          alt="Mobile Legends"
          className="absolute -top-4 -left-6 w-36 sm:w-48 md:top-0 md:left-0 md:w-96 md:h-96"
        />

        <img
          src={wukong}
          alt="Black Myth Wukong"
          className="absolute -top-4 -right-6 w-36 sm:w-48 md:top-0 md:right-0 md:w-96 md:h-96"
        />

        <img
          src={pubg}
          alt="PUBG"
          className="absolute -bottom-4 -left-6 w-36 sm:w-48 md:bottom-0 md:left-0 md:w-96 md:h-96"
        />

        <img
          src={er}
          alt="Elden Ring"
          className="absolute -bottom-4 -right-6 w-36 sm:w-48 md:bottom-0 md:right-0 md:w-96 md:h-96"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
            Tau{" "}
            <span className="text-green-600">
              RATING
            </span>{" "}
            dulu,
            <br />
            Baru Seru{" "}
            <span className="text-blue-600">
              GAMING!
            </span>
          </h1>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-xl mb-8"
          >
            <div className="flex items-center bg-white rounded-full shadow-2xl p-2">
              <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari Game..."
                className="flex-1 min-w-0 px-3 py-2 text-sm md:text-base text-gray-800 outline-none bg-transparent"
              />

              <button
                type="submit"
                className="px-4 sm:px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors shrink-0"
              >
                Cari
              </button>
            </div>
          </form>

          {/* Rating */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {mockRatings.map((rating) => (
              <button
                key={rating.label}
                onClick={() => handleRatingClick(rating)}
                title={rating.desc}
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={rating.image}
                  alt={`Rating ${rating.label}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}