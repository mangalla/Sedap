import Hero from "./landing/Hero";
import About from "./landing/About";
import Products from "./landing/Products";
import Testimonials from "./landing/Testimonials";
import Highlights from "./landing/Highlights";
import Footer from "./landing/Footer";

export default function Landing() {
  return (
    <div className="space-y-16">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Highlights />
      <Footer />
    </div>
  );
}
