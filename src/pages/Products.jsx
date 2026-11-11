import { useEffect, useMemo, useState } from "react";
import { waLink, telLink } from "../config";
import { CtaBand, LABEL, PageTop, ProductCard, ProductImage } from "../components/Shared";
import { PhoneIcon, SearchIcon, WaIcon } from "../components/Icons";
import { CATEGORIES, PRODUCTS } from "../data/products";

const SORTS = [["featured", "Featured"], ["az", "Name: A to Z"], ["za", "Name: Z to A"], ["popular", "Popular first"]];

export default function Products() {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [open, setOpen] = useState(null);

  const counts = useMemo(() => {
    const c = { all: PRODUCTS.length };
    PRODUCTS.forEach((p) => { c[p.cat] = (c[p.cat] || 0) + 1; });
    return c;
  }, []);

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    const r = PRODUCTS.filter((p) => (filter === "all" || p.cat === filter) && (!t || (p.name + " " + p.desc).toLowerCase().includes(t)));
    if (sort === "az") r.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") r.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "popular") r.sort((a, b) => (b.badge === "Popular") - (a.badge === "Popular"));
    return r;
  }, [filter, q, sort]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const reset = () => {
    setFilter("all");
    setQ("");
    setSort("featured");
  };

  return (
    <main>
      <PageTop title="Our products">Electrical goods, CCTV security equipment and lighting. Tap Call or WhatsApp on any product for today's price and availability.</PageTop>

      <div className="filterbar"><div className="wrap fb-in">
        <div className="filter">
          {CATEGORIES.map((c) => (
            <button key={c.id} className={filter === c.id ? "on" : ""} onClick={() => setFilter(c.id)}>{c.label} <em>{counts[c.id] || 0}</em></button>
          ))}
        </div>
        <div className="fb-tools">
          <label className="search"><SearchIcon /><input type="search" placeholder="Search products…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search products" /></label>
          <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <div className="vt" role="group" aria-label="View">
            <button className={view === "grid" ? "on" : ""} onClick={() => setView("grid")} aria-label="Grid view" title="Grid view">
              <svg viewBox="0 0 24 24"><path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" /></svg>
            </button>
            <button className={view === "list" ? "on" : ""} onClick={() => setView("list")} aria-label="List view" title="List view">
              <svg viewBox="0 0 24 24"><path d="M3 4h18v4H3zm0 6h18v4H3zm0 6h18v4H3z" /></svg>
            </button>
          </div>
        </div>
      </div></div>

      <section className="sec" style={{ paddingTop: "0.5rem" }}><div className="wrap">
        <p className="count">{list.length} products{q && <> for “{q}”</>}</p>
        {list.length ? (
          <div id="product-grid" className={view}>{list.map((p) => <ProductCard key={p.name} p={p} onOpen={setOpen} />)}</div>
        ) : (
          <div className="empty">
            <p>Koi product nahi mila. Dusra naam try kijiye ya humein WhatsApp kijiye.</p>
            <button className="btn btn-line" onClick={reset}>Reset filters</button>
          </div>
        )}
      </div></section>

      {open && (
        <div className="qv" role="dialog" aria-modal="true" aria-label={open.name} onClick={() => setOpen(null)}>
          <div className="qv-in" onClick={(e) => e.stopPropagation()}>
            <button className="lb-x" onClick={() => setOpen(null)} aria-label="Close">×</button>
            <div className="qv-img"><ProductImage p={open} /></div>
            <div className="qv-body">
              <span className="eyebrow">{LABEL[open.cat]}</span>
              <h2>{open.name}</h2>
              <p className="qv-desc">{open.desc}</p>
              {open.features.length > 0 && <ul className="ticks qv-f">{open.features.map((f) => <li key={f}>{f}</li>)}</ul>}
              <p className="qv-note">Price aur availability ke liye humein call ya WhatsApp kijiye.</p>
              <div className="cta-row">
                <a className="btn btn-g" target="_blank" rel="noopener noreferrer" href={waLink(`Hello Safa Enterprises, mujhe is product ki price aur details chahiye: ${open.name}`)}><WaIcon />WhatsApp</a>
                <a className="btn btn-d" href={telLink}><PhoneIcon />Call now</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <CtaBand title="Can't find what you need?" text="We stock many more brands and sizes. Tell us your requirement and we will arrange it." />
    </main>
  );
}
