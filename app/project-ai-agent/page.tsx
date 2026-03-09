"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  LayoutTemplate,
  Copy,
  MessageSquareWarning,
  Component,
  Target,
  Briefcase,
  Maximize,
  PanelRightClose,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  GitMerge,
  Cpu,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProjectImage } from "@/app/components/ProjectImage";

// --- Reusable Components ---

const SectionTitle = ({
  num,
  title,
  subtitle,
}: {
  num: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-blue-600 font-mono font-bold text-lg tracking-wider">
        {num}.
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
    {subtitle && <p className="text-slate-500 text-lg mt-2">{subtitle}</p>}
  </div>
);

const Card = ({
  icon: Icon,
  title,
  desc,
  color = "blue",
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  color?: "blue" | "orange" | "emerald";
  className?: string;
}) => {
  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-slate-100" },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-slate-100",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
    },
  };
  const theme = colorMap[color];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-2xl p-6 border ${theme.border} shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${theme.bg} ${theme.text}`}
      >
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
};

// --- Main Page ---

export default function ProjectAiAgentPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group text-sm font-medium"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            返回作品集
          </Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="bg-slate-50 pt-20 pb-24 border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6"
            >
              智能化 Chat 组件库
              <span className="block text-2xl md:text-3xl font-medium text-slate-500 mt-4 leading-snug">
                用结构化交互收敛 AI 不确定性
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-8"
            >
              <span className="rounded-full bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 text-sm font-semibold">
                组件库体系
              </span>
              <span className="rounded-full bg-white border border-slate-200 text-slate-600 px-4 py-1.5 text-sm font-semibold shadow-sm">
                AI 交互体验
              </span>
              <span className="rounded-full bg-white border border-slate-200 text-slate-600 px-4 py-1.5 text-sm font-semibold shadow-sm">
                B端企业级
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-600 leading-relaxed mb-10 border-l-4 border-blue-500 pl-4 py-1 bg-gradient-to-r from-blue-50/50 to-transparent"
            >
              构建一套跨业务复用的 Chat 组件体系，统一 AI
              对话交互结构，并通过结构化交互解决用户提问歧义问题。该组件库已在多个
              AI 项目中落地，并在现部门的智能助手项目复用。
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
            >
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Role
                </p>
                <p className="text-sm font-medium text-slate-900">
                  组件库体验 Owner
                </p>
              </div>
              <div className="col-span-2 md:col-span-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Responsibilities
                </p>
                <p className="text-sm font-medium text-slate-900">
                  组件架构设计 / 交互策略定义 / 技术协同落地
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {/* 01. 背景 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionTitle
            num="01"
            title="项目背景与挑战"
            subtitle="AI 能力快速落地后，多个业务开始独立开发 Chat 功能（如 RAG 问答、ChatBI），缺乏统一设计基建导致了体验和资源浪费的双重问题。"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              icon={LayoutTemplate}
              title="交互结构不统一"
              desc="不同产品的 Chat 模块界面与操作逻辑存在明显差异，导致用户的学习成本增加，体验割裂。"
              color="orange"
            />
            <Card
              icon={Copy}
              title="多团队重复开发"
              desc="各业务线前端独立开发类似的消息气泡、输入框等模块，造成研发资源的严重浪费和效率下降。"
              color="orange"
            />
            <Card
              icon={MessageSquareWarning}
              title="回答偏离需求"
              desc="分析发现，许多“回答不准确”并非模型能力不足，而是用户提问信息不足或存在歧义，降低了用户信任度。"
              color="orange"
            />
          </div>
        </motion.section>

        {/* 02. 目标 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionTitle num="02" title="核心设计目标" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              icon={Component}
              title="统一交互结构"
              desc="抽象出标准化的组件体系，确保不同业务线的 AI 助手拥有高度一致的视觉和交互体验。"
            />
            <Card
              icon={Target}
              title="提升对话有效性"
              desc="探索新的交互模式，通过结构化交互引导用户提供准确上下文，减少 AI 的推断错误。"
            />
            <Card
              icon={Briefcase}
              title="沉淀设计资产"
              desc="构建高复用性的前端组件与设计规范库，支持未来更多业务场景的快速接入与扩展。"
            />
          </div>
        </motion.section>

        {/* 03. 架构 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionTitle
            num="03"
            title="Chat 组件体系设计"
            subtitle="为解决多业务复用问题，将 Chat 能力抽象为一套灵活的组件化结构，采用 80% 标准组件 + 20% 业务扩展 的设计策略。"
          />

          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      80%
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      标准组件 (Standard)
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Prompt 输入框组件",
                      "多态消息气泡 (User/AI)",
                      "AI 思考/生成状态反馈",
                      "点赞/踩等用户反馈组件",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100"
                      >
                        <CheckCircle2 size={18} className="text-blue-500" />
                        <span className="font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                      20%
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      业务扩展 (Extension)
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "数据图表展示",
                      "表格结果组件",
                      "业务定制交互卡片",
                    ].map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px]">
                <ProjectImage
                  src="/images/ai-agent/architecture-diagram.png"
                  alt="组件体系架构图示 (Standard vs Extension)"
                  title="组件体系架构图示 (Standard vs Extension)"
                  wrapperClassName="h-full min-h-[400px]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 04. 双态架构 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionTitle
            num="04"
            title="双态 Chat 架构"
            subtitle="通过竞品研究发现，AI 对话产品通常存在两种核心形态。组件库因此原生支持双态布局模式，保持底层逻辑一致。"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-[2rem] bg-white border border-slate-200 p-2 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="bg-slate-50 rounded-[1.5rem] p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                    <Maximize size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    全屏对话 (Full Screen)
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  适用于复杂任务，例如需要大面积展示数据表格的数据分析
                  (ChatBI)，或需要深度阅读的长文本推理场景。提供沉浸式体验。
                </p>
                <ProjectImage
                  src="/images/ai-agent/fullscreen-layout.png"
                  alt="全屏布局示例"
                  title="全屏布局示例"
                  wrapperClassName="aspect-video w-full shrink-0"
                  className="rounded-2xl bg-white shadow-sm border border-slate-100"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="group rounded-[2rem] bg-white border border-slate-200 p-2 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <div className="bg-slate-50 rounded-[1.5rem] p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600">
                    <PanelRightClose size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    侧边助手 (Sidebar)
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 flex-grow">
                  适用于主任务流中的辅助查询，例如文档编辑时的辅助润色，或业务表单页面的快速指引。不打断用户当前工作流。
                </p>
                <ProjectImage
                  src="/images/ai-agent/sidebar-layout.png"
                  alt="Sidebar 侧边助手布局示例"
                  title="Sidebar 侧边助手布局示例"
                  wrapperClassName="aspect-video w-full shrink-0"
                  className="rounded-2xl bg-white shadow-sm border border-slate-100"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* 05. 核心交互策略 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <SectionTitle
            num="05"
            title="Intent Clarification"
            subtitle="用结构化交互解决 AI 意图歧义，将用户成本从「自由输入」转换为「结构化选择」，显著降低 AI 推断错误。"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-stretch">
            {/* Before */}
            <div className="bg-slate-50 rounded-[2rem] p-6 lg:p-8 border border-slate-100 flex flex-col">
              <h4 className="text-slate-500 font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <MessageSquare size={16} /> 传统模式缺陷
              </h4>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex-grow flex flex-col">
                <div className="space-y-6">
                  <div className="flex flex-col items-end gap-2">
                    <div className="bg-blue-600 text-white p-3 px-4 rounded-2xl rounded-tr-sm shadow-sm text-sm text-left max-w-[95%]">
                      滨江区黑色豪华小轿车（奔驰/宝马/奥迪）经常出现的路段
                    </div>
                    <div className="bg-orange-50 text-orange-600 text-[11px] px-2.5 py-1 rounded-md border border-orange-100 font-medium flex items-center gap-1.5 shadow-sm">
                      <MessageSquareWarning size={12} />
                      问题不完整/模糊/有歧义
                    </div>
                  </div>

                  <div className="flex justify-center relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-100" />
                    </div>
                    <div className="relative bg-white px-2 text-slate-300">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                      <MessageSquareWarning size={14} />
                    </div>
                    <div className="bg-slate-50 border border-slate-100 text-slate-600 p-3 px-4 rounded-2xl rounded-tl-sm text-sm">
                      抱歉，由于缺少排查时间段等上下文信息，系统无法在海量过车数据中为您直接定位，未能找到确切结果。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-300">
                <ArrowRight size={24} />
              </div>
            </div>

            {/* After */}
            <div className="bg-blue-50/50 rounded-[2rem] p-6 lg:p-8 border border-blue-100 flex flex-col">
              <h4 className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <Sparkles size={16} /> 结构化澄清机制
              </h4>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 flex-grow flex flex-col">
                <div className="space-y-6">
                  <div className="flex flex-col items-end gap-2">
                    <div className="bg-blue-600 text-white p-3 px-4 rounded-2xl rounded-tr-sm shadow-sm text-sm text-left max-w-[95%]">
                      滨江区黑色豪华小轿车（奔驰/宝马/奥迪）经常出现的路段
                    </div>
                    <div className="bg-blue-50 text-blue-600 text-[11px] px-2.5 py-1 rounded-md border border-blue-100 font-medium flex items-center gap-1.5 shadow-sm">
                      <Sparkles size={12} />
                      触发意图澄清
                    </div>
                  </div>

                  <div className="flex justify-center relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-100" />
                    </div>
                    <div className="relative bg-white px-2 text-blue-300">
                      <ArrowRight size={16} className="rotate-90" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Sparkles size={14} />
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm p-4 w-full">
                      <p className="text-sm text-slate-700 font-medium mb-4">
                        我发现您的查询条件较为宽泛，为了提供更准确的研判结果，请补充以下维度：
                      </p>

                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-5 shadow-sm">
                        <div>
                          <p className="text-xs text-slate-500 mb-2 font-medium">
                            排查时间范围
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-xs rounded-lg shadow-sm font-medium cursor-pointer ring-1 ring-blue-500/50">
                              近 7 天
                            </span>
                            <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                              近 30 天
                            </span>
                            <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                              自定义时间
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-2 font-medium">
                            重点出现时段
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                              全天
                            </span>
                            <span className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-xs rounded-lg shadow-sm font-medium cursor-pointer ring-1 ring-blue-500/50">
                              夜间 (22:00-06:00)
                            </span>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
                          >
                            确认并开始研判
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* 6. 项目成果 */}
      <section className="bg-slate-900 py-24 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                项目成果与价值
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                组件体系在多个业务线成功落地，验证了其高度的扩展性与体验价值。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  设计资产沉淀
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  成功构建统一的 Chat
                  组件体系，并作为基础规范支持了后续多个 AI
                  项目复用，形成标准化资产。
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  研发效率提升
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  彻底改变了多团队重复造轮子的局面，大幅降低了包含复杂交互逻辑的
                  Chat 模块的前端实现成本。
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                  <GitMerge size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  体验与准确度优化
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  通过 Intent Clarification
                  机制，对话流程更加清晰可控，用户意图识别准确率显著提升，模型可用性增强。
                </p>
              </div>
            </div>

            <div className="mt-12 bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center">
              <p className="text-slate-300 text-sm font-medium">
                <span className="text-emerald-400 mr-2">🚀 后续影响:</span>
                该组件体系已在公司级核心项目{" "}
                <strong className="text-white">智能助手 (Smart Assistant)</strong>{" "}
                中继续作为底层基建被复用，跨业务扩展能力得到实战验证。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium transition-colors shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={18} />
            返回作品集首页
          </Link>
        </div>
      </footer>
    </div>
  );
}
