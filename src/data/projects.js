/* Projects: yahan apne asli projects likhein.
   img: "placeholder.svg" (public/images/projects/ me file) ya poora path jaise "/images/projects/shop-cctv.jpg"
   type: "cctv" | "electrical" | "lighting" */
const I = (n) => (n.startsWith("/") ? n : `/images/projects/${n}`);
export const PROJECT_TYPES = [
    { id: "all", label: "All" },
    { id: "cctv", label: "CCTV & Security" },
    { id: "electrical", label: "Electrical" },
    { id: "lighting", label: "Lighting" },
];
export const PROJECTS = [
    { type: "cctv", img: "placeholder.svg", title: "Shopping Complex CCTV Setup", location: "Nashik", year: "2025", scope: "16 cameras · NVR · Mobile view", desc: "Complete surveillance for parking, entrances and corridors with 24x7 recording and remote viewing for the owner." },
    { type: "electrical", img: "placeholder.svg", title: "Residential Bungalow Wiring", location: "Nashik", year: "2025", scope: "Full wiring · DB panel · Earthing", desc: "Concealed copper wiring, modular switches and a safe distribution board with proper earthing and load balancing." },
    { type: "lighting", img: "placeholder.svg", title: "Showroom Decorative Lighting", location: "Nashik", year: "2024", scope: "Profile lights · Spot lights", desc: "Layered LED profile and spot lighting that highlights products and gives the showroom a premium look." },
    { type: "cctv", img: "placeholder.svg", title: "Society Gate & Compound Security", location: "Nashik", year: "2024", scope: "8 outdoor cameras · Night vision", desc: "Weatherproof bullet cameras at gates and boundary with night vision and a secure central recorder." },
    { type: "electrical", img: "placeholder.svg", title: "Factory Power & Panel Work", location: "Nashik MIDC", year: "2024", scope: "MCC panel · Cabling · Earthing", desc: "Industrial cabling, panel upgrade and earthing to keep machines running safely with minimum downtime." },
    { type: "lighting", img: "placeholder.svg", title: "Office LED Panel Lighting", location: "Nashik", year: "2023", scope: "LED panels · Downlights", desc: "Energy-saving flicker-free lighting across open workspace, cabins and reception." },
    { type: "cctv", img: "placeholder.svg", title: "School Campus Surveillance", location: "Nashik", year: "2023", scope: "24 cameras · Central monitoring", desc: "Classroom corridors, playground and entry points covered with a central monitoring setup." },
    { type: "electrical", img: "placeholder.svg", title: "Restaurant Electrical Fit-out", location: "Nashik", year: "2023", scope: "Wiring · Fans · Power points", desc: "Complete electrical fit-out for kitchen and dining area with safe load planning." },
    { type: "lighting", img: "placeholder.svg", title: "Garden & Facade Lighting", location: "Nashik", year: "2022", scope: "Flood lights · Garden lamps", desc: "Outdoor facade and landscape lighting that makes the property stand out after dark." },
].map((p) => ({ ...p, img: I(p.img) }));
