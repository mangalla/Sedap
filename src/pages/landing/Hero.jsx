import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="space-y-8">
        <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Aplikasi Pesan Makanan Online
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Rasakan kenikmatan Sedap langsung di ujung jarimu.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-600">
          Pesan hidangan lezat dari restoran terbaik, nikmati pengantaran cepat, dan dapatkan promo eksklusif setiap hari.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-200/50 transition hover:bg-green-600"
          >
            Daftar Sekarang
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Masuk Akun
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/60">
        <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-green-100 blur-3xl opacity-70" />
        <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80"
            alt="Ilustrasi makanan Sedap"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pilihan Terbaik</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">Menu favorit</h3>
            <p className="mt-2 text-sm text-slate-600">Ribuan hidangan dari restoran terbaik di kota.</p>
          </div>
          <div className="rounded-3xl bg-slate-100 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pengantaran Cepat</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">Sampai dalam waktu singkat</h3>
            <p className="mt-2 text-sm text-slate-600">Dari dapur ke meja kamu dengan pengiriman cepat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
