import { useEffect, useMemo, useState } from "react";
import { CtaBand, LABEL, PageTop } from "../components/Shared";
import { PinIcon, ClockIcon } from "../components/Icons";
import { PROJECTS, PROJECT_TYPES } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const list = useMemo(() => PROJECTS.filter((p) => filter === "all" || p.type === filter), [filter]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main>
      <PageTop title="Our projects & work">A selection of CCTV, electrical and lighting projects completed by Safa Enterprises for homes, shops, offices, schools and factories.</PageTop>
      <div className="filterbar"><div className="wrap fb-in">
        <div className="filter">
          {PROJECT_TYPES.map((c) => <button key={c.id} className={filter === c.id ? "on" : ""} onClick={() => setFilter(c.id)}>{c.label}</button>)}
        </div>
        <span className="count" style={{ margin: 0 }}>{list.length} projects</span>
      </div></div>

      <section className="sec" style={{ paddingTop: "2rem" }}><div className="wrap">
        <div className="proj-grid">
          {list.map((p) => (
            <article className="proj" key={p.title}>
              <button className="proj-img" onClick={() => setOpen(p)} aria-label={`View ${p.title}`}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="tag">{LABEL[p.type]}</span>
              </button>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <div className="proj-meta"><span><PinIcon />{p.location}</span><span><ClockIcon />{p.year}</span></div>
                <p>{p.desc}</p>
                <div className="proj-scope">{p.scope}</div>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <div className="lb-in" onClick={(e) => e.stopPropagation()}>
            <button className="lb-x" onClick={() => setOpen(null)} aria-label="Close">×</button>
            <img src={open.img} alt={open.title} />
            <div className="lb-cap"><h3>{open.title}</h3><p>{open.location} · {open.year} — {open.scope}</p></div>
          </div>
        </div>
      )}

      <CtaBand title="Want a similar project done?" text="Share your requirement and our team will visit your site and give you a free quotation." />
    </main>
  );
}
