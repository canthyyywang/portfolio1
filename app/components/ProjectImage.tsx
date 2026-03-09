"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, LayoutDashboard } from "lucide-react";

/** 路径为 public 下的绝对路径，例如 /images/ai-platform/xxx.jpg（不要写 /public） */
export type ProjectImageVariant = "default" | "dashboard";

export function ProjectImage({
  src,
  alt,
  title,
  width,
  height,
  className = "",
  wrapperClassName = "",
  variant = "default",
  objectFit = "contain",
}: {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  /** 使用 fill 时必填，用于设定容器尺寸，如 h-[500px] min-h-[400px] */
  wrapperClassName?: string;
  variant?: ProjectImageVariant;
  /** 图片在容器内的适配方式，contain 完整显示不裁剪，cover 填满可裁剪 */
  objectFit?: "contain" | "cover";
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (variant === "dashboard") {
      return (
        <div
          className={`w-full bg-slate-50 rounded-[2rem] border border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-400 my-8 hover:bg-slate-100 transition-colors ${wrapperClassName} ${className}`}
        >
          <LayoutDashboard className="w-12 h-12 mb-4 opacity-40 text-slate-500" />
          <span className="text-sm font-medium text-slate-500">{title ?? alt}</span>
        </div>
      );
    }
    return (
      <div
        className={`w-full bg-slate-100/80 rounded-2xl border border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors ${wrapperClassName} ${className}`}
      >
        <ImageIcon className="w-8 h-8 mb-3 opacity-50" />
        <span className="text-sm font-medium">{title ?? alt}</span>
      </div>
    );
  }

  const useFill = width == null || height == null;
  if (useFill) {
    const objectFitClass = objectFit === "cover" ? "object-cover" : "object-contain";
    return (
      <div className={`relative w-full min-w-0 overflow-hidden rounded-xl shrink-0 ${wrapperClassName}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`${objectFitClass} ${className}`}
          onError={() => setHasError(true)}
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
