export default function About() {
  return (
    <section id="about" className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/60">
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          Tentang Sedap
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Sedap membawa pengalaman pesan makanan yang lebih cepat, mudah, dan lezat.
        </h2>
        <p className="text-lg leading-8 text-slate-600">
          Sedap adalah aplikasi pemesanan makanan yang membantu kamu menemukan restoran terbaik, memesan dengan cepat, dan menikmati layanan pengantaran yang andal. Kami mengutamakan kenyamanan pengguna, pilihan menu unggulan, serta promo menarik setiap kali kamu ingin makan enak.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Cepat & Mudah</h3>
            <p className="mt-2 text-sm text-slate-600">Proses pemesanan yang ringkas dan antarmuka yang intuitif.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Pilihan Berkualitas</h3>
            <p className="mt-2 text-sm text-slate-600">Menu terkurasi dari restoran terbaik dan juru masak andal.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">Promo Eksklusif</h3>
            <p className="mt-2 text-sm text-slate-600">Diskon dan penawaran khusus untuk setiap pesananmu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
