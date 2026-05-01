import { MapPin, GraduationCap, Heart, Trophy } from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    title: "IT Student",
    body: "Studying Information Technology with a focus on software engineering and applied computing.",
  },
  {
    icon: MapPin,
    title: "East Orange, NJ",
    body: "Based in New Jersey — building products that ship, not just classroom assignments.",
  },
  {
    icon: Heart,
    title: "Healthcare Tech",
    body: "Passionate about safer, smarter clinical software. Most of my side projects target healthcare workflows.",
  },
  {
    icon: Trophy,
    title: "Soccer Player",
    body: "On the field as often as I'm at the keyboard. Team-first, everywhere I show up.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-950 py-24 md:py-32 px-6 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-3">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Building useful things,{" "}
            <span className="text-gradient">one project at a time.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm Fernand — an IT student from East Orange, New Jersey. I split
              my time between coursework, shipping side projects, and running my
              e-commerce brand.
            </p>
            <p>
              My focus is on{" "}
              <span className="text-white font-medium">healthcare technology</span>,
              <span className="text-white font-medium"> e-commerce</span>, and
              <span className="text-white font-medium"> software development</span>
              . I like problems where the work has real consequences — patient
              safety, clinical workflows, customers who actually buy what you
              build.
            </p>
            <p>
              When I'm not coding, you'll probably find me on a soccer pitch.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-1">
                  Currently
                </p>
                <p className="text-white text-lg">CSIT 212 · Final Project</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-1">
                  Stack of choice
                </p>
                <p className="text-white text-lg">React · Vite · Tailwind</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-1">
                  Hosting
                </p>
                <p className="text-white text-lg">Netlify · GitHub</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400 mb-1">
                  Side hustle
                </p>
                <p className="text-white text-lg">Sikavia — DTC shapewear</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass card-hover rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
                <Icon className="text-purple-300" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-1.5">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
