import { Link } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Produk Unggulan", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function GuestNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
