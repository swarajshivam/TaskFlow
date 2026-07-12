import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import DashboardPreview from "../components/landing/DashboardPreview";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default Landing;