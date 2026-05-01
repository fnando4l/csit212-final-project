import { ExternalLink, ShoppingBag, Globe2, TrendingUp } from "lucide-react";

export default function Sikavia() {
  return (
    <section
      id="sikavia"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-rose-950 via-slate-950 to-slate-950 border-b border-white/5"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-300 font-medium mb-3">
              Side hustle
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Sikavia
            </h2>
            <p className="text-rose-200/80 text-lg mb-6">
              Authentic Colombian shapewear, direct-to-consumer.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              I run Sikavia as a DTC e-commerce brand specializing in Colombian
              fajas. Sourcing partners in Colombia, Shopify storefront, paid
              acquisition through Meta Ads — the full stack of running a real
              online business while I'm in school.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The site, the ads, the supplier relationships, the fulfillment —
              all me. It's where I learned that shipping software and shipping
              product orders have more in common than you'd think.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://sikavia.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-rose-500/30"
              >
                Visit sikavia.com
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 card-hover">
                <ShoppingBag className="text-rose-300 mb-3" size={28} />
                <p className="text-3xl font-display font-bold text-white">DTC</p>
                <p className="text-slate-400 text-sm mt-1">Shopify storefront</p>
              </div>
              <div className="glass rounded-2xl p-6 card-hover mt-8">
                <Globe2 className="text-pink-300 mb-3" size={28} />
                <p className="text-3xl font-display font-bold text-white">CO → US</p>
                <p className="text-slate-400 text-sm mt-1">Sourced in Colombia</p>
              </div>
              <div className="glass rounded-2xl p-6 card-hover">
                <TrendingUp className="text-rose-300 mb-3" size={28} />
                <p className="text-3xl font-display font-bold text-white">Meta</p>
                <p className="text-slate-400 text-sm mt-1">Paid acquisition</p>
              </div>
              <div className="glass rounded-2xl p-6 card-hover mt-8 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                  Category
                </p>
                <p className="text-white font-semibold leading-snug">
                  Colombian shapewear & fajas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
