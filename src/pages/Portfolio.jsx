import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollFadeIn from "../components/ScrollFadeIn";
import mankar from "../assets/mankar.png";
import dentist from "../assets/dentist.png";
import udaan from "../assets/udaan.png";
import deepanjali from "../assets/deepanjali.png";
import bhavna from "../assets/bhavana.png";
import trendingtraders from "../assets/trendingtraders.png";
import sprakhi from "../assets/rakhi.png";
import jewelpark from "../assets/jweller.png";
import banquethall from "../assets/banquet.png";
import cakeshop from "../assets/cake.png";

const projects = [

  {
    title: "Dentist Clinic",
    category: "Healthcare",
    desc: "Modern dental clinic website with appointment booking and patient management system.",
    img: dentist,
    link: "https://dentist-beta-beige.vercel.app/"
  },

  {
    title: "Trending Traders",
    category: "Finance",
    desc: "Financial advisory platform offering market insights, trading guidance, and portfolio strategy.",
    img: trendingtraders,
    link: "https://trendingtraders.in"
  },
  {
    title: "Sprakhi",
    category: "E-Commerce",
    desc: "Online rakhi store featuring festive collections with seamless browsing and ordering.",
    img: sprakhi,
    link: "https://sprakhi.in"
  },
  {
    title: "Jewel Park",
    category: "E-Commerce",
    desc: "Elegant jewellery store showcasing curated collections with a premium shopping experience.",
    img: jewelpark,
    link: "https://jewel-park-design.vercel.app/"
  },
  {
    title: "Banquet Hall",
    category: "Events",
    desc: "Event venue website with booking inquiries, gallery, and amenities for weddings and functions.",
    img: banquethall,
    link: "https://banquet-hall-fawn.vercel.app/"
  },
  {
    title: "Deepanjali Labs",
    category: "Technology",
    desc: "Innovative tech solutions provider showcasing services and project portfolio.",
    img: deepanjali,
    link: "https://dipanjali-labs.vercel.app/"
  },
  {
    title: "Cake Shop",
    category: "Food & Beverage",
    desc: "Bakery storefront highlighting custom cakes, desserts, and easy online ordering.",
    img: cakeshop,
    link: "https://cake-shop-green-one.vercel.app/"
  },
  {
    title: "Mankar Classes",
    category: "Education",
    desc: "Online learning platform for competitive exam preparation with live classes and study materials.",
    img: mankar,
    link: "https://mankarclasses.vercel.app/"
  },
  {
    title: "Udaan Ek Soch",
    category: "Non-Profit",
    desc: "Empowerment platform for underprivileged communities with donation and volunteer management.",
    img: udaan,
    link: "https://udaaneksoch.vercel.app/"
  },

  {
    title: "Bhavna",
    category: "Business",
    desc: "Corporate website for professional services with modern design and client engagement tools.",
    img: bhavna,
    link: "https://bhavna-alpha.vercel.app/"
  },
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
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${filter === f
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
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="javix-card overflow-hidden group block"
                  data-testid={`portfolio-card-${i}`}
                >
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
                </a>
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