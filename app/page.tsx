"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Bot, BriefcaseBusiness, Database, FolderKanban, Gauge, Globe, Layers3, Plus, Search, ShieldCheck, Sparkles, Star, TrendingUp } from "lucide-react";

const blueprintLibrary = [
  {
    title: "Google AI Workspace",
    category: "Automation",
    score: 96,
    status: "Live",
    description: "Deploy AI copilots and smart workflows across operations, docs, and reporting.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "City Operations Core",
    category: "Infrastructure",
    score: 91,
    status: "Ready",
    description: "Blueprint for municipal systems, dashboards, logistics, and utility management.",
    accent: "from-violet-400 to-indigo-500",
  },
  {
    title: "Enterprise Knowledge Graph",
    category: "Data",
    score: 94,
    status: "Optimized",
    description: "Organize teams, documents, and workflows into one connected enterprise memory.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Prototype Launch System",
    category: "Product",
    score: 88,
    status: "Draft",
    description: "A lightweight blueprint for validating products from idea to launch funnel.",
    accent: "from-amber-400 to-orange-500",
  },
];

const projectMetrics = [
  { label: "Active missions", value: "12" },
  { label: "Blueprints synced", value: "48" },
  { label: "Automation score", value: "92%" },
  { label: "Critical alerts", value: "02" },
];

const tasks = [
  "Review blueprints from Google catalog",
  "Map dependencies for new product system",
  "Generate launch architecture",
  "Create AI orchestration layer",
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [projectName, setProjectName] = useState("Orbital Ops Console");
  const [projectType, setProjectType] = useState("Product MVP");
  const [summary, setSummary] = useState(
    "An AI-powered operational command center that blends blueprint inspiration with custom project orchestration."
  );

  const filteredBlueprints = useMemo(() => {
    if (!query.trim()) return blueprintLibrary;

    return blueprintLibrary.filter((item) =>
      [item.title, item.category, item.description].some((field) =>
        field.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#040b14] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(24,190,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(111,76,255,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-2xl border border-cyan-500/20 bg-slate-950/70 px-5 py-4 shadow-neon backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">System</p>
                <h1 className="text-xl font-semibold">JARVIS Command Hub</h1>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              {[
                "Overview",
                "Blueprints",
                "Projects",
                "Automation",
                "Intelligence",
              ].map((item) => (
                <button
                  key={item}
                  className={`rounded-full border px-3 py-1.5 transition ${
                    item === "Overview"
                      ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-200"
                      : "border-white/10 bg-slate-900/50 hover:border-cyan-500/30 hover:text-cyan-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-cyan-500/15 bg-slate-950/75 p-6 shadow-neon">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Core status</p>
                  <h2 className="mt-2 text-3xl font-semibold">Blueprint Intelligence Active</h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  All systems online
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {projectMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Blueprint browser</p>
                  <h3 className="mt-2 text-2xl font-semibold">Google-driven design library</h3>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search blueprints"
                    className="w-52 rounded-full border border-white/10 bg-slate-900/80 py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {filteredBlueprints.map((blueprint) => (
                  <div key={blueprint.title} className="rounded-2xl border border-white/10 bg-[#0b1624] p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:shadow-neon">
                    <div className={`mb-4 h-24 rounded-xl bg-gradient-to-br ${blueprint.accent}`} />
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{blueprint.category}</p>
                        <h4 className="mt-2 text-lg font-semibold">{blueprint.title}</h4>
                      </div>
                      <div className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">
                        {blueprint.status}
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-slate-300">{blueprint.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Star className="h-4 w-4 text-amber-400" />
                        {blueprint.score}/100
                      </div>
                      <button className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 transition hover:bg-cyan-500/20">
                        Open blueprint
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Mission brief</p>
                  <h3 className="mt-2 text-xl font-semibold">Project Composer</h3>
                </div>
                <div className="rounded-full border border-violet-400/30 bg-violet-500/10 p-2 text-violet-200">
                  <FolderKanban className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <label className="block text-sm text-slate-300">
                  Project name
                  <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  Project type
                  <input
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  Summary
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                  />
                </label>

                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-medium text-slate-950 transition hover:brightness-110">
                  <Plus className="h-4 w-4" />
                  Create project
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Active mission queue</p>
              <div className="mt-5 space-y-3">
                {tasks.map((task, idx) => (
                  <div key={task} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-xs text-cyan-200">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-slate-200">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-500/15 bg-slate-950/75 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">System trust</p>
              <div className="mt-5 space-y-4">
                {[
                  { icon: ShieldCheck, label: "Security baseline", value: "Verified" },
                  { icon: Database, label: "Data sync", value: "96%" },
                  { icon: Gauge, label: "Performance", value: "Excellent" },
                  { icon: Globe, label: "External sources", value: "Connected" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-slate-200">{label}</span>
                    </div>
                    <span className="text-sm text-cyan-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: Layers3, title: "Blueprint orchestration", text: "Pull in design patterns, AI workflows, and execution plans from your catalog." },
            { icon: BriefcaseBusiness, title: "Custom project engine", text: "Create project blueprints with a simple structure and editable command center." },
            { icon: TrendingUp, title: "Live intelligence", text: "Track progress, automation, and quality with mission-level metrics." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-2 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-white">{title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        <footer className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Jarvis Blueprint Hub prototype
          </div>
          <div className="flex items-center gap-5">
            <span>Secure</span>
            <span>Connected</span>
            <span>Ready for expansion</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
