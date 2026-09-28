import CourierLoader from "@/components/CourierLoader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CTA from "@/components/sections/CTA";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import RiderApply from "@/components/sections/RiderApply";
import Services from "@/components/sections/Services";
import Tracking from "@/components/sections/Tracking";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <CourierLoader />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <DashboardPreview />
        <RiderApply />
        <Partners />
        <WhyUs />
        <Tracking />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
