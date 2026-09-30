import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactFormSection from "@/components/contact/ContactFormSection";
import PageHero from "@/components/contact/PageHero";

export const metadata: Metadata = {
  title: "Contact Us — DoDeliver",
  description:
    "Get in touch with DoDeliver. Call 021-38884408 or email info@dodeliver.com.pk.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Contact Us" breadcrumb="Contact Us" />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
