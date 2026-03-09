"use client";

import React from "react";
import Link from "next/link";
import {
  MonitorPlay,
  Cpu,
  Network,
  TrendingDown,
  AlertCircle,
  Target,
  ArrowRight,
  Filter,
  ArrowDown,
  ChevronLeft,
  Zap,
  CheckCircle2,
  Quote,
  Search,
  PieChart,
  LayoutTemplate,
  Compass,
  FileCheck,
  BarChart3,
  Layers,
  ArrowLeft,
  AlertTriangle,
  MessageSquare,
  LineChart,
  GitMerge,
  MousePointerClick,
  CheckSquare,
  RotateCcw,
  Lightbulb,
  Database,
  Users,
  Briefcase,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ProjectAiPlatformPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="text-sm font-semibold">返回作品集首页</span>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/60 to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>

          <div className="max-w-5xl mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              AI 开放平台体验重构
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {["B 端体验设计", "全链路分析", "体验重构"].map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-slate-200 pl-4">
              该项目围绕 AI 开放平台展开。在平台持续扩展过程中，生态逐渐暴露出明显的体验断层问题。通过系统性体验审查，定位核心转化漏斗的流失节点，并制定精准体验修复策略。
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-6">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 bg-slate-50 text-slate-600 text-sm font-semibold rounded-full mb-4 border border-slate-200">
                  <AlertCircle className="w-4 h-4 mr-2 text-slate-500" />
                  01. 项目背景
                </div>
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                  全链路体验审视：漏斗两端流失
                </h2>
                <p className="text-slate-500 mt-4 text-base leading-relaxed">
                  平台由三大核心模块构成。通过审查发现，用户转化漏斗在
                  <strong className="text-rose-500 mx-1 font-semibold">
                    漏斗顶部
                  </strong>
                  与
                  <strong className="text-rose-500 mx-1 font-semibold">
                    底部
                  </strong>
                  同时出现了严重的断层流失。
                </p>
              </div>
            </div>

            <div className="relative py-4">
              <div
                className="hidden lg:block absolute top-0 bottom-0 left-0 w-[55%] bg-gradient-to-b from-slate-100/80 to-slate-50/20 pointer-events-none rounded-3xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
                }}
              ></div>

              <div className="relative flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-0 z-10">
                <div className="w-full lg:w-[55%] flex justify-center">
                  <div className="w-full bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-indigo-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left cursor-default">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <MonitorPlay className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center justify-center sm:justify-start">
                        开放能力网页
                        <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                          流量入口
                        </span>
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        低门槛体验入口，承担生态流量入口。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-[5%] justify-center text-rose-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="w-full lg:w-[40%]">
                  <div className="bg-rose-50/80 p-5 rounded-2xl shadow-sm border border-rose-200 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 h-full relative overflow-hidden transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 hover:-translate-y-1 group">
                    <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                      <Filter className="w-5 h-5" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-slate-900 flex items-center text-base">
                        漏斗顶部流失
                      </h4>
                      <div className="text-rose-600 font-medium text-xs mt-0.5 mb-2">
                        能力发现效率低 → 流量无法转化
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[55%] flex justify-center py-3 text-slate-300 z-10 relative">
                <ArrowDown className="w-5 h-5" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-0 z-10">
                <div className="w-full lg:w-[55%] flex justify-center">
                  <div className="w-[90%] lg:w-[85%] bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-emerald-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left cursor-default">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Cpu className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center justify-center sm:justify-start">
                        训练平台
                        <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                          深度定制
                        </span>
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        结合业务数据进行模型微调。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-[5%]"></div>
                <div className="hidden lg:block lg:w-[40%]"></div>
              </div>

              <div className="w-full lg:w-[55%] flex justify-center py-3 text-slate-300 z-10 relative">
                <ArrowDown className="w-5 h-5" />
              </div>

              <div className="relative flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-0 z-10">
                <div className="w-full lg:w-[55%] flex justify-center">
                  <div className="w-[80%] lg:w-[70%] bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-purple-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left cursor-default">
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-5 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <Network className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center justify-center sm:justify-start">
                        编排平台
                        <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-purple-50 text-purple-600 border border-purple-100">
                          核心转化
                        </span>
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        多模型算法编排，解决复杂业务问题。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-[5%] justify-center text-rose-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div className="w-full lg:w-[40%]">
                  <div className="bg-rose-50/80 p-5 rounded-2xl shadow-sm border border-rose-200 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 h-full relative overflow-hidden transition-all duration-300 hover:border-rose-300 hover:bg-rose-50 hover:-translate-y-1 group">
                    <div className="w-10 h-10 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-slate-900 flex items-center text-base">
                        漏斗底部流失
                      </h4>
                      <div className="text-rose-600 font-medium text-xs mt-0.5 mb-2">
                        编排系统复杂难用 → 高价值用户流失
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-slate-600 text-center font-medium bg-slate-50 py-4 rounded-xl border border-slate-100 flex flex-col md:flex-row justify-center items-center gap-2">
                <span className="inline-flex items-center text-slate-400">
                  <Compass className="w-4 h-4 mr-1" /> 策略定调：
                </span>
                不从中间模块开始，而是
                <strong className="text-blue-600 px-1">
                  优先从漏斗两端入手
                </strong>
                。提升能力发现效率，降低编排使用门槛。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100/50 border-y border-slate-200">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4 border border-blue-100">
                <Zap className="w-4 h-4 mr-2" />
                02. 危机 1 剖析
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                漏斗顶部：开放能力发现效率低
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 flex items-center mb-6">
                  <Target className="w-6 h-6 text-blue-500 mr-3" />
                  需求触发与质疑
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-2xl relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200" />
                    <div className="text-slate-700 font-medium relative z-10">
                      最初接到的需求是：
                      <span className="italic">
                        “导航栏空间不足，需要调整导航样式以容纳新增开放能力。”
                      </span>
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl text-slate-600">
                    <p>
                      但在审视需求后，我判断这只是
                      <strong className="text-slate-900 mx-1">表层问题</strong>
                      。随着能力数量不断增加，简单调整导航结构无法真正解决用户的能力发现问题。因此我决定暂停执行需求，对问题进行
                      <strong className="text-blue-600 mx-1">上游归因</strong>
                      。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 lg:p-8 flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                <div className="flex-1 bg-slate-100/60 p-6 rounded-3xl flex flex-col border border-transparent">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center mb-6">
                    <BarChart3 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    数据提取与洞察
                  </h3>
                  <p className="text-slate-600 mb-6 font-medium text-sm">
                    我提取了网页端近3个月的埋点数据，主要包含：
                  </p>

                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center text-slate-700 bg-slate-200/40 p-3 rounded-xl shadow-sm border border-slate-100/50 text-sm">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span>{" "}
                      页面跳出率
                    </div>
                    <div className="flex items-center text-slate-700 bg-slate-200/40 p-3 rounded-xl shadow-sm border border-slate-100/50 text-sm">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span>{" "}
                      首页点击分布
                    </div>
                    <div className="flex items-center text-slate-700 bg-slate-200/40 p-3 rounded-xl shadow-sm border border-slate-100/50 text-sm">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0"></span>{" "}
                      各开放能力试用情况
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 border-t border-slate-200/80 pt-4 mt-auto leading-relaxed">
                    并借助公司
                    <strong className="text-blue-600 font-semibold mx-1">
                      澜智大模型
                    </strong>
                    对数据进行模式分析，同时结合设计走查进行交叉验证。
                  </div>
                </div>

                <div className="flex items-center justify-center text-blue-200 py-2 lg:py-0 shrink-0">
                  <svg
                    className="w-10 h-10 hidden lg:block drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 10.5v3h7v4.5l6-6-6-6v4.5H6z" />
                  </svg>
                  <svg
                    className="w-10 h-10 block lg:hidden drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10.5 6h3v7h4.5l-6 6-6-6h4.5V6z" />
                  </svg>
                </div>

                <div className="flex-1 bg-slate-100/60 p-6 rounded-3xl flex flex-col border border-transparent">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center mb-6">
                    <Search className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    三大关键问题
                  </h3>

                  <div className="space-y-4 mb-4 flex-1">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-lg bg-blue-100/80 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        1
                      </div>
                      <div className="text-slate-700 font-medium leading-relaxed text-sm">
                        平台信息架构老化，能力分类逻辑不清晰。
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-lg bg-blue-100/80 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        2
                      </div>
                      <div className="text-slate-700 font-medium leading-relaxed text-sm">
                        新用户在首页浏览路径混乱，阅读成本高。
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-lg bg-blue-100/80 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        3
                      </div>
                      <div className="text-slate-700 font-medium leading-relaxed text-sm">
                        新上线的开放能力曝光率极低。
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center text-blue-200 py-2 lg:py-0 shrink-0">
                  <svg
                    className="w-10 h-10 hidden lg:block drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 10.5v3h7v4.5l6-6-6-6v4.5H6z" />
                  </svg>
                  <svg
                    className="w-10 h-10 block lg:hidden drop-shadow-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10.5 6h3v7h4.5l-6 6-6-6h4.5V6z" />
                  </svg>
                </div>

                <div className="flex-1 bg-rose-50/70 border border-rose-100/50 p-6 rounded-3xl relative overflow-hidden flex flex-col">
                  <AlertCircle className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-rose-200/50 opacity-50 pointer-events-none" />
                  <h3 className="text-rose-600 font-bold mb-6 flex items-center relative z-10 text-lg">
                    核心症结定论
                  </h3>
                  <div className="text-slate-800 font-medium relative z-10 leading-relaxed text-sm flex-1">
                    平台缺乏能力分发机制，用户必须自行寻找能力入口。导致
                    <strong className="text-rose-600 mx-1">
                      大量流量在首页流失
                    </strong>
                    。
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center">
                      <Compass className="w-5 h-5 text-blue-500 mr-2" />
                      设计策略
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    为了提升能力发现效率，我对{" "}
                    <strong className="text-slate-900">8 个同类 AI 能力平台</strong>
                    进行结构调研，并结合自身平台情况，制定以下策略：
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                        <LayoutTemplate className="w-4 h-4 text-blue-500 mr-2" />{" "}
                        信息架构重构
                      </h4>
                      <p className="text-sm text-slate-500 pl-6">
                        重新组织开放能力分类结构。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                        <Layers className="w-4 h-4 text-blue-500 mr-2" />{" "}
                        增加推荐和上新模块
                      </h4>
                      <p className="text-sm text-slate-500 pl-6">
                        帮助用户快速找到适合的能力。
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 group hover:border-blue-200 transition-colors">
                      <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                        <PieChart className="w-4 h-4 text-blue-500 mr-2" />{" "}
                        核心能力动态展位
                      </h4>
                      <p className="text-sm text-slate-500 pl-6">
                        为重点模型提供稳定曝光入口。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center">
                      <FileCheck className="w-5 h-5 text-blue-500 mr-2" />
                      方案产出
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    方案阶段共输出{" "}
                    <strong className="text-blue-600 text-xl mx-1">3</strong>{" "}
                    套设计方案：
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-4 rounded-xl border border-slate-100 bg-slate-50">
                      <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center mr-4 shrink-0">
                        2套
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">基础方案</div>
                        <div className="text-sm text-slate-500">
                          优化导航收纳逻辑
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl border border-blue-200 bg-blue-50/50 shadow-sm relative overflow-hidden">
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-4 shrink-0">
                        1套
                      </div>
                      <div>
                        <div className="font-bold text-blue-900 flex items-center">
                          进阶方案{" "}
                          <CheckCircle2 className="w-4 h-4 ml-2 text-blue-500" />
                        </div>
                        <div className="text-sm text-slate-600">
                          重构开放能力大厅信息架构
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-5 text-sm leading-relaxed shadow-lg">
                    最终设计评审一致通过{" "}
                    <strong className="text-blue-400">进阶方案</strong>
                    ，并同步推动能力目录结构升级。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="w-full relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <ProjectImage
              src="/images/ai-platform/design-before-after.png"
              alt="设计前后对比图"
              title="（此处放置设计前后对比图）"
              wrapperClassName="h-[500px]"
              className="rounded-2xl bg-white shadow-sm border border-slate-200"
            />
          </div>

          <div className="bg-[#2a594b] rounded-[2rem] p-10 md:p-14 relative overflow-hidden text-emerald-50 shadow-xl border border-[#1e4437]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center px-4 py-1.5 bg-emerald-800/60 text-emerald-300 text-sm font-medium rounded-full mb-8 border border-emerald-700/50 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                业务成效 (Results)
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-wide">
                打通“能力浏览 → 试用转化”漏斗第一环
              </h2>

              <p className="text-lg text-emerald-100/90 mb-8 leading-relaxed max-w-3xl">
                该优化不仅解决了导航冗余问题，还带来了更关键的变化：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-emerald-800/40 border border-emerald-700/50 p-4 rounded-xl flex items-center backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                  <span className="text-emerald-50 font-medium">
                    平台核心能力获得稳定曝光入口
                  </span>
                </div>
                <div className="bg-emerald-800/40 border border-emerald-700/50 p-4 rounded-xl flex items-center backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                  <span className="text-emerald-50 font-medium">
                    用户浏览路径显著简化
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-24">
          <section className="py-16 bg-slate-100/50 border-t border-slate-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="mb-10">
                  <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4 border border-blue-100">
                    <Zap className="w-4 h-4 mr-2" />
                    03. 危机 2 剖析
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    漏斗底部：复杂编排系统体验崩塌与重构
                  </h2>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm relative z-10 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row items-start">
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 mb-4 sm:mb-0 sm:mr-6">
                      <Network className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-slate-600 leading-relaxed m-0">
                        相比基础的能力浏览模块，编排平台承担着更高价值的业务转化。但在实际使用中，专业用户对其体验评价极低。面对历史遗留的复杂系统与恶化的口碑，
                        <strong className="text-slate-900 font-semibold mx-1">
                          如何在数据不足与资源紧缺的限制下，精准击破体验痛点？
                        </strong>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <motion.section
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <span className="text-blue-200 mr-4 font-mono text-4xl">01</span>
                背景与接手困境
              </h2>
              <p className="mt-4 text-slate-600 text-lg max-w-3xl">
                编排平台是一个历史系统，功能复杂、缺乏系统文档且由多团队长期迭代。单纯通过界面走查很难理解系统逻辑，体验问题也难以准确定位。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      破局一：还原真实业务语境
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm">
                    主动发起 1V1 对话，探寻数据水面下的真实业务语境
                  </p>
                </div>

                <div className="flex-1 bg-slate-50/80 rounded-[1.25rem] border border-slate-100 p-5 space-y-5 font-sm flex flex-col justify-center">
                  <div className="flex justify-end items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-sm shadow-sm leading-relaxed">
                      单纯走查界面有点盲人摸象。为了准确定位系统问题，能同步一下目前编排平台最真实的业务痛点吗？
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-xs font-bold text-blue-700 border border-blue-200">
                      我
                    </div>
                  </div>

                  <div className="flex justify-start items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-700 border border-indigo-200">
                      PM
                    </div>
                    <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-sm px-4 py-3.5 max-w-[90%] text-sm shadow-sm space-y-3">
                      <p className="text-slate-800 font-medium mb-1">
                        目前主要有三个致命问题：
                      </p>
                      <div className="space-y-2.5">
                        <div className="flex items-start">
                          <MessageSquare className="w-4 h-4 text-indigo-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-[13px] leading-relaxed">
                            <strong className="text-slate-900">用户口碑恶化</strong>
                            ：用户评价“极其难用”，且口口相传，已严重影响高阶转化。
                          </span>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-[13px] leading-relaxed">
                            <strong className="text-slate-900">工程负债严重</strong>
                            ：底层 Bug 频发，交互反馈不稳定，挫败感强。
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Target className="w-4 h-4 text-blue-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-[13px] leading-relaxed">
                            <strong className="text-slate-900">竞品参考目标</strong>
                            ：业务团队已将 Dify、百度一见 视为成熟对标。
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      破局二：数据分析失效
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm">
                    最初尝试通过埋点数据定位问题，但很快发现一个现实限制：
                    <strong className="text-slate-800">底层埋点颗粒度过粗。</strong>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-4">
                  <p className="text-slate-700 text-sm font-medium mb-2">
                    数据只能得出表面结论：
                  </p>
                  <div className="flex items-center text-orange-600 bg-orange-100/50 px-3 py-2 rounded-lg text-sm font-semibold">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    用户完成核心任务平均耗时过长
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-700 text-sm font-medium mb-2">
                    但无法进一步定位：
                  </p>
                  {[
                    "用户在哪一步卡住？",
                    "哪个操作最复杂？",
                    "哪个交互最容易产生理解成本？",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center text-slate-500 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-6 pt-4 border-t border-slate-100 italic">
                  *继续依赖现有数据无法支撑体验决策。
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="bg-blue-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-lg"
            >
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <Target className="w-64 h-64" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 text-blue-50 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
                  核心决策
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  切换体验评估模型
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  在{" "}
                  <strong className="text-white">
                    数据不足 + 工程资源紧缺
                  </strong>{" "}
                  的现实条件下，我放弃继续深挖埋点数据。将体验重构的分析方式转向：
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex-1 border border-white/20 flex items-center justify-center space-x-3">
                    <Layers className="w-6 h-6 text-blue-200 shrink-0" />
                    <div className="font-semibold text-lg whitespace-nowrap">
                      核心链路拆解
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center text-blue-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex-1 border border-white/20 flex items-center justify-center space-x-3">
                    <LineChart className="w-6 h-6 text-blue-200 shrink-0" />
                    <div className="font-semibold text-lg whitespace-nowrap">
                      竞品深度对标
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-slate-50 border-y border-slate-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <motion.div variants={fadeUp} className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                  <span className="text-slate-300 mr-4 font-mono text-4xl">
                    02
                  </span>
                  分析与定位
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <motion.div
                  variants={fadeUp}
                  className="space-y-12 lg:col-span-5"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      核心链路拆解
                    </h3>
                    <p className="text-slate-600 mb-8 text-sm">
                      首先将复杂系统收敛为最核心的业务流程，围绕该链路对体验进行逐步拆解。
                    </p>

                    <div className="flex flex-col space-y-2">
                      {["创建任务", "编排画布", "测试发布"].map((step, index) => (
                        <React.Fragment key={step}>
                          <div className="bg-slate-100/60 border border-slate-200/60 rounded-2xl p-4 flex items-center shadow-sm">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-sm font-bold flex items-center justify-center mr-4 shrink-0">
                              {index + 1}
                            </div>
                            <span className="font-semibold text-slate-800">
                              {step}
                            </span>
                          </div>
                          {index < 2 && (
                            <div className="flex justify-center py-1">
                              <div className="bg-slate-200/50 p-1.5 rounded-full">
                                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <Eye className="w-5 h-5 text-blue-600 mr-2" />
                      竞品拆解
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      对标 Dify 和 百度一见，重点分析其节点操作方式、画布交互逻辑及整体编排流程。
                    </p>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 flex items-center">
                      <Target className="w-8 h-8 text-emerald-500 mr-4 shrink-0" />
                      <div>
                        <div className="text-xs text-emerald-700 font-medium mb-1">
                          分析结论
                        </div>
                        <div className="text-base sm:text-lg font-bold text-emerald-800">
                          最终识别出 12+ 个关键体验痛点
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="h-full flex flex-col lg:col-span-7"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <PieChart className="w-5 h-5 text-blue-600 mr-2" />
                    ROI 优先级评估
                  </h3>
                  <p className="text-slate-600 text-sm mb-6">
                    为了确保优化投入产生最大价值，我将痛点放入四象限矩阵中评估，最终确定高优先级优化方向。
                  </p>

                  <div className="flex-1 min-h-[480px] w-full bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-center relative shadow-sm overflow-hidden p-8 sm:p-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-50" />

                    <div className="w-full h-full border-l-2 border-b-2 border-slate-400 relative z-10">
                      <div className="absolute -left-8 top-1/4 -translate-y-1/2 -rotate-90 text-[10px] font-medium text-slate-400">
                        高
                      </div>
                      <div className="absolute -left-8 bottom-1/4 translate-y-1/2 -rotate-90 text-[10px] font-medium text-slate-400">
                        低
                      </div>
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-600 tracking-wider">
                        业务影响
                      </div>

                      <div className="absolute bottom-[-1.5rem] left-1/4 -translate-x-1/2 text-[10px] font-medium text-slate-400">
                        低
                      </div>
                      <div className="absolute bottom-[-1.5rem] right-1/4 translate-x-1/2 text-[10px] font-medium text-slate-400">
                        高
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 tracking-wider">
                        体验影响
                      </div>

                      <div className="absolute left-0 top-1/2 w-full border-b border-slate-300/80" />
                      <div className="absolute top-0 left-1/2 h-full border-l border-slate-300/80" />

                      <div className="absolute top-0 left-0 w-1/2 h-1/2 p-2 sm:p-3 flex flex-wrap content-center justify-center gap-1.5 overflow-hidden">
                        {[
                          "导出与任务状态强绑定",
                          "已发布任务需要更新才能编辑",
                          "二次确认一刀切",
                        ].map((text) => (
                          <span
                            key={text}
                            className="text-[10px] px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded shadow-sm text-center leading-tight hover:-translate-y-0.5 transition-transform cursor-default"
                          >
                            {text}
                          </span>
                        ))}
                      </div>

                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/80 p-2 sm:p-3 flex flex-wrap content-center justify-center gap-1.5 backdrop-blur-[1px] transition-all hover:bg-blue-100/50 rounded-tr-lg border-b border-l border-blue-200/50">
                        <div className="absolute top-2 right-2 text-blue-700 font-bold text-[10px] bg-blue-100/90 px-2 py-0.5 rounded shadow-sm border border-blue-200">
                          优先投入 (高 ROI)
                        </div>
                        <div className="w-full h-3"></div>
                        {[
                          "节点/连线无法自由拖拽",
                          "测试需要跳转到另一软件",
                          "无法创建个人模板",
                          "画布没有撤销操作",
                          "画布无快捷键",
                        ].map((text) => (
                          <span
                            key={text}
                            className="text-[10px] px-2 py-1 bg-blue-600 text-white shadow-sm rounded text-center leading-tight hover:-translate-y-0.5 transition-transform cursor-default"
                          >
                            {text}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2 sm:p-3 flex flex-wrap content-center justify-center gap-1.5 overflow-hidden">
                        {[
                          "部分图标语义混淆",
                          "高级配置默认展开",
                          "画布连线视觉僵硬",
                        ].map((text) => (
                          <span
                            key={text}
                            className="text-[10px] px-2 py-1 bg-slate-100/80 text-slate-500 rounded border border-slate-200/50 text-center leading-tight hover:-translate-y-0.5 transition-transform cursor-default"
                          >
                            {text}
                          </span>
                        ))}
                      </div>

                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-2 sm:p-3 flex flex-wrap content-center justify-center gap-1.5 overflow-hidden">
                        {[
                          "右侧边栏过窄/信息拥挤",
                          "画布色彩过载，视觉杂乱",
                          "图标区分度低",
                          "选中/悬停反馈微弱",
                          "强制弹窗指引过长",
                        ].map((text) => (
                          <span
                            key={text}
                            className="text-[10px] px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded shadow-sm text-center leading-tight hover:-translate-y-0.5 transition-transform cursor-default"
                          >
                            {text}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <span className="text-blue-200 mr-4 font-mono text-4xl">03</span>
                设计策略落地
              </h2>
              <p className="mt-4 text-slate-600 text-lg max-w-3xl">
                基于 ROI 评估结果，将核心问题转化为四个可执行的交互设计策略：
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  Icon: MousePointerClick,
                  title: "直接操作",
                  desc: "用户可以直接在画布上操作节点对象，减少多层级操作路径。",
                  color:
                    "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                },
                {
                  Icon: Layers,
                  title: "渐进式呈现",
                  desc: "高频功能默认展示，低频功能按需展开，降低认知负担。",
                  color:
                    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                },
                {
                  Icon: CheckSquare,
                  title: "交互一致性",
                  desc: "全链路同类操作保持统一交互模式，建立清晰的心智模型。",
                  color:
                    "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
                },
                {
                  Icon: RotateCcw,
                  title: "容错机制",
                  desc: "增加全局与局部撤销能力，降低用户的试错成本与操作风险。",
                  color:
                    "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                },
              ].map((strategy, idx) => {
                const StrategyIcon = strategy.Icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${strategy.color}`}
                    >
                      <StrategyIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {strategy.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {strategy.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp}>
              <ProjectImage
                variant="dashboard"
                src="/images/ai-platform/orchestration-before-after.png"
                alt="编排系统改版前后对比：结构化与可视化重组"
                title="编排系统改版前后对比：结构化与可视化重组"
                wrapperClassName="h-[400px] mb-4"
              />
              <p className="text-center text-sm text-slate-500 italic">
                图：应用“直接操作”与“渐进式呈现”后的全新画布界面
              </p>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-slate-900 text-slate-50 py-24 mt-8 rounded-t-[3rem] sm:rounded-t-[4rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} className="mb-16">
                <h2 className="text-3xl font-bold flex items-center">
                  <span className="text-slate-600 mr-4 font-mono text-4xl">
                    04
                  </span>
                  项目复盘与沉淀
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUp}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mr-4">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">1. AI 辅助数据洞察</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    在开放能力网页优化中，通过大模型辅助分析埋点数据，快速识别出能力曝光不足的问题。
                  </p>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-sm text-slate-300">
                    <span className="text-blue-400 font-semibold">启示：</span>
                    AI 的价值不是替代判断，而是帮助从复杂数据中更快识别模式。最终决策仍需结合产品理解与设计走查验证。
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-4">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">2. 复杂系统的 ROI 评估</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    由于数据颗粒度不足，我建立了一个{" "}
                    <strong className="text-slate-200">
                      体验影响 × 业务影响
                    </strong>{" "}
                    的评估模型对问题进行优先级排序。
                  </p>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-sm text-slate-300">
                    <span className="text-emerald-400 font-semibold">启示：</span>
                    该方法在复杂系统优化中非常有效，确保了紧缺的设计与开发资源优先投入到最具业务价值的改动上。
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mr-4">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">3. 限制条件下的决策</h3>
                  </div>
                  <div className="space-y-4 text-sm text-slate-400">
                    <p>
                      <strong className="text-slate-200">开发资源不足：</strong>
                      编排平台 Bug 多，设计方案必须考虑可落地性，避免大规模底层结构重写。
                    </p>
                    <p>
                      <strong className="text-slate-200">数据基础薄弱：</strong>
                      底层埋点不完善促使体验优化更多依赖定性研究（业务访谈、竞品拆解、链路分析）。
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mr-4">
                      <GitMerge className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">4. 从漏斗两端发力</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    相比服务老用户的“训练平台”，生态系统面临的核心问题是：
                    <strong className="text-red-400">
                      流量无法转化 + 高价值用户流失
                    </strong>
                    。
                  </p>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-sm text-slate-300">
                    <span className="text-purple-400 font-semibold">战略：</span>
                    优先修复漏斗两端（开放网页承接流量，编排平台稳定高阶用户体验），从而实现更直接的业务变现。
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

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
      </main>
    </div>
  );
}
