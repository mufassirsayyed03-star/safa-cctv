import { Link } from "react-router-dom";
import { waLink, telLink } from "../config";
import { PhoneIcon, WaIcon, ArrowIcon } from "../components/Icons";
import { Counter, CtaBand, ProductCard, SecHead } from "../components/Shared";
import { PRODUCTS } from "../data/products";

const STATS = [[5, "+", "Years of experience"], [1500, "+", "Projects completed"], [800, "+", "CCTV systems installed"], [98, "%", "Customer satisfaction"]];
const TICKS = ["Free site visit & quotation", "Genuine products with warranty", "Skilled, verified technicians", "Neat cabling and clean finish", "Fast after-sales support", "Fair and transparent pricing"];
const SERVICES = [
  ["CCTV installation", "Site survey, camera placement, cabling, DVR/NVR setup and mobile live view configuration.", <><rect x="5" y="14" width="26" height="14" rx="4" /><circle cx="18" cy="21" r="4" /><path d="M31 18l11-5v16l-11-5zM14 28l-4 10h14" /></>],
  ["Electrical wiring", "New wiring, rewiring, DB panels, earthing and load balancing for homes, shops and industries.", <path d="M26 4L11 27h11l-3 17 18-25H26z" />],
  ["Light fitting", "LED downlights, profile lights, chandeliers, facade and garden lighting installed with perfect finish.", <path d="M24 6a12 12 0 0 0-6 22v6h12v-6a12 12 0 0 0-6-22zM19 40h10M21 44h6" />],
  ["Access & alarm systems", "Biometric locks, video door phones, intrusion alarms and attendance systems.", <><rect x="8" y="22" width="32" height="20" rx="3" /><path d="M16 22v-7a8 8 0 0 1 16 0v7M24 30v6" /></>],
  ["Repair & AMC", "Fault finding, camera repair, short-circuit fixing and yearly maintenance contracts.", <path d="M30 8a10 10 0 0 0-9 14L6 37l5 5 15-15a10 10 0 0 0 14-9l-6 6-5-1-1-5z" />],
  ["Product showroom", "Switches, wires, MCBs, fans, lights, cameras and accessories — all available at our counter.", <><path d="M6 10h6l5 20h20l4-14H14" /><circle cx="19" cy="38" r="3" /><circle cx="35" cy="38" r="3" /></>],
];
const WORK = [
  ["work-1", "Complete CCTV setup", "Commercial building"], ["work-2", "Home wiring", "Residential"], ["work-3", "Decorative lighting", "Showroom"],
  ["work-4", "DB panel & earthing", "Factory"], ["work-5", "Outdoor cameras", "Society gate"], ["work-6", "LED panel lighting", "Office interior"],
];
const WHY = [
  ["Genuine products", "Branded, warranty-backed material only. No duplicate or low-grade items."],
  ["Experienced team", "Technicians trained in safe wiring and modern surveillance systems."],
  ["Clean workmanship", "Concealed cabling, labelled panels and a tidy site when we leave."],
  ["Support that stays", "Call or WhatsApp us anytime after installation for quick help."],
];
const STEPS = [["Enquiry", "Call or WhatsApp us with your requirement."], ["Site visit", "We inspect, measure and suggest the best solution."], ["Quotation", "Clear, itemised pricing with no hidden charges."], ["Installation", "Work completed on time, tested and handed over."]];
const REVIEWS = [
  ["CCTV cameras were installed in one day and the picture quality is excellent. I can watch my shop from my phone.", "Shop owner"],
  ["Complete house wiring and light fitting done neatly. Very polite staff and fair price.", "Home owner"],
  ["Best place for good quality lights and switches. They guide you on the right product for the budget.", "Interior designer"],
];
const FAQ = [
  ["Do you provide a free site visit and quotation?", "Yes. Call or WhatsApp us, share your location and requirement, and our team will visit, measure and give you a clear quotation."],
  ["How long does CCTV installation take?", "A typical home or shop setup is completed in one day. Larger buildings and factories depend on the number of cameras and cable length."],
  ["Do the products come with warranty?", "All branded products carry the manufacturer's warranty. We also help with claims and replacement support."],
  ["Can I watch my cameras on my mobile?", "Yes. We configure the DVR/NVR or IP cameras so you can view live and recorded footage on your phone from anywhere."],
  ["Do you offer repair and yearly maintenance?", "Yes. We repair faults in wiring, cameras and lighting, and offer yearly maintenance (AMC) plans for homes and businesses."],
];
const FEATURED = ["HD Dome CCTV Camera (2MP / 5MP)", "Modular Switches & Sockets", "LED Panel & COB Downlights", "DVR / NVR Recorder (4 / 8 / 16 CH)"].map((n) => PRODUCTS.find((p) => p.name === n)).filter(Boolean);

export default function Home() {
  return (
    <main>
      <section className="hero"><div className="wrap hero-in">
        <div>
         
          <h1>Safe homes. Bright spaces. <em>Wired right.</em></h1>
          <p className="lead">Safa Enterprises installs CCTV security systems, completes electrical wiring and fits lighting for homes, shops, offices and factories — and sells every product you need from one counter.</p>
          <div className="cta-row">
            <a className="btn btn-g" href={waLink("Hello Safa Enterprises, mujhe free quote chahiye.")} target="_blank" rel="noopener noreferrer"><WaIcon />Get free quote</a>
            <a className="btn btn-o" href={telLink}><PhoneIcon />Call now</a>
          </div>
          <div className="trust"><span>Free site visit</span><span>Genuine products</span><span>Warranty support</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hv hv1"><img src="/images/products/dome-camera.svg" alt="" /></div>
          <div className="hv hv2"><img src="/images/products/led-bulb.svg" alt="" /></div>
          <div className="hv hv3"><img src="/images/products/modular-switch.svg" alt="" /></div>
          <div className="badge b1"><b>24x7</b><span>Surveillance<small>Live on your phone</small></span></div>
          <div className="badge b2"><b>5+</b><span>Years<small>Trusted service</small></span></div>
        </div>
      </div></section>

      <section className="stats"><div className="wrap">
        {STATS.map(([n, s, l]) => <div key={l}><Counter to={n} suffix={s} /><span>{l}</span></div>)}
      </div></section>

      <section className="sec" id="about"><div className="wrap about">
        <div className="about-img">
          <img src="/images/about.svg" alt="Safa Enterprises CCTV installation" />
          <div className="badge"><b>5+</b><span>Years of<small>experience</small></span></div>
        </div>
        <div>
          <span className="eyebrow">About us</span>
          <h2>Your local partner for electrical and security needs</h2>
          <p>Safa Enterprises is a trusted electrical, CCTV security and lighting shop. From a single bulb to a complete building installation, we focus on safe wiring, tidy finishing and products that last.</p>
          <p>Our technicians visit your site, suggest the right solution for your budget, install it neatly and stay available for support after the job is done.</p>
          <ul className="ticks">{TICKS.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div></section>

      <section className="sec alt" id="services"><div className="wrap">
        <SecHead eyebrow="What we do" title="Our services">Everything for power, light and protection of your property, handled by one team.</SecHead>
        <div className="svc-grid snap">
          {SERVICES.map(([t, d, icon], i) => (
            <div className="svc" key={t} ><div className="ic"><svg viewBox="0 0 48 48" aria-hidden="true">{icon}</svg></div><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="sec-row">
          <SecHead eyebrow="Showroom" title="Popular products">Top selling CCTV, electrical and lighting products. Call or WhatsApp for today's price.</SecHead>
          <Link className="btn btn-line" to="/products">View all products <ArrowIcon /></Link>
        </div>
        <div className="feat snap">{FEATURED.map((p) => <ProductCard key={p.name} p={p} />)}</div>
      </div></section>

      <section className="sec dark"><div className="wrap">
        <SecHead eyebrow="Why Safa" title="Why customers choose Safa Enterprises" />
        <div className="why">{WHY.map(([t, d], i) => <div key={t}><i>{i + 1}</i><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>

      <section className="sec" id="work"><div className="wrap">
        <SecHead eyebrow="Portfolio" title="My work">A look at recent CCTV, electrical and lighting projects completed by our team.</SecHead>
        <div className="work snap">
          {WORK.map(([img, t, s]) => (
            <figure key={img}><img src={`/images/${img}.svg`} alt={t} loading="lazy" /><figcaption>{t}<small>{s}</small></figcaption></figure>
          ))}
        </div>
      </div></section>

      <section className="sec alt"><div className="wrap">
        <SecHead eyebrow="Process" title="How we work" />
        <div className="steps">{STEPS.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>


      <section className="sec alt"><div className="wrap">
        <SecHead eyebrow="FAQ" title="Common questions" />
        <div className="faq">{FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>

      <CtaBand title="Need CCTV, wiring or lights? Talk to us today." text="Share your requirement and get a free quotation. We usually reply within minutes." showProducts />
    </main>
  );
}
