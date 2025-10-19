// src/components/social-icons.tsx

import {
  Mail, Phone, Globe, Instagram, Facebook, Youtube, Twitter, Ghost,
} from "lucide-react";
import type { SocialLabel } from "@/lib/site";

export function SocialIcon({ label }: { label: SocialLabel }) {
  const cls = "h-7 w-7"; // حجم موحد

  switch (label) {
    case "WhatsApp":
      // أيقونة واتساب SVG تعمل بشكل ممتاز
      return (
        <svg
          className={cls}
          aria-hidden
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.45 3.48 1.34 5l-1.4 5.13 5.25-1.38c1.45.79 3.08 1.21 4.72 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2M12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.68-8.22 8.22-8.22 4.54 0 8.22 3.68 8.22 8.22 0 4.53-3.68 8.22-8.22 8.22m4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99-.15.17-.3.19-.56.06s-1.06-.39-2.01-1.24c-.75-.66-1.26-1.47-1.4-1.72s-.12-.39.06-.51l.34-.39c.08-.08.12-.17.17-.29s.02-.25 0-.37c-.02-.12-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.5c-.17 0-.45.06-.68.31s-.86.84-.86 2.05c0 1.21.88 2.37 1 2.54s1.75 2.67 4.24 3.73c.59.25 1.05.4 1.41.51.6.2 1.15.16 1.58.1.48-.06 1.47-.6 1.68-1.18s.21-.06.15-1.12z" />
        </svg>
      );
    case "Instagram": return <Instagram className={cls} aria-hidden />;
    case "Facebook":  return <Facebook className={cls} aria-hidden />;
    case "YouTube":   return <Youtube className={cls} aria-hidden />;
    case "X":         return <Twitter className={cls} aria-hidden />;
    case "Website":   return <Globe className={cls} aria-hidden />;
    case "Email":     return <Mail className={cls} aria-hidden />;
    case "Phone":     return <Phone className={cls} aria-hidden />;
    case "Snapchat":
      // <-- التعديل هنا: تم استبدال الـ SVG الخاطئ بأيقونة تعمل
      return <Ghost className={cls} aria-hidden />;
    case "Telegram":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden>
          <path fill="currentColor" d="M9.9 14.7l-.4 5.2c.6 0 .9-.2 1.2-.5l2.9-2.8 5.9 4.3c1.1.6 1.9.3 2.2-1l4-18.7c.4-1.7-.6-2.4-1.7-2L1.8 9.9c-1.6.6-1.6 1.5-.3 1.9l5.7 1.8L19.3 6c.7-.4 1.3-.2.8.2"/>
        </svg>
      );
    default: return <Ghost className={cls} aria-hidden />;
  }
}