/* Business settings: yahin se poori website update hoti hai */
export const SAFA = {
  name: "Safa Enterprises",
  phone: "919404211613",
  phoneDisplay: "+91 9404211613",
  email: "safacctv7@gmail.com",
  address: "Safa Enterprises, Osmanabad, Maharashtra, India",
  mapQuery: "Safa Enterprises Osmanabad",
  hours: "Mon – Sat: 9:30 AM – 8:30 PM",
};
export const waLink = (msg = "Hello Safa Enterprises, i want to know more about your product services.") =>
  `https://wa.me/${SAFA.phone}?text=${encodeURIComponent(msg)}`;
export const telLink = `tel:+${SAFA.phone}`;
