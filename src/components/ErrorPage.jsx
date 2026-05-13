import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ganti dengan 'next/router' jika menggunakan Next.js

export default function ErrorPage({ errorCode, title, description, imageUrl }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
            {/* Gambar Error */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                    src={imageUrl} 
                    alt={`Error ${errorCode}`} 
                    className="w-full max-w-[320px] md:max-w-[400px] h-auto object-contain mx-auto"
                />
            </div>

            {/* Konten Teks */}
            <div className="max-w-md">
                <h1 className="text-8xl font-black text-gray-200 select-none">
                    {errorCode}
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-[-2rem] mb-4">
                    {title}
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    {description}
                </p>

                {/* Tombol Aksi */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        Kembali ke Beranda
                    </button>
                    <button 
                        onClick={() => window.location.reload()}
                        className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        Refresh Halaman
                    </button>
                </div>
            </div>
        </div>
    );
}