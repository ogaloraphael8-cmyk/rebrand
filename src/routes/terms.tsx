import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, Eyebrow, EMAIL, PHONE } from "../components/halden-site";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | Halden Consulting Group" },
    { name: "description", content: "Terms and conditions for consulting services provided by Halden Consulting Group Limited in Kenya." },
    { property: "og:title", content: "Terms & Conditions | Halden Consulting Group" },
    { property: "og:description", content: "Terms and conditions for consulting services provided by Halden Consulting Group Limited in Kenya." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: TermsPage,
});

const sections: [string, React.ReactNode][] = [
  ["1. About these terms", <p key="p">These Terms & Conditions govern the consulting services provided by Halden Consulting Group Limited ("Halden", "we", "us") to clients ("you") in Kenya and the wider East African region. By booking a consultation, engaging our services or using this website, you agree to these terms. If you have any questions, contact Denis at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE}`}>+254 729 055 293</a>.</p>],
  ["2. Our services", <p key="p">We provide independent consulting across agriculture and agribusiness, NGO strategy and capacity building, human rights and children's rights advocacy, project proposal writing and grant sourcing, monitoring and evaluation, community development and training, business planning, and policy research and analysis. The exact scope of any engagement is agreed with you before work begins and confirmed in writing (including by email or WhatsApp).</p>],
  ["3. Bookings and payment", <p key="p">Consultations are booked through the booking page on this website or directly with Denis. Package prices are quoted in Kenyan Shillings (KES) — Starter Consult KES 3,500, Standard Consult KES 12,500 and Premium Proposal Package KES 75,000 — unless a different amount is agreed in writing. Payment is accepted via M-Pesa, Airtel Money and card, processed through our secure checkout provider. A booking is confirmed once payment is received.</p>],
  ["4. Rescheduling and cancellation", <p key="p">You may reschedule or cancel a booked consultation by contacting Denis at least 48 hours before the scheduled time, and we will offer an alternative slot or a refund of the fee. Cancellations made with less than 48 hours' notice may forfeit the booking fee. If we need to reschedule, we will offer you a mutually convenient alternative or a full refund.</p>],
  ["5. Deliverables and timelines", <p key="p">Where an engagement includes written deliverables (such as advice, proposals or M&E frameworks), we agree realistic timelines with you before work begins. Timelines depend on receiving the information and inputs we need from you; delays in providing these may extend delivery dates. We will always keep you informed of progress.</p>],
  ["6. Client responsibilities", <p key="p">You agree to provide accurate, complete and timely information relevant to the engagement, and to use our advice and deliverables for the purposes agreed. Our recommendations are based on the information you provide and our professional judgement at the time; you remain responsible for decisions you take and how you implement them.</p>],
  ["7. Confidentiality", <p key="p">We treat your information with care and do not disclose confidential information shared during an engagement to third parties, except where required by law or where you have given permission. We may reference the general nature of our work anonymously (for example, sector and type of engagement) unless you ask us not to.</p>],
  ["8. Intellectual property", <p key="p">Once payment is made in full, deliverables prepared for you are yours to use for your intended purposes. We retain the right to reuse our general methodologies, frameworks, templates and know-how. The content, design and branding of this website remain the property of Halden Consulting Group Limited.</p>],
  ["9. Limitation of liability", <p key="p">Our services are provided with reasonable skill and care. To the extent permitted by Kenyan law, we are not liable for indirect or consequential losses, lost profits or losses arising from decisions you make based on our advice. Our total liability for any claim is limited to the fees you paid for the engagement concerned.</p>],
  ["10. Governing law", <p key="p">These terms are governed by the laws of Kenya, and any dispute arising from them or from our services shall be resolved in the courts of Kenya, or by mutual agreement, through mediation. Should any provision of these terms prove unenforceable, the remaining provisions continue in full effect.</p>],
  ["11. Updates to these terms", <p key="p">We may update these terms from time to time to reflect changes in our services or the law. The current version is always published on this page with its effective date. Continued use of our services after an update constitutes acceptance of the revised terms.</p>],
];

function TermsPage() {
  return <div className="site-grain"><Header/><main>
    <section className="book-hero"><div className="book-hero-inner"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Terms &amp; Conditions</b></div><Eyebrow light>Legal</Eyebrow><div className="legal-intro"><h1>Terms &amp; Conditions</h1><p>How we work with you, what you can expect from our services and the terms that apply to every engagement.</p></div></div></section>
    <section className="legal-body"><p className="legal-effective">Effective date: 1 October 2026 · Halden Consulting Group Limited, Kenya</p>
      {sections.map(([title, body]) => <article key={title}><h2>{title}</h2>{body}</article>)}
      <div className="legal-contact"><h2>Questions?</h2><p>For anything about these terms, reach Denis directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE}`}>+254 729 055 293</a>, Monday–Saturday, 8am–6pm. See also our <Link to="/privacy">Privacy Policy</Link>.</p></div>
    </section>
  </main><Footer/></div>;
}
