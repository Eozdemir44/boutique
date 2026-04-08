import PromoBar from "@/components/PromoBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import Commitment from "@/components/Commitment";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <FeaturedProducts />
        <BrandStory />
        <Commitment />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
