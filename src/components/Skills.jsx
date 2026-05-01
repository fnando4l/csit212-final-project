import {
  Code2,
  Braces,
  Terminal,
  Palette,
  ShoppingBag,
  Megaphone,
  GitBranch,
  Cloud,
  Plug,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-400" },
  { name: "Python", icon: Terminal, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
  { name: "Shopify", icon: ShoppingBag, color: "text-emerald-400" },
  { name: "Meta Ads", icon: Megaphone, color: "text-blue-500" },
  { name: "Git / GitHub", icon: GitBranch, color: "text-orange-400" },
  { name: "Netlify", icon: Cloud, color: "text-cyan-300" },
  { name: "API Integration", icon: Plug, color: "text-purple-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 bg-white border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-medium mb-3">
            Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What I build with.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tools I use day-to-day across software, e-commerce, and growth.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {skills.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className={color} size={22} />
              </div>
              <span className="font-medium text-slate-800">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
