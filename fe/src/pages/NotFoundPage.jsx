import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-300 mb-2">404</h1>
      <p className="text-xl font-semibold mb-2">Halaman tidak ditemukan</p>
      <p className="text-gray-600 max-w-md mb-6">
        Halaman yang kamu cari mungkin sudah dipindah, dihapus, sedang dalam perbaikan atau memang
        tidak pernah ada.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}