export default function RoushanPortfolio() {
  const navItems = ["About", "Skills", "Tools", "Work", "Contact"];

  const skillGroups = [
    {
      title: "Creative + Ops",
      accent: "Campaign Systems",
      items: [
        "Campaign asset planning",
        "Client coordination and follow-through",
        "Cross-functional execution management",
        "Creative briefing and delivery alignment",
      ],
    },
    {
      title: "Funnels + GHL",
      accent: "Conversion Flow",
      items: [
        "GoHighLevel funnel setup",
        "Landing page and website building",
        "Lead routing, tagging, and pipeline logic",
        "Automation mapping and backend flow setup",
      ],
    },
    {
      title: "Marketing Ops",
      accent: "Delivery Engine",
      items: [
        "n8n workflow design",
        "Reporting systems and dashboards",
        "Campaign operations tracking",
        "ClickUp and Monday.com execution management",
      ],
    },
    {
      title: "Performance Creative",
      accent: "Ad Production",
      items: [
        "Meta ad creative direction",
        "Video ad editing in Premiere Pro and CapCut",
        "Static creative production in Canva",
        "Creative iteration based on performance feedback",
      ],
    },
    {
      title: "Agency Execution",
      accent: "Project Control",
      items: [
        "Managing multi-project execution",
        "Bridging strategy and implementation",
        "Handling delivery across functions",
        "Keeping campaigns and operations moving without chaos",
      ],
    },
    {
      title: "Founder's Office",
      accent: "Marketing Side",
      items: [
        "Executing priority founder-led marketing projects",
        "Turning ideas into systems and deliverables",
        "Supporting fast launches across channels",
        "Owning execution where roles overlap",
      ],
    },
  ];

  const tools = [
    "GoHighLevel",
    "n8n",
    "ClickUp",
    "Monday.com",
    "Canva",
    "Premiere Pro",
    "CapCut",
    "Meta Ads",
    "Google Ads",
    "JavaScript",
    "Landing Pages",
    "Website Development",
    "Claude",
    "ChatGPT",
    "Google AI Tools",
    "Higgsfield",
    "NotebookLM",
    "AI Workflow Tools",
  ];

  const highlights = [
    {
      label: "Current Focus",
      value: "Performance marketing, operations, funnels, and execution systems",
    },
    {
      label: "Build Capability",
      value: "Websites and landing pages built from scratch without a separate developer",
    },
    {
      label: "Experience",
      value: "2+ years inside fast performance marketing environments",
    },
    {
      label: "Environment",
      value: "Founder-led teams, agency-side delivery, and practical marketing operations",
    },
  ];

  const workSamples = [
    {
      title: "Websites Created",
      text: "Built and developed websites including Growthifyu.com, Ski-G.com, Estaviodesignstudio.com, and Theshaktiawaken.com as part of broader marketing, funnel, or brand execution work.",
    },
    {
      title: "Funnel Systems & Landing Pages",
      text: "Built landing pages, booking flows, and backend funnel structures aligned to campaign intent and lead handling requirements.",
    },
    {
      title: "Marketing Automations",
      text: "Worked with n8n and operational logic to reduce manual steps, improve lead flow, and support reporting and execution systems.",
    },
    {
      title: "Performance Creative Execution",
      text: "Planned, created, and refined static and video ad creatives based on campaign needs and performance feedback.",
    },
    {
      title: "Campaign Operations",
      text: "Handled reporting, client coordination, internal follow-up, and execution flow across multiple ongoing projects.",
    },
  ];

  const websites = [
    "Growthifyu.com",
    "Ski-G.com",
    "Estaviodesignstudio.com",
    "Theshaktiawaken.com",
  ];

  const featuredCaseStudy = {
    title: "Solar Lead Qualification Funnel",
    category: "Solar / Renewable Energy",
    text: "SKIG Energies needed better-qualified solar enquiries, so I built a calculator-led funnel that collects buying context before sending leads into Zoho Pipeline.",
    href: "case-study-solar.html",
    liveHref: "https://solar.ski-g.com/",
  };

  return (
    <main className="min-h-screen bg-[#090b0f] text-[#f5efe4] antialiased">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b0f]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#d5b46c]/40 bg-[#d5b46c] text-sm font-black text-[#171008] shadow-[0_0_40px_rgba(213,180,108,0.28)]">
              R
            </span>
            <span className="leading-none">
              <span className="block text-sm font-semibold text-white">
                ROUSHAN
              </span>
              <span className="mt-1 block text-[10px] uppercase text-white/45">
                Marketing Operator
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 text-xs font-medium uppercase text-white/58 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="mailto:raushansingh0610@gmail.com"
            className="rounded-lg border border-[#d5b46c]/40 bg-[#d5b46c] px-4 py-2 text-xs font-bold uppercase text-[#120d08] shadow-[0_16px_50px_rgba(213,180,108,0.18)] transition hover:-translate-y-0.5 hover:bg-[#e5c982]"
          >
            Hire Me
          </a>
        </div>
      </div>

      <section
        id="top"
        className="relative isolate overflow-hidden border-b border-white/10 pt-28"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,11,15,0.98)_0%,rgba(9,11,15,0.88)_43%,rgba(9,11,15,0.5)_100%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end gap-12 px-5 pb-10 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div className="pb-8">
            <p className="mb-5 inline-flex rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase text-[#d5b46c]">
              Performance Marketing / Funnels / Ops
            </p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Roushan
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-medium leading-8 text-[#f5efe4] md:text-2xl md:leading-10">
              A premium execution partner for founder-led marketing teams:
              funnels, websites, automations, creative production, reporting,
              and campaign operations.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">
              I work across the pieces that usually get split between multiple
              people: campaign execution, funnel building, backend systems,
              ad creative, client coordination, and AI-assisted production.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase text-[#080a0e] transition hover:-translate-y-0.5 hover:bg-[#f5efe4]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/18 px-6 py-3 text-sm font-bold uppercase text-white transition hover:-translate-y-0.5 hover:border-[#d5b46c]/60 hover:text-[#d5b46c]"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="grid gap-4 pb-8">
            <div className="rounded-lg border border-white/12 bg-[#10141d]/90 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-semibold uppercase text-white/45">
                  Capability System
                </p>
                <p className="rounded-md bg-[#2ec4b6]/15 px-2.5 py-1 text-[10px] font-bold uppercase text-[#8ff5eb]">
                  Active
                </p>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ["01", "Campaign Planning", "Assets, briefs, tracking"],
                  ["02", "Funnel Buildout", "Pages, forms, booking flows"],
                  ["03", "Automation Logic", "Routing, tagging, reports"],
                  ["04", "Creative Iteration", "Static, video, AI workflows"],
                ].map(([step, title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-[3.25rem_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-md border border-[#d5b46c]/35 bg-[#d5b46c]/10 text-xs font-black text-[#d5b46c]">
                      {step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/54">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["2+", "Years"],
                ["18+", "Tools"],
                ["4", "Websites"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-4 text-center backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase text-white/42">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#f5efe4] text-[#111318]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase text-[#97793d]">
              About
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-black leading-tight md:text-5xl">
              One operator across the full marketing delivery chain.
            </h2>
          </div>

          <div className="grid gap-6">
            <p className="text-xl leading-9 text-[#34312b]">
              I do not work in one narrow lane. I handle client coordination,
              campaign execution, funnel building, automation, landing pages,
              ad creative direction, video editing, reporting, and operational
              follow-through.
            </p>
            <p className="text-base leading-8 text-[#5f594f]">
              The value I bring is range backed by execution. I can help a
              founder-led team move from idea to page to workflow to report
              without losing momentum between departments.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0e1118]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
            >
              <p className="text-[10px] font-bold uppercase text-[#d5b46c]">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-b border-white/10 bg-[#090b0f]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#d5b46c]">
                Skill Areas
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
                Premium execution across creative, systems, and operations.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/52">
              Built for teams that need someone who can move through strategy,
              production, backend setup, and delivery control.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-[#11151d] p-6 transition hover:-translate-y-1 hover:border-[#d5b46c]/45 hover:bg-[#151a23]"
              >
                <p className="text-[10px] font-bold uppercase text-[#2ec4b6]">
                  {group.accent}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {group.title}
                </h3>
                <div className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[#d5b46c]" />
                      <p className="text-sm leading-6 text-white/64">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="border-b border-white/10 bg-[#f5efe4] text-[#111318]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase text-[#97793d]">
              Tools & Platforms
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Stack I work with.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5f594f]">
              Tools are useful only when they make execution faster and
              clearer. This stack supports marketing, creative production,
              automation, and backend delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-[#111318]/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2c2b27] shadow-[0_10px_35px_rgba(17,19,24,0.05)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-white/10 bg-[#090b0f]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase text-[#d5b46c]">
                Selected Work
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Work that connects the visible front-end with the hidden
                operating system.
              </h2>
            </div>

            <div className="rounded-lg border border-[#d5b46c]/25 bg-[#15120b] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.35)]">
              <p className="text-xs font-bold uppercase text-[#d5b46c]">
                Websites Created
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {websites.map((site) => (
                  <div
                    key={site}
                    className="rounded-lg border border-[#d5b46c]/18 bg-white/[0.045] p-4 text-sm font-semibold text-white/82"
                  >
                    {site}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <article className="mt-5 grid gap-7 rounded-lg border border-[#2ec4b6]/30 bg-[linear-gradient(135deg,rgba(17,21,29,0.96),rgba(13,39,39,0.72))] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)] md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-[10px] font-black uppercase text-[#2ec4b6]">
                Featured Case Study
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
                {featuredCaseStudy.title}
              </h3>
              <p className="mt-3 text-xs font-bold uppercase text-[#d5b46c]">
                {featuredCaseStudy.category}
              </p>
            </div>
            <div>
              <p className="text-sm leading-7 text-white/66">
                {featuredCaseStudy.text}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={featuredCaseStudy.href}
                  className="rounded-lg border border-[#d5b46c]/40 bg-[#d5b46c] px-6 py-3 text-sm font-bold uppercase text-[#120d08] transition hover:-translate-y-0.5 hover:bg-[#e5c982]"
                >
                  Read Case Study
                </a>
                <a
                  href={featuredCaseStudy.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/18 px-6 py-3 text-sm font-bold uppercase text-white transition hover:-translate-y-0.5 hover:border-[#2ec4b6]/70 hover:text-[#8ff5eb]"
                >
                  Open Live Funnel
                </a>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {workSamples.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-[#11151d] p-6"
              >
                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f5efe4] text-[#111318]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase text-[#97793d]">
              Contact
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Open to execution-focused marketing, funnel, and operations roles.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f594f]">
              This portfolio is built to show what I do clearly: marketing
              execution, systems, creative production, websites, and modern
              AI-assisted workflows without vague positioning.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:raushansingh0610@gmail.com"
                className="rounded-lg bg-[#111318] px-6 py-3 text-sm font-bold uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#252934]"
              >
                Get In Touch
              </a>
              <a
                href="#top"
                className="rounded-lg border border-[#111318]/15 px-6 py-3 text-sm font-bold uppercase text-[#111318] transition hover:-translate-y-0.5 hover:border-[#97793d]"
              >
                Back To Top
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-[#111318]/10 bg-white/65 p-6 shadow-[0_24px_80px_rgba(17,19,24,0.08)]">
            <p className="text-xs font-bold uppercase text-[#97793d]">
              Profile Summary
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "Performance Marketing & Operations",
                "Funnel Builder and Website Developer",
                "Creative + Ops + Backend Execution",
                "AI-assisted research, writing, automation, and production",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#111318]/10 bg-[#f5efe4] p-4 text-sm font-semibold leading-6 text-[#34312b]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-[#111318]/10 pt-6 text-sm leading-7 text-[#5f594f]">
              <p>Name: Roushan</p>
              <p>Experience: 2+ years in performance marketing and operations</p>
              <p>Work Style: Small-team, founder-side, execution-focused</p>
              <p>Email: raushansingh0610@gmail.com</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
