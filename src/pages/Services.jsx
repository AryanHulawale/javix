import { Link } from "react-router-dom";
import {
  ArrowRight, Code2, Cloud, ShieldCheck, Smartphone, Database, Sparkles,
  Layers, GitBranch, Cpu, LineChart, Bot
} from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const services = [
  { icon: Code2, title: "Web Application Development", desc: "Robust, scalable web platforms engineered for performance and clarity.", tags: ["React.js", "Node.js", "Express.js"], to: "/services/web-application-development" },
  { icon: Smartphone, title: "Mobile App Engineering", desc: "Native and cross-platform mobile experiences crafted end-to-end.", tags: ["iOS", "Android", "RN"], to: "/services/mobile-engineering" },
 
  { icon: Bot, title: "AI Automation", desc: "Workflow automation with agents that ship measurable hours back.", tags: ["Agents", "Ops", "RPA"], to: "/services/ai-data-engineering" },
];

const Services = () => (
  <>
    <section className="javix-bg pt-36 pb-20 relative" data-testid="services-hero">
      <div className="javix-glow-orb" style={{ width: 360, height: 360, background: "#3B82F6", top: -100, left: -80, opacity: 0.55 }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <ScrollFadeIn>
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-widest">SERVICES</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-6 leading-[1.05]">
            A focused suite for <span className="javix-grad-text">serious software.</span>
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Pick one capability or wire several together — JAVIX teams operate as a single
            integrated unit, regardless of scope.
          </p>
        </ScrollFadeIn>
      </div>
    </section>

    <section className="bg-white py-24" data-testid="services-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollFadeIn key={s.title} delay={i * 60}>
              <div className="javix-card p-7 h-full flex flex-col items-start" data-testid={`services-card-${i}`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] grid place-items-center text-white mb-5 shadow-lg shadow-[#4F29B8]/25">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1230] tracking-tight">{s.title}</h3>
                <p className="text-[#0a1230]/65 mt-2 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#0a1230]/5 text-[#0a1230]/70">{t}</span>
                  ))}
                </div>
                <Link to={s.to} className="javix-link mt-5 inline-flex items-center gap-1 text-sm" data-testid={`services-cta-${i}`}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* <section className="bg-[#f6f7fb] py-24" data-testid="services-engagement">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollFadeIn className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">HOW WE WORK</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4">
            Engagement models
          </h2>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            { icon: Cpu, title: "Build", desc: "Greenfield product builds with our senior pod, end-to-end.", price: "From $25k / month" },
            { icon: LineChart, title: "Scale", desc: "Augment your existing team with embedded specialists.", price: "From $18k / month" },
            { icon: ShieldCheck, title: "Operate", desc: "Run-mode partnership with strict SLAs and on-call coverage.", price: "From $9k / month" },
          ].map((m, i) => (
            <ScrollFadeIn key={m.title} delay={i * 100}>
              <div className="javix-card p-7 h-full" data-testid={`engagement-${i}`}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] text-white grid place-items-center mb-5">
                  <m.icon size={20} />
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1230]">{m.title}</h3>
                <p className="text-[#0a1230]/65 mt-2 text-sm">{m.desc}</p>
                <div className="mt-5 text-sm font-bold text-[#3B82F6]">{m.price}</div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section> */}
  </>
);

export default Services;