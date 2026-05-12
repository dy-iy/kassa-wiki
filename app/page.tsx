"use client";

import {
  Feather,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties, PointerEvent } from "react";

const navItems = [
  ["选手简介", "/players"],
  ["职业生涯", "/career"],
  ["ALGS 成绩", "/algs"],
];

export default function Home() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`
    );
  }

  return (
    <div
      className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]"
      onPointerMove={handlePointerMove}
      style={{ "--pointer-x": "0px", "--pointer-y": "0px" } as CSSProperties}
    >
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <header className="sticky top-0 z-20 border-b border-[#d8d2c3]/70 bg-[#fbfaf4]/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="#" className="flex items-center gap-3 text-[#1f2a28]">
            <span className="grid size-10 place-items-center rounded-md border border-[#a7b9ad]/60 bg-white/70 shadow-sm">
              <Feather className="size-5" />
            </span>
            <span>
              <span className="block text-base font-semibold tracking-[0.14em]">
                KASSA WIKI
              </span>
              <span className="text-xs text-[#66736c]">卡莎资料与赛事索引</span>
            </span>
          </a>

          <div className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
            <label className="group flex h-11 w-full items-center gap-2 rounded-md border border-[#d6d0c0] bg-white/75 px-3 text-sm shadow-sm transition focus-within:border-[#7c988b] focus-within:bg-white lg:max-w-sm">
              <Search className="size-4 text-[#789085] transition group-focus-within:text-[#30413d]" />
              <input
                className="w-full bg-transparent text-[#26312f] outline-none placeholder:text-[#8b948c]"
                placeholder="搜索选手、年份、赛事"
                type="search"
              />
            </label>
            <div className="flex flex-wrap gap-2 text-sm text-[#4f5d58]">
              {navItems.map(([item, href]) => (
                <Link
                  className="rounded-md px-3 py-2 transition hover:bg-[#e9eee8] hover:text-[#1f2a28]"
                  href={href}
                  key={item}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="hero-panel grid min-h-[calc(100vh-11rem)] place-items-center py-10 text-center sm:py-14">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <Sparkles className="size-4" />
              卡莎资料归档
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-[#17211f] sm:text-6xl lg:text-7xl">
              卡莎 kassa WIKI
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              一个整理 APEX 职业选手 卡莎 Kassa 职业生涯、ALGS比赛成绩的 Wiki。

            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {navItems.map(([item, href]) => (
                <Link
                  className="rounded-md border border-[#cfd8cf] bg-white/65 px-5 py-3 text-sm font-medium text-[#40564f] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7c988b] hover:bg-white hover:text-[#17211f] hover:shadow-md"
                  href={href}
                  key={item}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#d8d2c3]/70 px-4 py-8 text-center text-sm text-[#68766f]">
        Kassa Wiki 资料整理页面，当前内容为静态占位。
      </footer>
    </div>
  );
}
