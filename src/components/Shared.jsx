import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { waLink, telLink } from "../config";
import { PhoneIcon, WaIcon } from "./Icons";

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) { setN(to); return; }
      const step = Math.max(1, Math.ceil(to / 50));
      let v = 0;
      timer = setInterval(() => {
        v = Math.min(to, v + step);
        setN(v);
        if (v >= to) clearInterval(timer);
      }, 25);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [to]);
  return <b ref={ref}>{n}{suffix}</b>;
}

export const LABEL = { cctv: "CCTV & Security", electrical: "Electrical", lighting: "Lighting" };

export function ProductImage({ p }) {
  const [src, setSrc] = useState(p.photo);
  useEffect(() => {
    setSrc(p.photo);
  }, [p.photo]);
  return <img src={src} alt={p.name} loading="lazy" onError={() => setSrc(p.img)} />;
}

export function ProductCard({ p, onOpen }) {
  return (
    <article className="p-card">
      <div className="p-img">
        {onOpen ? (
          <button className="p-open" onClick={() => onOpen(p)} aria-label={`Quick view: ${p.name}`}><ProductImage p={p} /></button>
        ) : <ProductImage p={p} />}
        <span className="tag">{LABEL[p.cat]}</span>
        {p.badge && <span className="pbadge">{p.badge}</span>}
      </div>
      <div className="p-body">
        <h3>{p.name}</h3><p>{p.desc}</p>
        <div className="p-act">
          <a className="btn btn-d" href={telLink}><PhoneIcon />Call</a>
          <a className="btn btn-g" target="_blank" rel="noopener noreferrer" href={waLink(`Hello Safa Enterprises, mujhe is product ki price aur details chahiye: ${p.name}`)}><WaIcon />WhatsApp</a>
        </div>
      </div>
    </article>
  );
}

export function SecHead({ eyebrow, title, children }) {
  return <div className="sec-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export function CtaBand({ title, text, showProducts = false }) {
  return (
    <section className="sec cta-band"><div className="wrap">
      <h2>{title}</h2><p>{text}</p>
      <div className="cta-row">
        <a className="btn btn-g" href={waLink()} target="_blank" rel="noopener noreferrer"><WaIcon />Chat on WhatsApp</a>
        <a className="btn btn-y" href={telLink}><PhoneIcon />Call now</a>
        {showProducts && <Link className="btn btn-o" to="/products">View products</Link>}
      </div>
    </div></section>
  );
}

export function PageTop({ title, children }) {
  return (
    <section className="page-top"><div className="wrap">
      <div className="crumbs">HOME / {title.toUpperCase()}</div><h1>{title}</h1><p>{children}</p>
    </div></section>
  );
}
