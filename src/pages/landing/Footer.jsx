export default function Footer() {
  return (
    <footer id="contact" className="rounded-[2rem] bg-slate-950 p-10 text-slate-100 shadow-lg shadow-slate-900/10">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Sedap</h3>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Aplikasi pesan makanan yang menghubungkan kamu dengan restoran lokal terbaik serta layanan pengantaran cepat dan terpercaya.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Kontak</h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Jl. Kemang Raya No. 56, Jakarta</p>
            <p>Email: help@sedap.id</p>
            <p>Telepon: +62 21 555 1234</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Ikuti Kami</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a href="#" className="transition hover:text-white">Instagram</a>
            <a href="#" className="transition hover:text-white">Facebook</a>
            <a href="#" className="transition hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-slate-400">Partner Kami</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <img src="https://images.unsplash.com/photo-1676904919026-f3501579dcde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmQlMjBtaW51bWFubnlhfGVufDB8fDB8fHww" alt="Partner 1" className="h-10 w-auto rounded-lg bg-white/10 p-2" />
              <img src="https://images.unsplash.com/photo-1769968079563-65519a9147da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYW5kJTIwcGl6emF8ZW58MHx8MHx8fDA%3D" alt="Partner 2" className="h-10 w-auto rounded-lg bg-white/10 p-2" />
              <img src="https://images.unsplash.com/photo-1760379614532-cedca7de2ccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXlhbSUyMGJyYW5kfGVufDB8fDB8fHww" alt="Partner 3" className="h-10 w-auto rounded-lg bg-white/10 p-2" />
            </div>
          </div>
          <p className="text-sm text-slate-500">© 2026 Sedap. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
