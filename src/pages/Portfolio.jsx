import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const projects = [
  { title: "Helix Health Platform", category: "Healthcare", desc: "HIPAA-grade telemedicine platform serving 1.2M users.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80" },
  { title: "Northwind Treasury", category: "Fintech", desc: "Real-time corporate treasury dashboard for global CFOs.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80" },
  { title: "Kepler Logistics OS", category: "Logistics", desc: "Operations platform routing 40k shipments/day.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" },
  { title: "Aurora Retail AI", category: "Retail / AI", desc: "AI assortment engine lifting margin by 9.2%.", img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&q=80" },
  { title: "Atlas EduCloud", category: "Education", desc: "Learning platform for 220 universities across EMEA.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80" },
  { title: "Vantage Insurance Hub", category: "InsurTech", desc: "Claims automation reducing handle time by 38%.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80" },
];

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="javix-bg pt-36 pb-20 relative" data-testid="portfolio-hero">
        <div className="javix-glow-orb" style={{ width: 360, height: 360, background: "#4F29B8", top: -100, right: -80, opacity: 0.55 }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <ScrollFadeIn>
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-widest">PORTFOLIO</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-6 leading-[1.05]">
              Selected work, <span className="javix-grad-text">measured outcomes.</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              A snapshot of what we've shipped lately — from venture-backed startups to enterprise leaders.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="bg-white py-20" data-testid="portfolio-grid">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`portfolio-filter-${f.toLowerCase().replace(/\s|\//g, "-")}`}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${
                  filter === f
                    ? "javix-cta"
                    : "bg-[#0a1230]/5 text-[#0a1230]/70 hover:bg-[#0a1230]/10"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-7">
            {visible.map((p, i) => (
              <ScrollFadeIn key={p.title} delay={i * 70}>
                <article className="javix-card overflow-hidden group" data-testid={`portfolio-card-${i}`}>
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 text-[#0a1230] text-[10px] font-bold tracking-widest">
                      {p.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#0a1230] tracking-tight">{p.title}</h3>
                      <p className="text-[#0a1230]/65 text-sm mt-1.5">{p.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#0a1230]/5 grid place-items-center group-hover:bg-gradient-to-br group-hover:from-[#4F29B8] group-hover:to-[#3B82F6] group-hover:text-white text-[#0a1230] transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </article>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn className="text-center mt-16">
            <Link to="/contact" className="javix-cta inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold" data-testid="portfolio-cta">
              Start your project <ArrowRight size={18} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Portfolio;