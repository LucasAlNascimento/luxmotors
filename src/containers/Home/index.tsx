import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Search from "../../components/Search";
import Brands from "../../components/Brands";
import FeaturedCars from "../../components/FeaturedCars";
import Benefits from "../../components/Benefits";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-300 overflow-x-hidden">
      <Header />
      <Slider />
      <Search />
      <Brands />
      <FeaturedCars />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
