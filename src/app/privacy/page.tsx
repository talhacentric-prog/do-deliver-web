import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/contact/PageHero";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — DoDeliver",
  description: "How DoDeliver collects and uses customer, merchant, and rider information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" />
        <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-[15px] leading-relaxed text-ink/80 lg:px-8">
          <p>
            DoDeliver collects only what is needed to open an account, book a shipment, pay out
            COD, or process a rider application.
          </p>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">What we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Name, phone, email, and pickup or delivery address.</li>
              <li>CNIC and NTN when an account or rider application requires them.</li>
              <li>Bank title, bank name, and IBAN so COD can be settled by IBFT.</li>
              <li>Shipment weight, contents declared by the shipper, and tracking scans.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">How we use it</h2>
            <p className="mt-3">
              We use this information to pick up, move, and deliver consignments, to contact the
              consignee, to settle COD, and to respond to booking or rider enquiries sent from this
              website.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Who sees it</h2>
            <p className="mt-3">
              Operations staff, the assigned rider, and the bank used for payout. If a government
              agency inspects a shipment, the customer is responsible for providing the documents
              they ask for. We do not sell personal data.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
            <p className="mt-3">
              Phone {PHONE_DISPLAY}. Email {EMAIL}.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
