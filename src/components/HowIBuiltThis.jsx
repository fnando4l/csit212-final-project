import { Sparkles, Terminal as TerminalIcon } from "lucide-react";

const prompts = [
  {
    n: "01",
    prompt:
      "Build me a personal portfolio website for my CSIT 212 final project. Use React, Vite, and Tailwind CSS, and make it modern and polished.",
    explanation:
      "This was the kickoff prompt. The result was a fresh React + Vite project scaffolded with Tailwind CSS configured, an organized component folder, and the overall design direction (dark hero, animated gradients, glassmorphism cards).",
  },
  {
    n: "02",
    prompt:
      "Add a hero section with my name, a tagline, and a cool animated gradient background.",
    explanation:
      "Generated the hero with a multi-color animated gradient, floating blob elements, the name title in a gradient text treatment, and call-to-action buttons. Smooth fade-up animations on load.",
  },
  {
    n: "03",
    prompt:
      "Build out a Projects section showcasing my four healthcare apps — HIPAA Shield, MedSort AI, ShiftRx, and CareAlert — each with a description, GitHub link, and live demo link.",
    explanation:
      "Created project cards with hover lift animations, gradient header tiles using Lucide icons, tag chips for the tech stack, and dual links (Live demo + Code) to Netlify and GitHub for each app.",
  },
  {
    n: "04",
    prompt:
      "Add an About Me section, a Skills grid, and a Sikavia section about my e-commerce brand.",
    explanation:
      "Filled out the long-form sections — bio, location, interests, the skills grid in a light theme for contrast, and a dedicated rose-tinted Sikavia block introducing the DTC shapewear brand.",
  },
  {
    n: "05",
    prompt:
      "Add a 'How I Built This' page showing the prompts I used. This is required by the assignment.",
    explanation:
      "This section. It documents the prompts that produced the site — a transparency requirement from the assignment so the instructor can see how AI-assisted development worked end-to-end.",
  },
  {
    n: "06",
    prompt:
      "Run npm run build, push the code to GitHub at github.com/fnando4l/csit212-final-project, then deploy it to Netlify.",
    explanation:
      "Production build verified, repository created with the GitHub CLI, and the dist folder shipped to Netlify with `netlify deploy --prod`. The site you're reading right now is the deployed result.",
  },
];

export default function HowIBuiltThis() {
  return (
    <section
      id="how-i-built-this"
      className="relative py-24 md:py-32 px-6 bg-slate-950 border-b border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <Sparkles size={14} />
            Assignment Requirement
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            How I Built <span className="text-gradient">This Site</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            CSIT 212 requires showing the prompts behind AI-assisted work. Below
            are the prompts I used to build this portfolio, in order, with a
            short note on what each one produced.
          </p>
        </div>

        <ol className="space-y-5">
          {prompts.map(({ n, prompt, explanation }) => (
            <li
              key={n}
              className="glass rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-display font-bold text-white shadow-lg shadow-purple-500/20">
                  {n}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="bg-slate-900/60 border border-white/5 rounded-lg p-4 mb-4 font-mono text-sm text-slate-200 flex gap-3">
                    <TerminalIcon
                      className="text-purple-400 shrink-0 mt-0.5"
                      size={16}
                    />
                    <span className="break-words">"{prompt}"</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[15px]">
                    <span className="text-purple-300 font-medium">Result:</span>{" "}
                    {explanation}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-center text-slate-500 text-sm mt-12 italic">
          The full source code is open at{" "}
          <a
            href="https://github.com/fnando4l/csit212-final-project"
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            github.com/fnando4l/csit212-final-project
          </a>
          .
        </p>
      </div>
    </section>
  );
}
