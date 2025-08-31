import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Fees from "@/components/sections/Fees";
import FAQ from "@/components/sections/FAQ";
import Signup from "@/components/sections/Signup";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      {/* <TrustBar /> */}
      <Benefits />
      <HowItWorks />
      <Fees />
      <FAQ />
      <Signup />
      <Footer />
    </div>
  );
}
