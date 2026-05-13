export default function Highlights() {
  const highlights = [
    {
      title: "Order Mudah",
      text: "Pesan menu favorit dalam beberapa ketukan saja."
    },
    {
      title: "Pembayaran Aman",
      text: "Dukungan pembayaran digital yang cepat dan terpercaya."
    },
    {
      title: "Promo Eksklusif",
      text: "Diskon spesial setiap hari untuk pelanggan setia."
    }
  ];

  return (
    <section className="grid gap-6 rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/60 lg:grid-cols-3">
      {highlights.map((item) => (
        <div key={item.title} className="rounded-[1.75rem] border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
