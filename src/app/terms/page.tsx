import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/contact/PageHero";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — DoDeliver",
  description: "Booking, delivery, claims, and account terms for DoDeliver shipments.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Terms & Conditions" breadcrumb="Terms & Conditions" />
        <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-[15px] leading-relaxed text-ink/80 lg:px-8">
          <p>
            These terms follow the DoDeliver COD proposal. Account-specific rates, fuel surcharge,
            and insurance stay on the signed contract.
          </p>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Booking and pickup</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>COD shipments need an opened account.</li>
              <li>Pickup happens only when the shipment is booked on the DoDeliver portal.</li>
              <li>Bookings before 2:00 PM are picked the same working day. Bookings after 4:00 PM move to the next working day.</li>
              <li>Minimum chargeable weight on COD light is 1 kg. If volumetric weight is higher, weight is (height × width × length in cm) / 5000.</li>
              <li>Packaging and sealing are the shipper’s responsibility, with a DoDeliver label attached.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Delivery attempts</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Within city: attempt within 24 hours of dispatch.</li>
              <li>Karachi, Lahore, and Islamabad: 1 to 3 working days after pickup.</li>
              <li>Other destinations: 3 to 6 working days.</li>
              <li>Up to 3 attempts. After that the parcel returns, and return charges follow the agreement.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Payments</h2>
            <p className="mt-3">
              Delivered COD is paid by IBFT twice a week. Shipment charges are deducted at the time
              of payment. Fuel surcharge may apply if fuel prices rise. Rate changes are notified
              two weeks ahead.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Claims</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Damage from poor packing is not accepted.</li>
              <li>Accepted loss, damage, robbery, or snatching claims repay 80% of value, with purchase or clearing documents.</li>
              <li>Claims raised more than 30 days after pickup are not considered.</li>
              <li>No claim after the consignee has received the parcel.</li>
              <li>DoDeliver is not liable for fires, strikes, earthquakes, or similar events.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Prohibited items</h2>
            <p className="mt-3">
              Do not ship currency, jewellery, bullion, antiques, alcohol, stamps, precious metals,
              stones, works of art, weapons, plants, medicines, explosives, animals, consumables, or
              any item restricted by provincial or federal law. DoDeliver may act if such an item is
              found.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Accounts and tax</h2>
            <p className="mt-3">
              A copy of the NTN certificate is required to activate an account. GST follows the
              origin territory (ICT 16%, KPRA 15%, BRA 15%, PRA 16%, SRB 13%). Questions: {EMAIL} or{" "}
              {PHONE_DISPLAY}.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
