import { SAFA, waLink, telLink } from "../config";
import { PhoneIcon, WaIcon, MailIcon, PinIcon, ClockIcon } from "../components/Icons";
import { PageTop } from "../components/Shared";

export default function Contact() {
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=10&data=${encodeURIComponent("https://wa.me/" + SAFA.phone)}`;
  const map = `https://www.google.com/maps?q=${encodeURIComponent(SAFA.mapQuery)}&output=embed`;
  return (
    <main>
      <PageTop title="Contact us">Call, chat or visit our shop. We're happy to help with quotations, product details and service visits.</PageTop>
      <div className="wrap quick">
        <a className="qk" href={telLink}><span className="ic"><PhoneIcon /></span><span><small>Call us</small><b>{SAFA.phoneDisplay}</b></span></a>
        <a className="qk w" href={waLink()} target="_blank" rel="noopener noreferrer"><span className="ic"><WaIcon /></span><span><small>WhatsApp</small><b>Chat with us</b></span></a>
        <a className="qk" href={`mailto:${SAFA.email}`}><span className="ic"><MailIcon /></span><span><small>Email</small><b>{SAFA.email}</b></span></a>
      </div>
      <section className="sec">
        <div className="wrap c-grid">
          <div className="c-list">
            <div className="c-item"><span className="ci"><PinIcon /></span><div><h4>Shop address</h4><p>{SAFA.address}</p></div></div>
            <div className="c-item"><span className="ci"><ClockIcon /></span><div><h4>Working hours</h4><p>{SAFA.hours}</p></div></div>
            <div className="c-item"><span className="ci"><PhoneIcon /></span><div><h4>Site visit & quotation</h4><p>Call or WhatsApp us your location and requirement. Our team will visit and share a clear quotation.</p></div></div>
          </div>
          <div className="qr-box">
            <h3>Scan to chat on WhatsApp</h3>
            <p>Open your phone camera or WhatsApp and scan this QR code.</p>
            <img src={qr} alt="WhatsApp QR code for Safa Enterprises" width="240" height="240" />
            <div className="cta-row">
              <a className="btn btn-g" href={waLink()} target="_blank" rel="noopener noreferrer"><WaIcon />Chat now</a>
              <a className="btn btn-y" href={telLink}><PhoneIcon />Call now</a>
            </div>
          </div>
        </div>
        <div className="wrap"><div className="map"><iframe title="Safa Enterprises location" src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
      </section>
    </main>
  );
}
