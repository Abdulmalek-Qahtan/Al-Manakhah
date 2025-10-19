export type SocialLabel =
  | "WhatsApp" | "Instagram" | "Facebook" | "Snapchat" | "Telegram"
  | "Email" | "TikTok" | "X" | "YouTube" | "Website" | "Phone";

export type Social = { label: SocialLabel; href: string; };
export type ProductCard = { title: string; image: string; caption?: string };

export const site = {
  brand: {
    name: "المناخة",
    tagline: "وجهتك الأولى للعبايات الراقية والأقمشة الفاخرة",
    logoAlt: "شعار المناخة",
  },
  cta: { label: "تواصل الآن", href: "https://wa.me/966549097922?src=qr" },
  social: [
    { label: "WhatsApp",  href: "https://wa.me/966549097922?src=qr" },
    { label: "Instagram", href: "https://www.instagram.com/mznlbdny?igsh=MTZzemFlbW42c2Zyaw%3D%3D&utm_source=qr" },
    { label: "Facebook",  href: "https://www.facebook.com/share/17cTKNcmSi/?mibextid=wwXIfr" },
    { label: "Snapchat",  href: "https://www.snapchat.com/add/i5x_hs?src=QR_CODE" },
    { label: "Telegram",  href: "https://t.me/+966549097922" },
    { label: "Email",     href: "mailto:al.manakhah.fashion@gmail.com" },
  ] as Social[],
  products: [] as ProductCard[],
  location: {
    mapUrl: "https://maps.google.com/?q=...",
    thumb: "/map-thumb.jpg",
    address: "العنوان المختصر",
  },
  seo: {
    title: "المناخة | روابط التواصل",
    description: "كل طرق التواصل في صفحة واحدة.",
  },
};
