import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-slate-950 to-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-3">
          Get in touch
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Let's <span className="text-gradient">build something.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          Open to internships, collaborations on healthcare or e-commerce
          projects, and conversations about software you can actually ship.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:admin@fernixsapp.com"
            className="group glass rounded-2xl p-6 text-left card-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <Mail className="text-purple-300 mb-3" size={24} />
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Email
                </p>
                <p className="text-white font-medium break-all">
                  admin@fernixsapp.com
                </p>
              </div>
              <ArrowUpRight
                className="text-slate-500 group-hover:text-white group-hover:rotate-12 transition-all"
                size={18}
              />
            </div>
          </a>

          <a
            href="https://github.com/fnando4l"
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl p-6 text-left card-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <GithubIcon className="text-purple-300 mb-3" size={24} />
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  GitHub
                </p>
                <p className="text-white font-medium">github.com/fnando4l</p>
              </div>
              <ArrowUpRight
                className="text-slate-500 group-hover:text-white group-hover:rotate-12 transition-all"
                size={18}
              />
            </div>
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-slate-400 text-sm">
          <MapPin size={15} />
          East Orange, New Jersey
        </div>
      </div>
    </section>
  );
}
