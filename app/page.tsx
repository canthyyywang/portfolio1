"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const HERO = {
  greeting: "你好，我是王启萌",
  titleHighlight: "专注于复杂 B 端系统与 AI 产品的体验架构设计",
  subtitle:
    "深耕 RAG、ChatBI、AI开放平台等前沿领域，擅长将极具技术壁垒的 AI 能力转化为低认知负荷、高流转效率的用户体验。具备全局视角的系统化设计思维，熟练将大语言模型（如 Cursor）深度融入并重塑设计与开发工作流。",
  cta: "查看案例",
};

const PROJECTS = [
  {
    tag: "Platform",
    title: "AI 开放平台体验重构",
    subtitle: "重构开发者从接入到能力编排的 AI 工具链体验。",
    tags: ["B 端体验设计", "全链路分析", "体验重构"],
    href: "/project-ai-platform",
  },
  {
    tag: "System",
    title: "智能化 Chat 组件库",
    subtitle: "面向 AI 应用的对话交互组件体系设计",
    tags: ["组件库体系", "AI 交互体验", "B端企业级"],
    href: "/project-ai-agent",
  },
  {
    tag: "Empowerment",
    title: "跨团队项目支撑与设计能力推广",
    subtitle: "推动 AI工具与设计规范在团队中的实际应用。",
    tags: ["跨团队支持", "AI工具落地", "设计规范推广"],
    href: "/project-efficiency",
  },
];

function ProjectCard({
  tag,
  title,
  subtitle,
  href,
}: {
  tag: string;
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5"
    >
      <div className="absolute left-0 top-0 h-0 w-1 bg-blue-600 transition-all duration-500 group-hover:h-full" />
      <div className="mb-4 flex items-start justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
          {tag}
        </span>
        <ArrowRight className="h-5 w-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-blue-600">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{subtitle}</p>
    </Link>
  );
}

export default function HomePage() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      {/* Hero */}
      <header
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6"
      >
        <div className="absolute -right-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-blue-50 opacity-60 blur-[120px]" />
        <div className="absolute -bottom-[5%] -left-[5%] h-[30%] w-[30%] rounded-full bg-blue-100 opacity-40 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl pt-20">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            UI/UX DESIGN PORTFOLIO
          </div>

          <h1 className="mb-6 text-5xl font-black leading-none tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
            {HERO.greeting}
            <br />
            <span className="mt-3 block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {HERO.titleHighlight}
            </span>
          </h1>

          <p className="mb-12 max-w-2xl text-slate-500 leading-relaxed">
            {HERO.subtitle}
          </p>

          <div className="mb-16 flex flex-wrap gap-4">
            {["数据驱动", "设计工程化", "跨职能协作"].map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:border-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToProjects}
            className="group flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-blue-600">
              <ChevronRight className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">
              {HERO.cta}
            </span>
          </button>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 flex items-center gap-3 text-3xl font-black md:text-4xl">
                <span className="h-1 w-10 rounded-full bg-blue-600" />
                精选案例
              </h2>
              <p className="text-slate-500">Selected Case Studies</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                Experience Design
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                AI Agent
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.href}
                tag={project.tag}
                title={project.title}
                subtitle={project.subtitle}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
