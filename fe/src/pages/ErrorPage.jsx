import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-2xl font-bold mb-2">Oops, ada yang salah</h1>
      <p className="text-gray-500 mb-4">
        Terjadi kesalahan tak terduga. Coba muat ulang halaman, atau kembali ke beranda.
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        Kembali ke Beranda
      </Link>
    </div>
  );
}