import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";
import { serviceDetails, serviceMeta } from "../data/serviceDetails";

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceDetails[slug];

  if (!data) return <Navigate to="/services" replace />;

  const Icon = data.icon;
  const otherServices = Object.entries(serviceMeta).filter(([s]) => s !== slug);

  return (
    <>
      {/* HERO */}
      <section className="javix-bg pt-36 pb-20 relative" data-testid={`service-detail-hero-${slug}`}>
        <div className="javix-glow-orb" style={{ width: 360, height: 360, background: "#4F29B8", top: -80, left: -100, opacity: 0.55 }} />
        <div className="javix-glow-orb" style={{ width: 320, height: 320, background: "#3B82F6", bottom: -120, right: -100, opacity: 0.45 }} />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollFadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-widest mb-6">
              <Icon size={14} /> {data.eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              {data.title} <span className="javix-grad-text">{data.titleAccent}</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-xl leading-relaxed">{data.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="javix-cta inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold" data-testid={`service-detail-cta-${slug}`}>
                Schedule Demo <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors">
                All services
              </Link>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={120} className="relative">
            <div className="rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img src={data.heroImage} alt={data.eyebrow} className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 javix-glass rounded-2xl px-5 py-4 hidden md:block">
              <div className="text-[10px] tracking-widest font-bold text-[#0a1230]/60">ENGAGEMENT</div>
              <div className="text-base font-extrabold text-[#0a1230]">Senior pod · 6–10 wks</div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-14 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-4 md:gap-8">
          {data.stats.map((s, i) => (
            <ScrollFadeIn key={s.label} delay={i * 80}>
              <div className="text-center" data-testid={`service-detail-stat-${slug}-${i}`}>
                <div className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-[#0a1230]/60 mt-2 tracking-wide">{s.label}</div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#f6f7fb] py-24" data-testid={`service-detail-capabilities-${slug}`}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="max-w-2xl">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold tracking-widest">CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4 leading-[1.1]">
              What we bring to the engagement.
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {data.capabilities.map((c, i) => (
              <ScrollFadeIn key={c.title} delay={i * 70}>
                <div className="javix-card p-7 h-full" data-testid={`service-detail-cap-${slug}-${i}`}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] text-white grid place-items-center mb-4 shadow-lg shadow-[#4F29B8]/25">
                    <c.icon size={20} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0a1230] tracking-tight">{c.title}</h3>
                  <p className="text-[#0a1230]/65 mt-2 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24" data-testid={`service-detail-process-${slug}`}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="max-w-2xl">
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">PROCESS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4">
              Four disciplined steps.
            </h2>
          </ScrollFadeIn>
          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p, i) => (
              <ScrollFadeIn key={p.n} delay={i * 100}>
                <li className="javix-card p-6 h-full relative overflow-hidden" data-testid={`service-detail-step-${slug}-${i}`}>
                  <span className="absolute -top-2 -right-2 text-7xl font-extrabold text-[#0a1230]/5 select-none">{p.n}</span>
                  <div className="text-xs font-bold tracking-widest text-[#3B82F6]">{p.n}</div>
                  <h4 className="font-extrabold text-[#0a1230] mt-2">{p.title}</h4>
                  <p className="text-sm text-[#0a1230]/65 mt-2">{p.desc}</p>
                </li>
              </ScrollFadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* STACK */}
      <section className="bg-[#f6f7fb] py-20" data-testid={`service-detail-stack-${slug}`}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[auto_1fr] gap-10 items-start">
          <ScrollFadeIn>
            <span className="inline-block px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold tracking-widest">TECH STACK</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1230] mt-4 max-w-sm leading-[1.15]">
              Tools we reach for first.
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn delay={120}>
            <div className="flex flex-wrap gap-3">
              {data.stack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white border border-black/5 text-sm font-semibold text-[#0a1230] flex items-center gap-2 shadow-sm">
                  <CheckCircle2 size={14} className="text-[#3B82F6]" /> {t}
                </span>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-white py-20" data-testid={`service-detail-other-${slug}`}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">EXPLORE MORE</span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0a1230] mt-3">
                Other services
              </h2>
            </div>
            <Link to="/services" className="javix-link inline-flex items-center gap-1 text-sm">
              All services <ArrowRight size={14} />
            </Link>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {otherServices.map(([s, meta]) => {
              const OIcon = serviceDetails[s].icon;
              return (
                <Link
                  key={s}
                  to={`/services/${s}`}
                  className="javix-card p-6 flex items-center gap-5 group"
                  data-testid={`service-detail-other-link-${s}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] text-white grid place-items-center shadow-lg shadow-[#4F29B8]/25">
                    <OIcon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-[#0a1230]">{meta.shortTitle}</div>
                    <div className="text-sm text-[#0a1230]/60 mt-0.5">Read capabilities →</div>
                  </div>
                  <ArrowRight size={18} className="text-[#0a1230]/50 group-hover:text-[#4F29B8] group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn>
            <div className="javix-bg rounded-3xl px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Let's build it together.
                </h3>
                <p className="text-white/70 mt-2 max-w-xl">
                  Book a free 30-minute call — we'll map a realistic path from where you are to production.
                </p>
              </div>
              <Link to="/contact" className="javix-cta px-6 py-3 rounded-full font-semibold relative z-10" data-testid={`service-detail-final-cta-${slug}`}>
                Schedule Demo
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;