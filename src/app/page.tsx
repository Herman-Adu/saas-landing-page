import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { FeaturedCarousel } from "@/sections/FeaturedCarousel";
import { Featured } from "@/sections/Featured";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <FeaturedCarousel />
      <Featured />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
