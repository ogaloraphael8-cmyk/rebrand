import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, Eyebrow, EMAIL, PHONE } from "../components/halden-site";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | Halden Consulting Group" },
    { name: "description", content: "How Halden Consulting Group Limited collects, uses and protects your personal information." },
    { property: "og:title", content: "Privacy Policy | Halden Consulting Group" },
    { property: "og:description", content: "How Halden Consulting Group Limited collects, uses and protects your personal information." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: PrivacyPage,
});

const sections: [string, React.ReactNode][] = [
  ["1. Who we are", <p key="p">Halden Consulting Group Limited ("Halden", "we", "us") is an independent consulting firm based in Kenya, serving clients across Kenya and East Africa. For any question about this policy or your personal information, contact Denis at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE}`}>+254 729 055 293</a>.</p>],
  ["2. Information we collect", <p key="p">We collect information you choose to share with us: your name, email address, phone number, the service you are interested in and the content of your message when you use the enquiry form, contact us by email, WhatsApp or phone, or book a consultation. For bookings and payments, we receive your name, contact details and a record of the package purchased and amount paid. We do not see or store your full card or mobile-money credentials; those are handled by our payment provider.</p>],
  ["3. How your enquiry form works", <p key="p">The enquiry form on this website does not send information to a server. When you submit it, your own email application opens with your details filled in, ready for you to send to us. Your information only reaches us once you send that email or otherwise contact us directly.</p>],
  ["4. How we use your information", <p key="p">We use your information to respond to enquiries, arrange and deliver consultations and deliverables, process bookings and payments, keep proper business records, and follow up on work we have done together. We may also use contact details to share updates relevant to an engagement. We do not sell, rent or trade your personal information, and we do not send unrelated marketing without your consent.</p>],
  ["5. Sharing your information", <p key="p">We share personal information only with service providers that help us operate — for example our payment processor and email/communication services — and only to the extent necessary. We may disclose information where required by Kenyan law or to protect our legal rights. Any confidential information shared during an engagement is handled as described in our <Link to="/terms">Terms &amp; Conditions</Link>.</p>],
  ["6. Cookies and website data", <p key="p">This website is informational and does not use advertising or tracking cookies. Basic, non-identifying technical data (such as browser type and pages visited) may be processed by our hosting provider to keep the site running and secure.</p>],
  ["7. How long we keep information", <p key="p">We keep enquiry and client information only as long as needed for the purposes above — typically for the duration of an engagement and for a reasonable record-keeping period afterwards, as required by Kenyan tax and business law — after which it is securely deleted or anonymized.</p>],
  ["8. Your rights", <p key="p">Under the Data Protection Act (Kenya, 2019) and comparable regional laws, you may ask us to access the personal information we hold about you, correct it, delete it, or object to or restrict how we use it. To exercise any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond within a reasonable time. You also have the right to complain to the Office of the Data Protection Commissioner in Kenya.</p>],
  ["9. Security", <p key="p">We apply reasonable technical and organizational measures to protect the information we hold, including limiting access to the people who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we take the protection of your information seriously and act promptly on any concern.</p>],
  ["10. Children's privacy", <p key="p">Our services are directed at organizations and adults. We do not knowingly collect personal information from children. While we advocate for children's rights, any information about children encountered in programme work is handled under the safeguards agreed with the relevant organization.</p>],
  ["11. Changes to this policy", <p key="p">We may update this policy from time to time. The current version is always published on this page with its effective date, and significant changes will be highlighted to active clients.</p>],
];

function PrivacyPage() {
  return <div className="site-grain"><Header/><main>
    <section className="book-hero"><div className="book-hero-inner"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Privacy Policy</b></div><Eyebrow light>Legal</Eyebrow><div className="legal-intro"><h1>Privacy Policy</h1><p>What information we collect, how we use it and the care we take to protect it.</p></div></div></section>
    <section className="legal-body"><p className="legal-effective">Effective date: 1 October 2026 · Halden Consulting Group Limited, Kenya</p>
      {sections.map(([title, body]) => <article key={title}><h2>{title}</h2>{body}</article>)}
      <div className="legal-contact"><h2>Questions?</h2><p>For anything about your privacy, reach Denis directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE}`}>+254 729 055 293</a>, Monday–Saturday, 8am–6pm. See also our <Link to="/terms">Terms &amp; Conditions</Link>.</p></div>
    </section>
  </main><Footer/></div>;
}
