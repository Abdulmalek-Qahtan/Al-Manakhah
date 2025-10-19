export function Footer() {
  return (
    <footer className="relative z-10 mt-12 border-t border-white/10">
      <div className="container mx-auto py-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} المناخة — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
