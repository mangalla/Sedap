import products from "../../data/products.json";

export default function Products() {
  return (
    <section id="products" className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/60">
      <div className="space-y-6">
        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          Produk Unggulan
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-950">{product.price}</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">Best Seller</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
