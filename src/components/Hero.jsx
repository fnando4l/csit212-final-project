import { ArrowDown, Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg animate-gradient-shift"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/30 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.6)_100%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="inline-block mb-6 px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-purple-200 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm animate-fade-up">
          Welcome to my portfolio
        </p>
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight animate-fade-up [animation-delay:0.1s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          Fernand <span className="text-gradient">Gbodjo</span>
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-up [animation-delay:0.25s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          IT Student <span className="text-purple-400 mx-2">·</span> Software Developer{" "}
          <span className="text-purple-400 mx-2">·</span> Entrepreneur
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:0.4s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white font-medium hover:bg-white/10 transition-all"
          >
            Contact Me
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-5 text-slate-400 animate-fade-up [animation-delay:0.55s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <a
            href="https://github.com/fnando4l"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="mailto:fernandgbodjo147@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}
