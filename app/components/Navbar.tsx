"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-blue-600"
        >
          QIMENG.W
        </Link>
        <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/#home" className="transition-colors hover:text-blue-600">
            首页
          </Link>
          <Link href="/#projects" className="transition-colors hover:text-blue-600">
            项目案例
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-blue-600">
            联系方式
          </Link>
        </div>
      </div>
    </nav>
  );
}
