import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Bestseller from "@/components/home/bestseller";
import Product from "@/components/home/product";
import Buynow from "@/components/home/buynow";
import Featured from "@/components/home/featured";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bestseller />
      <Product />
      <Buynow />
      <Featured />
      <Footer />
    </div>
  );
}
