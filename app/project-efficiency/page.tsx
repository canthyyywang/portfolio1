import Link from "next/link";
import {
  ArrowLeft,
  Layers,
  Layout,
  Zap,
  Users,
  AlertCircle,
  CheckCircle2,
  MonitorPlay,
  FileCode2,
} from "lucide-react";
import { ProjectImage } from "@/app/components/ProjectImage";

export const metadata = {
  title: "跨团队项目支撑与设计能力推广 · 王启萌",
  description:
    "在多个跨部门项目中提供设计支持，并通过工具文档与培训推动 AI 工具和设计规范在团队中的实际使用。",
};

export default function ProjectEfficiencyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link
              href="/"
              className="flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回作品集首页
            </Link>
          </div>
        </div>
      </nav>

      <main className="pb-24">
        {/* 首屏：项目概述与数据看板 */}
        <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-24 sm:px-6">
          <div className="flex flex-col gap-12 lg:gap-16">
            <div className="max-w-full space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  跨团队项目支撑与
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    设计能力推广
                  </span>
                </h1>
              </div>

              <div className="flex flex-wrap gap-3">
                {["跨团队支持", "AI工具落地", "设计规范推广"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="border-l-4 border-slate-200 pl-4 text-lg leading-relaxed text-slate-600 whitespace-nowrap">
                在多个跨部门项目中提供设计支持，并通过工具文档与培训推动 AI 工具和设计规范在团队中的实际使用。
              </p>
            </div>

            {/* 核心指标看板 */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-6">
                <div>
                  <Layers className="mb-3 h-7 w-7 text-blue-500 transition-transform group-hover:scale-110 sm:mb-4 sm:h-8 sm:w-8" />
                  <div className="mb-1 text-2xl font-bold text-slate-900 sm:mb-2 sm:text-3xl">
                    5<span className="ml-1 text-sm font-normal text-slate-500 sm:text-lg">个</span>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-800">跨部门项目支持</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  参与方案评审与体验设计，协助推进复杂流程和功能体验落地。
                </p>
              </div>

              <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-6">
                <div>
                  <Layout className="mb-3 h-7 w-7 text-indigo-500 transition-transform group-hover:scale-110 sm:mb-4 sm:h-8 sm:w-8" />
                  <div className="mb-1 text-2xl font-bold text-slate-900 sm:mb-2 sm:text-3xl">
                    2<span className="ml-1 text-sm font-normal text-slate-500 sm:text-lg">套</span>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-800">AI工具使用文档</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  为部门 RAG 与 Prompt 调优工具 编写完整使用说明书并沉淀操作指南。
                </p>
              </div>

              <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-6">
                <div>
                  <Zap className="mb-3 h-7 w-7 text-amber-500 transition-transform group-hover:scale-110 sm:mb-4 sm:h-8 sm:w-8" />
                  <div className="mb-1 text-2xl font-bold text-slate-900 sm:mb-2 sm:text-3xl">
                    2<span className="ml-1 text-sm font-normal text-slate-500 sm:text-lg">次</span>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-800">业务培训</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  面向业务团队组织培训会议，推动 RAG 与 Prompt 工具在实际业务中落地。
                </p>
              </div>

              <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-6">
                <div>
                  <Users className="mb-3 h-7 w-7 text-emerald-500 transition-transform group-hover:scale-110 sm:mb-4 sm:h-8 sm:w-8" />
                  <div className="mb-1 text-2xl font-bold text-slate-900 sm:mb-2 sm:text-3xl">
                    2<span className="ml-1 text-sm font-normal text-slate-500 sm:text-lg">场</span>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-800">设计规范培训</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  面向前后端开发讲解公司设计规范，培训设计协作工具使用方法。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-slate-100" />
        </div>

        {/* 01. 跨部门项目设计支撑 */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">01. 跨部门项目设计支撑</h2>
            <p className="text-lg leading-relaxed text-slate-500 xl:whitespace-nowrap">
              在多个项目中提供体验设计支持，参与需求评审、交互设计与设计落地，协助业务团队完成产品体验设计交付。
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <div className="mb-6 flex items-center text-lg font-bold text-slate-800">
                <AlertCircle className="mr-2 h-5 w-5 text-slate-500" />
                背景
              </div>
              <p className="mb-10 leading-relaxed text-slate-600">
                多个业务部门在推进项目时缺乏成熟的交互设计经验，
                <strong className="text-slate-800">需求评审与设计交付之间存在断层</strong>。
              </p>

              <div className="mt-auto flex flex-col gap-4">
                {[
                  "需求评审阶段缺乏交互设计参与",
                  "需求文档停留在功能描述层",
                  "设计交付与开发实现之间沟通成本高",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-200/50 px-5 py-4 transition-colors hover:bg-slate-200/80"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-50/50 p-8 sm:p-10">
              <div className="absolute -z-10 top-0 right-0 h-40 w-40 rounded-bl-full bg-blue-100/40" />
              <div className="mb-8 flex items-center text-lg font-bold text-blue-700">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                我的角色
              </div>

              <div className="mt-auto flex flex-col gap-4">
                {[
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "需求阶段",
                    desc: "参与业务需求评审，将业务流程转化为交互结构。",
                  },
                  {
                    icon: <Layout className="h-5 w-5" />,
                    title: "设计阶段",
                    desc: "输出交互与视觉设计方案。",
                  },
                  {
                    icon: <Layers className="h-5 w-5" />,
                    title: "落地阶段",
                    desc: "与产品、前后端开发协同推进设计实现。",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-blue-50 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mt-0.5 shrink-0 rounded-xl bg-blue-50 p-2.5 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-xl border border-blue-100/50 bg-[#E8F2FF] p-5 text-lg font-bold text-blue-900 shadow-sm">
            <span className="mr-2">⚡</span> 结果 <span className="mx-3 opacity-30">|</span> 支持 5
            个跨部门 AI 项目的体验设计交付
          </div>
        </section>

        {/* 02. 降低 AI 工具使用门槛 */}
        <section className="overflow-hidden border-y border-slate-100 bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">
                02. 降低 AI 工具使用门槛，推动业务团队落地使用
              </h2>
              <div className="inline-flex max-w-full items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <AlertCircle className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
                <p className="text-lg text-slate-600 xl:whitespace-nowrap">
                  <span className="font-semibold text-slate-800">背景：</span>
                  内部 RAG 与 Prompt 调优工具具备技术能力，但学习成本高，业务团队难以理解工具原理与使用路径，导致项目难以推广。
                </p>
              </div>
            </div>

            <div className="relative ml-4 md:ml-12">
              <div className="absolute -ml-px left-0 top-6 bottom-0 w-[2px] border-l-2 border-dashed border-blue-100 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent" />

              <div className="space-y-20">
                {/* Step 1 */}
                <div className="relative pl-12">
                  <div className="absolute -left-[18px] top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    1
                  </div>
                  <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
                    <div className="mb-8 flex flex-col">
                      <span className="mb-2 inline-block w-fit rounded-md bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Strategy
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">逻辑说明结构化</h3>
                    </div>
                    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
                      梳理 RAG、Prompt 调优工具核心业务逻辑，输出聚焦于
                      <strong className="text-slate-900">
                        「机制解释、业务流程引导、典型案例」
                      </strong>
                      的可视化说明文档。
                    </p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <ProjectImage
                        src="/images/efficiency/rag-mechanism.png"
                        alt="RAG 核心机制与业务流程解构"
                        title="[图文] RAG 核心机制与业务流程解构"
                        wrapperClassName="aspect-video"
                        className="rounded-xl"
                      />
                      <ProjectImage
                        src="/images/efficiency/prompt-handbook.png"
                        alt="Prompt 调优工具典型案例手册"
                        title="[图文] Prompt 调优工具典型案例手册"
                        wrapperClassName="aspect-video"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-12">
                  <div className="absolute -left-[18px] top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    2
                  </div>
                  <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
                    <div className="mb-8 flex flex-col">
                      <span className="mb-2 inline-block w-fit rounded-md bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Promotion
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">跨部门培训推广</h3>
                    </div>
                    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
                      面向内外部团队（交通、智慧存储等）组织 RAG 专题培训。摒弃纯技术讲解，采用
                      <strong className="text-slate-900">真实业务场景代入</strong>
                      的演示方式，助力业务推广。
                    </p>
                    <ProjectImage
                      src="/images/efficiency/training-session.png"
                      alt="业务线专项培训会议现场截图"
                      title="[图文] 业务线专项培训会议现场截图"
                      wrapperClassName="aspect-[21/9] max-w-4xl"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Final Result */}
                <div className="relative pl-12">
                  <div className="absolute -left-[18px] top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 p-8 shadow-[0_15px_40px_rgba(16,185,129,0.08)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-emerald-500 p-1.5">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-emerald-900">关键成效</h4>
                    </div>
                    <p className="text-lg leading-relaxed text-emerald-800">
                      降低业务团队对 AI 工具的理解成本，推动工具在实际业务场景中的
                      <strong className="font-extrabold text-emerald-900">首次落地使用</strong>。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. 设计规范推广与团队能力提升 */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              03 设计规范推广与团队能力提升
            </h2>
          </div>

          {/* 背景卡片 */}
          <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <AlertCircle className="mr-4 h-5 w-5 shrink-0 text-slate-400" />
            <p className="font-medium text-slate-600 xl:whitespace-nowrap">
              <span className="font-bold text-slate-800">背景：</span>
              随着跨团队项目增加，不同团队在设计规范理解和设计工具使用上存在差异，影响设计协作效率。
            </p>
          </div>

          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {/* 行动一：设计规范培训 */}
            <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-blue-300">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm transition-transform group-hover:scale-110">
                  <MonitorPlay className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">设计规范培训</h3>
              </div>
              <div className="mb-8 flex-grow space-y-1 leading-relaxed text-slate-600">
                <p>面向研发与产品团队开展公司设计规范培训，</p>
                <p>介绍设计规范体系、组件规则与设计交付流程，</p>
                <p>帮助团队理解设计原则并提升协作效率。</p>
              </div>
              <ProjectImage
                src="/images/efficiency/design-spec-training.png"
                alt="设计规范培训会议截图"
                title="[图文占位] 设计规范培训会议截图"
                wrapperClassName="aspect-[4/3] mt-auto w-full"
                className="rounded-xl"
              />
            </div>

            {/* 行动二：设计工具培训 */}
            <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-blue-300">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm transition-transform group-hover:scale-110">
                  <FileCode2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">设计工具培训</h3>
              </div>
              <div className="mb-8 flex-grow space-y-1 leading-relaxed text-slate-600">
                <p>组织 Pixso 设计工具使用培训，</p>
                <p>讲解设计稿查看、标注信息与开发交付流程，</p>
                <p>帮助研发团队更高效理解设计稿。</p>
              </div>
              <ProjectImage
                src="/images/efficiency/training-materials.png"
                alt="培训资料截图"
                title="[图文占位] 培训资料截图"
                wrapperClassName="aspect-[4/3] mt-auto w-full"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* 总结展示 */}
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-center text-white shadow-lg">
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-r from-blue-600/20 to-cyan-500/20" />
              <div className="relative z-10 flex flex-col items-center">
                <CheckCircle2 className="mb-4 h-10 w-10 text-blue-400" />
                <h3 className="mb-2 text-2xl font-bold">效能跃升</h3>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                  规范建立与培训后，显著提高了跨部门的设计还原一致性，
                  <strong className="text-white">大幅降低 UI Bug 率</strong>
                  ，将走查沟通时间缩短了 <strong className="text-white">60%</strong> 以上。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center rounded-full border border-slate-200 bg-white px-8 py-4 font-medium text-slate-600 transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
          >
            <ArrowLeft className="mr-3 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            返回作品集首页
          </Link>
        </div>
      </footer>
    </div>
  );
}
