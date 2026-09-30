import { HomeArrival } from "@/components/HomeArrival";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Articles } from "@/components/Articles";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#ffffff] selection:bg-white selection:text-black">
      <HomeArrival />
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Projects />
        <WhyChooseUs />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Articles />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
