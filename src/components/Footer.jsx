export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Fernand Gbodjo. Built for CSIT 212.</p>
        <p className="text-slate-600">React · Vite · Tailwind · Netlify</p>
      </div>
    </footer>
  );
}
