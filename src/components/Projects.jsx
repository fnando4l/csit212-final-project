import { ExternalLink, Shield, FileSearch, CalendarClock, BellRing } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";

const projects = [
  {
    title: "HIPAA Shield",
    tagline: "PHI Violation Scanner",
    description:
      "Scans documents and code for protected health information leaks. Built for clinics and devs who need to stay compliant without manually combing through every file.",
    live: "https://hipaa-shield.netlify.app",
    repo: "https://github.com/fnando4l/hipaa-shield",
    tags: ["React", "Compliance", "PHI Detection"],
    icon: Shield,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "MedSort AI",
    tagline: "AI Medical Document Classifier",
    description:
      "Drop in a stack of medical documents and MedSort sorts them by type — labs, referrals, imaging, claims — using AI classification. Less filing, more practicing.",
    live: "https://medsort-ai-app.netlify.app",
    repo: "https://github.com/fnando4l/medsort-ai",
    tags: ["AI", "Classification", "Healthcare"],
    icon: FileSearch,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "ShiftRx",
    tagline: "Clinical Staff Scheduling",
    description:
      "Drag-and-drop scheduling for clinical teams. Tracks coverage, shift swaps, and staffing minimums so charge nurses spend less time juggling spreadsheets.",
    live: "https://shiftrx.netlify.app",
    repo: "https://github.com/fnando4l/shiftrx",
    tags: ["Scheduling", "Operations", "Clinics"],
    icon: CalendarClock,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "CareAlert",
    tagline: "Appointment Reminders",
    description:
      "Patient appointment reminder app — sends scheduled nudges, tracks confirmations, and reduces no-shows. Designed to integrate cleanly with existing front-desk workflows.",
    live: "https://care-alert.netlify.app",
    repo: "https://github.com/fnando4l/care-alert",
    tags: ["Notifications", "Patients", "UX"],
    icon: BellRing,
    gradient: "from-orange-500 to-rose-600",
  },
];

function ProjectCard({ p }) {
  const Icon = p.icon;
  return (
    <article className="glass card-hover rounded-2xl overflow-hidden flex flex-col">
      <div
        className={`relative h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
        <Icon size={64} className="text-white relative z-10 drop-shadow-xl" strokeWidth={1.5} />
        <div className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
          Live
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1">
          <h3 className="font-display text-xl font-bold text-white mb-1">
            {p.title}
          </h3>
          <p className="text-purple-300 text-sm font-medium mb-3">{p.tagline}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white hover:text-purple-300 transition-colors"
          >
            <ExternalLink size={15} />
            Live demo
          </a>
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
          >
            <GithubIcon size={15} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-3">
            Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Healthcare apps,{" "}
            <span className="text-gradient">live in production.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Four shipped products solving real problems in clinical workflows —
            each one deployed and accessible right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
