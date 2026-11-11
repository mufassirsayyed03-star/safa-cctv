import { Link } from "react-router-dom";
import { SAFA, waLink, telLink } from "../config";
import { PhoneIcon, WaIcon, BagIcon } from "./Icons";
import { Brand } from "./Header";

export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="wrap foot-grid">
          <div>
            <Brand small={false} />
            <p>Trusted electrical contractors, CCTV security installers and lighting showroom. Quality products, clean work, honest pricing.</p>
          </div>
          <div><h4>Pages</h4><Link to="/">Home</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link></div>
          <div><h4>Services</h4>{["CCTV Installation", "House & Shop Wiring", "Light Fitting", "Repair & AMC"].map((s) => <Link key={s} to="/contact">{s}</Link>)}</div>
          <div><h4>Contact</h4><p>{SAFA.address}</p><a href={telLink}>{SAFA.phoneDisplay}</a><a href={`mailto:${SAFA.email}`}>{SAFA.email}</a></div>
        </div>
        <div className="wrap copy">© {new Date().getFullYear()} Safa Enterprises. All rights reserved.</div>
      </footer>
      <nav className="mbar" aria-label="Quick actions">
        <a className="call" href={telLink}><PhoneIcon />Call</a>
        <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WaIcon />WhatsApp</a>
        <Link to="/products"><BagIcon />Products</Link>
      </nav>
      <div className="float">
        <a className="f-call" href={telLink} aria-label="Call now"><PhoneIcon /></a>
        <a className="f-wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WaIcon /></a>
      </div>
    </>
  );
}
