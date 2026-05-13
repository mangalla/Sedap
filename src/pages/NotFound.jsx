import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Komponen Header Anda */}

      <main className="flex flex-grow items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* Ilustrasi atau Angka Besar */}
          <div className="relative">
            <h1 className="text-[12rem] font-extrabold text-slate-200 select-none">
              404
            </h1>
            <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-800 mt-8">
              Waduh! Kamu tersesat.
            </p>
          </div>

          {/* Deskripsi */}
          <div className="mt-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Halaman tidak ditemukan
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Maaf, halaman yang kamu cari tidak ada atau mungkin sudah
              dipindahkan ke jagat raya lain.
            </p>
          </div>

          {/* Navigasi Balik */}
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link
              to="/"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 hover:shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Balik ke Beranda
            </Link>
            <Link
              to="/help"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Butuh bantuan? <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer sederhana opsional */}
      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Nama Perusahaan Anda
      </footer>
    </div>
  );
}
