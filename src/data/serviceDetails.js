import {
  Code2, Smartphone, Sparkles, Database, Layers, Zap, ShieldCheck,
  Gauge, Rocket, Cpu, GitBranch, Cloud, LineChart, Bot, Server, Lock
} from "lucide-react";

export const serviceDetails = {
  "web-application-development": {
    icon: Code2,
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "Web platforms built for scale.",
    titleAccent: "built for scale.",
    intro: "We design and engineer production-grade web applications — from high-traffic SaaS platforms to internal tools that run the business. Clean architecture, measurable performance, zero surprises.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    stats: [
      { value: "20+", label: "Web apps shipped" },
      { value: "<150ms", label: "P95 latency avg" },
      { value: "99.98%", label: "Uptime SLO" },
    ],
    capabilities: [
      { icon: Layers, title: "Product UX & IX", desc: "Research-led flows, design systems, accessibility baked in." },
      { icon: Code2, title: "Full-stack engineering", desc: "React.js on the frontend, Node / Express on the backend." },
      { icon: Gauge, title: "Performance engineering", desc: "Core Web Vitals, edge caching, rendering strategy." },
      { icon: ShieldCheck, title: "Security & compliance", desc: "Secured exclusively via end-to-end SSL and TLS encryption." },
      { icon: Zap, title: "Real-time systems", desc: "WebSockets, server-sent events, optimistic UI." },
      { icon: Server, title: "Headless APIs", desc: "REST / GraphQL with typed contracts end to end." },
    ],
    process: [
      { n: "01", title: "Discover", desc: "Workshops to align goals, users, and constraints." },
      { n: "02", title: "Architect", desc: "System design, tech picks, ADRs that outlive the team." },
      { n: "03", title: "Build", desc: "Weekly increments, trunk-based CI/CD, paired code review." },
      { n: "04", title: "Operate", desc: "Observability, on-call, and continuous improvement." },
    ],
    stack: ["React",  "TypeScript", "Node.js", "Python / FastAPI", "PostgreSQL", "Redis", "AWS", "Vercel", "Playwright"],
  },

  "ai-data-engineering": {
    icon: Sparkles,
    eyebrow: "AI / DATA ENGINEERING",
    title: "Production-grade AI & data,",
    titleAccent: "not prototypes.",
    intro: "We ship AI features that survive contact with real users, and data platforms that leadership actually trusts. LLM apps, RAG systems, forecasting pipelines, and warehouses that scale — all engineered with rigorous evals and SLOs.",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    stats: [
      { value: "38+", label: "AI features in production" },
      { value: "9.2%", label: "Avg. measurable lift" },
      { value: "100%", label: "Eval-gated releases" },
    ],
    capabilities: [
      { icon: Bot, title: "LLM applications", desc: "Chat, copilots, and agents with guardrails, tracing, and evals." },
      { icon: Database, title: "RAG & retrieval", desc: "Hybrid search, re-ranking, and chunking tuned to your corpus." },
      { icon: LineChart, title: "Forecasting & ML", desc: "Classical + modern models — deployed, monitored, retrained." },
      { icon: Layers, title: "Data platform", desc: "Warehouses, lakehouses, and reliable dbt pipelines." },
      { icon: Gauge, title: "Evals & observability", desc: "Offline + online evals; shipping only what's measurably better." },
      { icon: Lock, title: "Responsible AI", desc: "PII handling, red-teaming, and policy enforcement by default." },
    ],
    process: [
      { n: "01", title: "Frame", desc: "Define the task, the eval, and the business metric to move." },
      { n: "02", title: "Prototype", desc: "Rapid experiments against a labelled eval set." },
      { n: "03", title: "Harden", desc: "Guardrails, retries, tracing, cost controls, red-team." },
      { n: "04", title: "Scale", desc: "Ship to prod behind feature flags; monitor drift and quality." },
    ],
    stack: ["OpenAI", "Anthropic", "LangGraph", "LlamaIndex", "pgvector", "Snowflake", "dbt", "Airflow", "Python", "Ray"],
  },

  "mobile-engineering": {
    icon: Smartphone,
    eyebrow: "MOBILE APP ENGINEERING",
    title: "Mobile experiences that",
    titleAccent: "feel native everywhere.",
    intro: "From native iOS & Android to polished React Native apps — we build mobile products that rank in the top-tier of App Store quality. Crash-free rates above 99.9%, buttery interactions, and ship cadence that keeps up with your roadmap.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    stats: [
      { value: "5+", label: "Apps on the stores" },
      { value: "99.92%", label: "Crash-free sessions" },
      { value: "4.7★", label: "Avg. Play Store rating" },
    ],
    capabilities: [
      { icon: Smartphone, title: "iOS (Swift / SwiftUI)", desc: "Modern, modular iOS apps following Apple's latest idioms." },
      { icon: Cpu, title: "Android (Kotlin / Compose)", desc: "Jetpack Compose, coroutines, Material 3 done right." },
      { icon: Layers, title: "React Native / Expo", desc: "Cross-platform apps with native modules when it matters." },
      { icon: Cloud, title: "Mobile backends", desc: "Push, auth, sync, offline-first — wired to your cloud." },
      { icon: Gauge, title: "Perf & quality", desc: "Startup budget, memory profiling, screenshot & snapshot tests." },
      { icon: Rocket, title: "Release engineering", desc: "Fastlane, phased rollouts, OTA updates, store assets." },
    ],
    process: [
      { n: "01", title: "Shape", desc: "Prototype flows in Figma; validate with real users." },
      { n: "02", title: "Architect", desc: "Modularize, choose storage, plan offline semantics." },
      { n: "03", title: "Ship", desc: "TestFlight / internal tracks weekly; gather feedback fast." },
      { n: "04", title: "Grow", desc: "A/B onboarding, analytics funnels, store optimization." },
    ],
    stack: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "React Native", "Expo", "Firebase", "Fastlane", "Sentry", "Detox"],
  },
};

export const serviceSlugs = Object.keys(serviceDetails);

export const serviceMeta = {
  "web-application-development": { shortTitle: "Web Application Development" },
  "ai-data-engineering": { shortTitle: "AI / Data Engineering" },
  "mobile-engineering": { shortTitle: "Mobile Engineering" },
};