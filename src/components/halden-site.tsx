import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, Mail, MessageCircle, Sprout, HandHeart, Scale, Target, Compass, Check } from "lucide-react";
import { useState, type FormEvent } from "react";

export const EMAIL = "haldenltd@gmail.com";
export const PHONE = "+254729055293";
export const WHATSAPP = "https://wa.me/254729055293?text=Hello%20Halden%20Consulting%20Group";
export const CONSULT_WHATSAPP = "https://wa.me/254729055293?text=Hello%20Halden%20Consulting%20Group%2C%20I%E2%80%99d%20like%20to%20book%20a%20consultation%20with%20Denis%20for%20KES%203%2C500.";

export const services = [
  ["Agriculture & Agribusiness Consulting", "Practical advice for farmers, producer groups and agribusinesses on planning, operations and sustainable growth."],
  ["NGO Strategy, Capacity Building & Compliance", "Strengthen organizational direction, build team capacity and support sound governance and compliance practices."],
  ["Human Rights & Children's Rights Advocacy", "Support rights-based programmes, advocacy planning and efforts to protect and advance children’s rights."],
  ["Project Proposal Writing & Grant Sourcing", "Develop clear, persuasive project proposals and identify grant opportunities aligned with your goals."],
  ["Monitoring & Evaluation (M&E)", "Create practical M&E frameworks, indicators and learning processes to track progress and communicate results."],
  ["Community Development & Training", "Plan inclusive community initiatives and deliver training grounded in local priorities and experience."],
  ["Business Planning for Farmers & SMEs", "Turn business ideas into practical plans, with clear priorities, market considerations and next steps."],
  ["Policy Research & Analysis", "Research and analyze policy questions to inform advocacy, programmes and evidence-based decisions."],
] as const;

export function Brand() {
  return <Link to="/" className="brand" aria-label="Halden Consulting Group home"><span className="brand-mark">HCG<i /></span><span><b>HALDEN CONSULTING</b><small>GROUP LIMITED · KENYA</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Brand /><nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
    <a href="/#about">About</a><a href="/#services">Services</a><a href="/#approach">Our approach</a><a href="/#impact">Impact</a><a href="/#contact">Contact</a>
  </nav><div className="header-actions"><a className="phone-link" href={`tel:${PHONE}`}><Phone size={14} /> +254 729 055 293</a><Link to="/book" className="book-button">PAY &amp; BOOK <ArrowUpRight size={14}/></Link><button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}><Menu /></button></div></div></header>;
}

export function Footer() {
  return <><footer className="footer"><div className="footer-grid"><div><Brand /><p>Independent consulting support for agriculture, organizations and communities across Kenya and East Africa.</p></div><div><h3>GET IN TOUCH</h3><a href={`mailto:${EMAIL}`}><Mail size={14}/>{EMAIL}</a><a href={`tel:${PHONE}`}><Phone size={14}/>+254 729 055 293 · Denis</a></div><div><h3>EXPLORE</h3><div className="footer-links"><a href="/#about">About</a><a href="/#services">Services</a><a href="/#impact">Impact</a><a href="/#contact">Contact</a><Link to="/book">Book a consult</Link></div></div><div><h3>LEGAL</h3><div className="footer-links"><Link to="/terms">Terms &amp; Conditions</Link><Link to="/privacy">Privacy Policy</Link></div></div></div><div className="copyright">Halden Consulting Group Limited | Email: {EMAIL} | Phone: +254729055293 (Denis) | © 2026 | <Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link></div></footer><a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp Denis</a></>;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={light ? "eyebrow light" : "eyebrow"}><span />{children}</div>;
}

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return;
    const data = new FormData(form); const body = [`Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Phone: ${data.get("phone")}`, `Service of interest: ${data.get("service")}`, "", "Message:", data.get("message")].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Consultation enquiry from ${String(data.get("name"))}`)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-title"><div><h3>Send an enquiry</h3><p>All fields are required.</p></div><span>CONTACT FORM</span></div><label>Your name<input required name="name" /></label><div className="form-row"><label>Email address<input required type="email" name="email" /></label><label>Phone number<input required name="phone" /></label></div><label>Service of interest<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(([name]) => <option key={name}>{name}</option>)}</select></label><label>How can we help?<textarea required name="message" rows={5}/></label><button type="submit">OPEN EMAIL DRAFT <ArrowUpRight size={15}/></button><p className="form-note">This form opens your email app with your details filled in. It does not send information to a server.</p></form>;
}

export const serviceIcons = [Sprout, HandHeart, Scale, Target, Compass, HandHeart, Sprout, Scale];
export { ArrowUpRight, Phone, Mail, MessageCircle, Check };