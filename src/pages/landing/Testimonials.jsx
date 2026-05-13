import testimonials from "../../data/testimonials.json";

export default function Testimonials() {
  return (
    <section id="testimonials" className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/60">
      <div className="space-y-6">
        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          Ulasan Pengguna
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Suara pelanggan yang sudah menikmati Sedap
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">&quot;{testimonial.review}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
