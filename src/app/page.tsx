import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProp } from "@/components/ValueProp";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { faqs, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      telephone: site.phone.display,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manchester",
        addressCountry: "GB",
      },
      areaServed: "GB",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <ValueProp />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
