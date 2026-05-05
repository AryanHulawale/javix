import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Rocket, Users, Target, Heart } from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const stats = [
  { icon: Award, value: "240+", label: "Projects Delivered" },
  { icon: Users, value: "65", label: "Engineers & Designers" },
  { icon: Globe, value: "18", label: "Countries Served" },
  { icon: Rocket, value: "12+", label: "Years in Business" },
];

const values = [
  { icon: Target, title: "Outcome over output", desc: "We optimize for measurable business impact, not delivery theater." },
  { icon: Heart, title: "Craft, always", desc: "Every line of code, every pixel, every commit message — handled with care." },
  { icon: Users, title: "Senior, embedded", desc: "Senior-only pods that operate as an extension of your team." },
];

const team = [
  { name: "Alex Karim", role: "Founder, CEO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Priya Shah", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Daniel Cruz", role: "Design Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Mira Sato", role: "VP, Strategy", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

const About = () => (
  <>
    <section className="javix-bg pt-36 pb-20 relative" data-testid="about-hero">
      <div className="javix-glow-orb" style={{ width: 360, height: 360, background: "#4F29B8", top: -80, right: -80, opacity: 0.55 }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <ScrollFadeIn>
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-widest">
            ABOUT JAVIX
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-6 leading-[1.05]">
            We build software <span className="javix-grad-text">leaders trust.</span>
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            JAVIX is a senior-only engineering studio. For over a decade we have helped
            founders and Fortune 500 leaders ship software that earns its keep.
          </p>
        </ScrollFadeIn>
      </div>
    </section>

    <section className="bg-white py-20" data-testid="about-stats">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <ScrollFadeIn key={s.label} delay={i * 80}>
            <div className="javix-card p-6 text-center" data-testid={`about-stat-${i}`}>
              <div className="w-12 h-12 rounded-2xl mx-auto bg-gradient-to-br from-[#4F29B8] to-[#3B82F6] text-white grid place-items-center mb-3">
                <s.icon size={20} />
              </div>
              <div className="text-3xl font-extrabold text-[#0a1230]">{s.value}</div>
              <div className="text-sm text-[#0a1230]/60 mt-1">{s.label}</div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </section>

    <section className="bg-[#f6f7fb] py-24" data-testid="about-mission">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollFadeIn>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="working session" className="w-full h-[460px] object-cover" />
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={120}>
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#4F29B8]/10 text-[#4F29B8] text-xs font-bold tracking-widest">OUR MISSION</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4 leading-[1.1]">
            Making serious engineering accessible.
          </h2>
          <p className="text-[#0a1230]/65 mt-5 leading-relaxed">
            We started JAVIX because consulting was broken — bloated teams, junior delivery,
            and slide-deck-shaped value. We rebuilt it: senior pods, fixed cadence, transparent
            economics. The result is software that ages well.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="javix-card p-5">
                <v.icon size={20} className="text-[#3B82F6]" />
                <div className="font-extrabold text-[#0a1230] mt-2 text-sm">{v.title}</div>
                <div className="text-xs text-[#0a1230]/60 mt-1">{v.desc}</div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>

    <section className="bg-white py-24" data-testid="about-team">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollFadeIn className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold tracking-widest">LEADERSHIP</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1230] mt-4">
            People behind the work
          </h2>
        </ScrollFadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {team.map((m, i) => (
            <ScrollFadeIn key={m.name} delay={i * 80}>
              <div className="javix-card overflow-hidden" data-testid={`team-member-${i}`}>
                <img src={m.img} alt={m.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <div className="font-extrabold text-[#0a1230]">{m.name}</div>
                  <div className="text-sm text-[#0a1230]/60">{m.role}</div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="text-center mt-14">
          <Link to="/contact" className="javix-cta inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold" data-testid="about-cta">
            Work with us <ArrowRight size={18} />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  </>
);

export default About;