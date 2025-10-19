import "./globals.css";
import CursorOverlay from "@/components/cursor-overlay";
import { NavBar } from "@/components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="antialiased md:cursor-none">
        <CursorOverlay />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
