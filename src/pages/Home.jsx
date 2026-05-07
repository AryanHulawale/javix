import { Link } from "react-router-dom";
import {
  ArrowRight, Code2, Cloud, ShieldCheck, Smartphone, Database, Sparkles,
  CircleCheck, Headphones, Cpu, Compass, TrendingUp, Users
} from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const heroImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
];

const services = [
  { icon: Code2, title: "Web Application Development", desc: "Robust, scalable web platforms engineered for performance and clarity.", to: "/services/web-application-development" },
  { icon: Smartphone, title: "Mobile App Engineering", desc: "Native and cross-platform mobile experiences crafted end-to-end.", to: "/services/mobile-engineering" },
  { icon: Sparkles, title: "AI Solutions", desc: "Production-grade AI integrations that deliver measurable lift.", to: "/services/ai-data-engineering" },
];

const processItems = [
  { icon: Compass, title: "Discovery Consultation", desc: "Deep-dive workshops to map goals & constraints." },
  { icon: CircleCheck, title: "Quality Assurance", desc: "Rigorous testing across functional & non-functional dimensions." },
  { icon: Cpu, title: "Customized IT Strategy", desc: "Architectures tuned to your business model." },
  { icon: Headphones, title: "24/7 Support", desc: "Always-on engineering with predictable SLAs." },
];

const SkillRing = ({ value, label, color = "#4F29B8" }) => (
  <div className="flex flex-col items-center gap-3" data-testid={`skill-ring-${label.toLowerCase().replace(/\s/g, "-")}`}>
    <div
      className="skill-ring rounded-full grid place-items-center"
      style={{ "--p": color, "--v": value, width: 128, height: 128 }}
    >
      <div className="bg-white w-[100px] h-[100px] rounded-full grid place-items-center shadow-inner">
        <span className="text-2xl font-extrabold text-[#0a1230]">{value}%</span>
      </div>
    </div>
    <span className="text-sm font-semibold text-[#0a1230]">{label}</span>
  </div>
);

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="javix-bg pt-32 pb-24 md:pt-40 md:pb-32 relative" data-testid="home-hero">
        <div className="javix-glow-orb" style={{ width: 380, height: 380, background: "#4F29B8", top: -80, left: -120, opacity: 0.55 }} />
        <div className="javix-glow-orb" style={{ width: 320, height: 320, background: "#3B82F6", bottom: -120, right: -100, opacity: 0.45 }} />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
          <ScrollFadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              ENTERPRISE SOFTWARE STUDIO
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Transforming Ideas into{" "}
              <span className="javix-grad-text">Innovative Software Solutions.</span>
            </h1>
            <p className="text-white/70 mt-6 text-base md:text-lg max-w-xl leading-relaxed">
              JAVIX partners with ambitious teams to design, engineer, and scale software that
              moves the metrics that matter — from concept to production.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="javix-cta inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap" data-testid="hero-cta-primary">
                Schedule Demo <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors" data-testid="hero-cta-secondary">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8 text-white/70 text-sm">
              <div><div className="text-white text-2xl font-extrabold">2+</div>Years</div>
              <div className="w-px h-10 bg-white/15" />
              <div><div className="text-white text-2xl font-extrabold">40+</div>Projects</div>
              <div className="w-px h-10 bg-white/15" />
              <div><div className="text-white text-2xl font-extrabold">98%</div>Retention</div>
            </div>
          </ScrollFadeIn>

          {/* Asymmetric collage */}
          <ScrollFadeIn delay={120} className="relative h-[460px] sm:h-[520px]">
            <div className="absolute top-0 left-0 w-[58%] h-[44%] rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl javix-float">
              <img src={heroImages[0]} alt="team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[6%] right-0 w-[44%] h-[36%] rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl javix-float-slow">
              <img src={heroImages[1]} alt="ux" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-[8%] w-[42%] h-[44%] rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl javix-float-slow">
              <img src={heroImages[2]} alt="code" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[6%] right-[2%] w-[46%] h-[40%] rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl javix-float">
              <img src={heroImages[3]} alt="meeting" className="w-full h-full object-cover" />
            </div>

            {/* Floating UI: User Growth chart */}
            <div className="absolute top-[34%] left-[44%] w-[180px] javix-glass rounded-2xl p-3 z-20 javix-float">
              <div className="flex items-center gap-2 text-[#0a1230]">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] grid place-items-center text-white">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#0a1230]/60 font-semibold">USER GROWTH</div>
                  <div className="text-sm font-extrabold">+184%</div>
                </div>
              </div>
              <svg viewBox="0 0 100 28" className="mt-2 w-full h-7">
                <polyline fill="none" stroke="#4F29B8" strokeWidth="2" points="0,22 14,18 28,20 42,12 56,14 70,8 84,10 100,4" />
                <polyline fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.55" points="0,24 14,22 28,23 42,18 56,20 70,15 84,17 100,12" />
              </svg>
            </div>

            <div className="absolute -bottom-2 right-[10%] w-[190px] javix-glass rounded-2xl p-3 z-20 javix-float-slow">
              <div className="flex items-center gap-2 text-[#0a1230]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 grid place-items-center text-white">
                  <Users size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#0a1230]/60 font-semibold">ACTIVE CLIENTS</div>
                  <div className="text-sm font-extrabold">96 online</div>
                </div>
              </div>
              <div className="mt-2 flex -space-x-2">
                {heroImages.slice(0, 4).map((src, i) => (
                  <img key={i} src={src} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#4F29B8] grid place-items-center text-[10px] font-bold text-white">+8</div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-24" data-testid="home-about">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80"
                alt="JAVIX team"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 javix-glass rounded-2xl px-5 py-4 hidden md:block">
              <div className="text-[10px] tracking-widest font-semibold text-[#0a1230]/60">SINCE 2023</div>
              <div className="text-xl font-extrabold text-[#0a1230]">2+ years of craft</div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={120}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">
              <Sparkles size={14} /> BEST IT SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4 leading-[1.1]">
              Maximize Your Business Potential
            </h2>
            <p className="text-[#0a1230]/65 mt-5 leading-relaxed">
              We blend strategy, design, and engineering to ship outcomes — not just output.
              Every engagement is measured against the metrics your leadership team cares about.
            </p>

            <ul className="mt-6 space-y-3 text-[#0a1230]/75">
              {["Senior-only engineering pods", "Outcome-led delivery model", "Transparent weekly reporting"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CircleCheck size={18} className="text-[#3B82F6] mt-0.5" /> {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-12">
              <SkillRing value={96} label="IT Solutions" color="#4F29B8" />
              <SkillRing value={97} label="Web Solutions" color="#3B82F6" />
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f6f7fb] py-24" data-testid="home-services">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold tracking-widest">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4">
              Services Engineered for Scale
            </h2>
            <p className="text-[#0a1230]/65 mt-4">
              A focused suite of capabilities — wired together to ship products that compound.
            </p>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((s, i) => (
              <ScrollFadeIn key={s.title} delay={i * 80}>
                <div className="javix-card p-7 h-full flex flex-col items-start" data-testid={`service-card-${i}`}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] grid place-items-center text-white mb-5 shadow-lg shadow-[#4F29B8]/25">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1230] tracking-tight">{s.title}</h3>
                  <p className="text-[#0a1230]/65 mt-2 text-sm leading-relaxed">{s.desc}</p>
                  <Link to={s.to} className="javix-link mt-5 inline-flex items-center gap-1 text-sm" data-testid={`service-learn-more-${i}`}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS MAP */}
      <section className="bg-white py-24" data-testid="home-process">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4">
              A Disciplined Path to Production
            </h2>
          </ScrollFadeIn>

          <div className="relative mt-20">
            {/* Connectors (visible on lg) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1000 460" preserveAspectRatio="none">
              <line x1="500" y1="230" x2="120" y2="80" stroke="#cbd2e6" strokeWidth="1.5" strokeDasharray="4 6" />
              <line x1="500" y1="230" x2="880" y2="80" stroke="#cbd2e6" strokeWidth="1.5" strokeDasharray="4 6" />
              <line x1="500" y1="230" x2="120" y2="380" stroke="#cbd2e6" strokeWidth="1.5" strokeDasharray="4 6" />
              <line x1="500" y1="230" x2="880" y2="380" stroke="#cbd2e6" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div className="space-y-8">
                {[processItems[0], processItems[2]].map((p, i) => (
                  <ScrollFadeIn key={p.title} delay={i * 100}>
                    <div className="javix-card p-6 max-w-sm ml-auto" data-testid={`process-card-${p.title.toLowerCase().replace(/\s/g, "-")}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#4F29B8]/10 text-[#4F29B8] grid place-items-center"><p.icon size={18} /></div>
                        <h4 className="font-extrabold text-[#0a1230]">{p.title}</h4>
                      </div>
                      <p className="text-[#0a1230]/65 text-sm mt-3 leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>

              <ScrollFadeIn className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, #4F29B8, transparent 70%)" }} />
                  <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#0011B0] to-[#000860] grid place-items-center shadow-2xl border-4 border-white">
                    <div className="w-44 h-44 rounded-full bg-white/10 grid place-items-center backdrop-blur-sm">
                      <ShieldCheck size={64} className="text-white" />
                    </div>
                    <div className="absolute -bottom-3 px-4 py-1.5 rounded-full bg-white text-[#0a1230] text-xs font-bold tracking-widest shadow-lg">
                      JAVIX OS
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>

              <div className="space-y-8">
                {[processItems[1], processItems[3]].map((p, i) => (
                  <ScrollFadeIn key={p.title} delay={i * 100}>
                    <div className="javix-card p-6 max-w-sm" data-testid={`process-card-${p.title.toLowerCase().replace(/\s/g, "-")}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] grid place-items-center"><p.icon size={18} /></div>
                        <h4 className="font-extrabold text-[#0a1230]">{p.title}</h4>
                      </div>
                      <p className="text-[#0a1230]/65 text-sm mt-3 leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-white pb-12" data-testid="home-cta-strip">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="javix-bg rounded-3xl px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Ready to ship something great?
                </h3>
                <p className="text-white/70 mt-2 max-w-xl">
                  Book a 30-minute strategy call. We'll map a realistic path from where you are to where you need to be.
                </p>
              </div>
              <Link to="/contact" className="javix-cta px-6 py-3 rounded-full font-semibold relative z-10" data-testid="home-cta-strip-button">
                Schedule Demo
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;