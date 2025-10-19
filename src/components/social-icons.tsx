import {
  Mail, Phone, Globe, Instagram, Facebook, Youtube, Twitter, MessageCircle, Ghost,
} from "lucide-react";
import type { SocialLabel } from "@/lib/site";

export function SocialIcon({ label }: { label: SocialLabel }) {
  const cls = "h-7 w-7"; // حجم موحد
  switch (label) {
    case "WhatsApp":  return <MessageCircle className={cls} aria-hidden />;
    case "Instagram": return <Instagram className={cls} aria-hidden />;
    case "Facebook":  return <Facebook className={cls} aria-hidden />;
    case "YouTube":   return <Youtube className={cls} aria-hidden />;
    case "X":         return <Twitter className={cls} aria-hidden />;
    case "Website":   return <Globe className={cls} aria-hidden />;
    case "Email":     return <Mail className={cls} aria-hidden />;
    case "Phone":     return <Phone className={cls} aria-hidden />;
    case "Snapchat":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path fill="currentColor" d="M12 2c3 0 5 2.2 5 5.3 0 2.4.6 3.5 2.2 4.9-.5.8-1.4 1.4-2.4 1.4-.6 0-1 .4-1 .9 0 .9 1.3 1.4 2.2 1.6-.7 1.2-2.2 1.7-3.6 1.9-.4 1.1-1.6 2-2.9 2s-2.5-.9-2.9-2c-1.4-.2-2.9-.7-3.6-1.9.9-.2 2.2-.7 2.2-1.6 0-.5-.4-.9-1-.9-1 0-1.9-.6-2.4-1.4C6.4 10.8 7 9.7 7 7.3 7 4.2 9 2 12 2z"/>
        </svg>
      );
    case "Telegram":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path fill="currentColor" d="M9.9 14.7l-.4 5.2c.6 0 .9-.2 1.2-.5l2.9-2.8 5.9 4.3c1.1.6 1.9.3 2.2-1l4-18.7c.4-1.7-.6-2.4-1.7-2L1.8 9.9c-1.6.6-1.6 1.5-.3 1.9l5.7 1.8L19.3 6c.7-.4 1.3-.2.8.2"/>
        </svg>
      );
    default: return <Ghost className={cls} aria-hidden />;
  }
}
