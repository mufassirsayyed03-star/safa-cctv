import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SAFA, waLink, telLink } from "../config";
import { PhoneIcon, WaIcon, MailIcon, ClockIcon } from "./Icons";

const NAV = [["/", "Home"], ["/products", "Products"], ["/contact", "Contact"]];

export function Brand({ small = true }) {
  return (
    <Link className="brand" to="/" aria-label="Safa Enterprises home">
      <span className="brand-mark">S</span>
      <span className="brand-t"><span><b>Safa</b> Enterprises</span>{small && <small>Electrical · CCTV · Lighting</small>}</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="topbar"><div className="wrap">
        <span><ClockIcon />{SAFA.hours}</span>
        <span className="tb-right">
          <a href={`mailto:${SAFA.email}`}><MailIcon />{SAFA.email}</a>
          <a href={telLink}><PhoneIcon />{SAFA.phoneDisplay}</a>
        </span>
      </div></div>
      <header className="nav"><div className="wrap nav-in">
        <Brand />
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
        <nav className={`menu ${open ? "open" : ""}`}>
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end className={({ isActive }) => (isActive ? "on" : "")}>{label}</NavLink>
          ))}
          <a className="btn btn-y" href={waLink()} target="_blank" rel="noopener noreferrer"><WaIcon />WhatsApp</a>
        </nav>
      </div></header>
    </>
  );
}
