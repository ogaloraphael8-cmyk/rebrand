import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer, Eyebrow, PHONE, EMAIL, WHATSAPP, Check, Phone, Mail, MessageCircle, ArrowUpRight } from "../components/halden-site";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [
    { title: "Book a Consultation | Halden Consulting Group" },
    { name: "description", content: "Choose a consultation package with Halden Consulting Group in Kenya." },
    { property: "og:title", content: "Book a Consultation | Halden Consulting Group" },
    { property: "og:description", content: "Choose a consultation package with Halden Consulting Group in Kenya." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BookingPage,
});

const packages = [
  { name: "Starter Consult", copy: "A focused strategy conversation to clarify the challenge and identify practical next steps.", detail: "30 min strategy call with Denis", price: "KES 3,500" },
  { name: "Standard Consult", copy: "A deeper review of your needs, with considered recommendations you can put to work.", detail: "In-depth review + written advice", price: "KES 12,500" },
  { name: "Premium Proposal Package", copy: "A complete grant proposal package, shaped around your project and intended outcomes.", detail: "Full grant proposal + M&E framework", price: "KES 75,000" },
];

function BookingPage() {
  const [selected, setSelected] = useState(0); const pack = packages[selected];
  if (!pack) return null;
  return <div className="site-grain"><Header/><main><section className="book-hero"><div className="book-hero-inner"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><b>Book a consultation</b></div><Eyebrow light>Make a start</Eyebrow><div className="book-intro"><h1>Good advice starts<br/>with a conversation.</h1><p>Choose the level of support that fits your next step. For questions about booking, contact Denis directly at <a href={`tel:${PHONE}`}>+254 729 055 293</a>.</p></div></div></section>
  <section className="packages-section"><div className="packages-grid"><div><Eyebrow>Consultation packages</Eyebrow><div className="package-heading"><h2>Choose your support</h2><p>Select one package to continue</p></div><div className="package-list">{packages.map((item, i) => <button key={item.name} className={selected === i ? "package-card selected" : "package-card"} onClick={() => setSelected(i)}><span className="radio">{selected === i && <Check size={16}/>}</span><span className="package-copy"><small>0{i + 1} / ADVISORY</small><strong>{item.name}</strong><span>{item.copy}</span><b>{item.detail}</b></span><em>{item.price}</em></button>)}</div><div className="payment-methods"><b>PAYMENT METHODS</b><span className="mpesa">M-Pesa</span><span className="airtel">Airtel Money</span><span className="visa">VISA</span><span>Mastercard</span></div><p className="payment-note">Payment methods are shown for information. Payment is handled through the configured IntaSend checkout page; no payment integration is embedded here.</p></div>
  <aside className="summary"><Eyebrow>Booking summary</Eyebrow><h2>{pack.name}</h2><hr/><div><span>Package price</span><strong>{pack.price}</strong></div><p>{pack.detail}</p><button>PAY NOW <ArrowUpRight size={14}/></button><small>ⓘ &nbsp; Checkout is not set up yet. Add this package’s IntaSend URL in <b>src/paymentConfig.ts</b> to enable payment.</small><hr/><h4>NEED HELP BOOKING?</h4><a href={WHATSAPP}><MessageCircle size={16}/>Message Denis on WhatsApp</a></aside></div></section>
  <section className="booking-help"><div><h3>Have a question before you book?</h3><p>Speak directly with Denis, Monday–Saturday, 8am–6pm.</p></div><div><a href={`tel:${PHONE}`}><Phone size={15}/>Call +254 729 055 293</a><a href={`mailto:${EMAIL}`}><Mail size={15}/>Email us</a></div></section></main><Footer/></div>;
}