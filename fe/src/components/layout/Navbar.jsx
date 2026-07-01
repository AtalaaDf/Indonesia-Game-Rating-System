import { useState } from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/about" },
  { label: "Informasi Rating", to: "/rating-info" },
  { label: "Konsultasi Adiksi", to: "/konsultasi" },
  { label: "Hubungi Kami", to: "/hubungi-kami" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/igrs1.png" alt="IGRS Logo" className="h-8 w-auto" />
          </Link>

          {/* Nav Links - desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 transition-colors ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Buttons - desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Masuk
            </button>
            <button
              className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Daftar
            </button>
          </div>

          {/* Hamburger - mobile */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-2 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              className="flex-1 text-center px-5 py-2 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600"
            >
              Masuk
            </button>
            <button
              className="flex-1 text-center px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              Daftar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}