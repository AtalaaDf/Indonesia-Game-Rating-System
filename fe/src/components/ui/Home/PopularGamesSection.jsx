import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router";
import { getGames } from "@/api/gameService";

export default function PopularGamesSection() {
  const [games, setGames] = useState([]);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    getGames()
      .then((data) => setGames(data))
      .catch(() => setGames([]));
  }, []);

  const displayGames = [...games, ...games];

  const startMarquee = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const animate = () => {
      if (!isDragging.current) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, []);

  useEffect(() => {
    if (!games.length) return;

    const cancel = startMarquee();

    return cancel;
  }, [games, startMarquee]);

  const handleMouseDown = (e) => {
    isDragging.current = true;

    const el = carouselRef.current;

    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;

    el.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();

    const el = carouselRef.current;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    el.scrollLeft = scrollLeftStart.current - walk;

    const half = el.scrollWidth / 2;

    // Loop kiri
    if (el.scrollLeft <= 0) {
      el.scrollLeft += half;
    }

    // Loop kanan
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    }
  };

  const stopDragging = () => {
    isDragging.current = false;

    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const getRatingColor = (ageRating) => {
    if (ageRating?.includes("13") || ageRating?.includes("15"))
      return "bg-blue-500";

    if (ageRating?.includes("18")) return "bg-red-600";

    return "bg-green-600";
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Paling Banyak Dilihat
            </h2>

            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Game populer yang sedang diperiksa hari ini
            </p>
          </div>

          <Link
            to="/games"
            className="text-xs md:text-sm text-blue-600 font-semibold hover:text-blue-700 hover:underline"
          >
            Lihat Semua &gt;
          </Link>
        </div>

        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide select-none"
          style={{ cursor: "grab" }}
        >
          {displayGames.map((game, index) => (
            <Link
              key={`${game.id}-${index}`}
              to={`/games/${game.id}`}
              draggable={false}
              className="shrink-0 w-[240px] md:w-[260px] group block"
            >
              <div className="w-full aspect-[16/10] rounded-xl bg-slate-100 overflow-hidden relative mb-3 shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-100">
                {game.coverImage ? (
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                    <span className="text-gray-400 text-xs">
                      [Cover Game]
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                    {game.title}
                  </h3>

                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {game.publisher || "Moonton"}
                  </p>
                </div>

                <div
                  className={`w-7 h-7 shrink-0 rounded flex items-center justify-center text-[10px] font-black text-white ${getRatingColor(
                    game.ageRating
                  )}`}
                >
                  {game.ageRating}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}