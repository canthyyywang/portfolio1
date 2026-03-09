import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "王启萌 · AI 产品体验架构师",
  description:
    "专注于复杂 B 端系统与 AI 产品的体验架构设计。深耕 RAG、ChatBI、AI 开放平台等前沿领域。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">
        <Navbar />
        <main>{children}</main>
        <footer
          id="contact"
          className="rounded-t-[3rem] bg-slate-900 px-6 py-24 text-white md:rounded-t-[5rem]"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-5xl font-black text-blue-400">
                  联系我
                </h2>
                <p className="mb-12 max-w-md text-lg text-slate-400">
                  目前正在寻求体验设计专家、AI 交互设计等相关职位机会。欢迎交流关于 AI 体验架构设计的见解。
                </p>
                <div className="space-y-6">
                  <a
                    href="mailto:1978673140@qq.com"
                    className="group flex cursor-pointer items-center gap-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                        Email
                      </div>
                      <div className="text-xl font-medium tracking-wide">
                        1978673140@qq.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:15271882112"
                    className="group flex cursor-pointer items-center gap-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                        Phone / 微信
                      </div>
                      <div className="text-xl font-medium tracking-wide">
                        152-7188-2112
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end md:items-end">
                <div className="space-y-6 text-left md:text-right">
                  <p className="text-2xl font-light italic text-slate-400">
                    &quot;感谢您的时间与阅读。&quot;
                  </p>
                  <p className="text-6xl font-black tracking-tighter opacity-10 md:text-8xl">
                    WANG QIMENG
                  </p>
                </div>
                <Link
                  href="/#home"
                  className="mt-16 flex items-center gap-3 text-slate-500 transition-colors hover:text-white"
                >
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Back to top
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 transition-colors hover:border-white">
                    ↑
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-24 flex flex-col border-t border-slate-800 pt-8 text-xs font-bold uppercase tracking-widest text-slate-500 md:flex-row md:justify-between gap-4">
              <div>© 2026 王启萌. All rights reserved.</div>
              <div>BUILT FOR AI-NATIVE EXPERIENCE DESIGN</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
