"use client";

import {
  BookOpenText,
  CalendarDays,
  Feather,
  MapPin,
  Network,
  Search,
  Sparkles,
  Tags,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties, PointerEvent } from "react";

const characters = [
  {
    name: "沈砚",
    role: "旧城档案修复师",
    quote: "在残页之间辨认被风吹散的名字。",
    tags: ["档案", "旧城", "证词"],
    tone: "from-stone-100 via-slate-50 to-cyan-50",
  },
  {
    name: "林照水",
    role: "渡口医师",
    quote: "擅长从细微病症里追溯一段往事。",
    tags: ["医术", "渡口", "线索"],
    tone: "from-cyan-50 via-white to-emerald-50",
  },
  {
    name: "顾闻笙",
    role: "北馆编年官",
    quote: "将纷乱事件排成可被查阅的年表。",
    tags: ["编年", "北馆", "观察"],
    tone: "from-amber-50 via-stone-50 to-white",
  },
  {
    name: "洛青岚",
    role: "远行见证人",
    quote: "记录山路、信物，以及每一次重逢。",
    tags: ["远行", "信物", "关系"],
    tone: "from-teal-50 via-white to-slate-50",
  },
];

const details = [
  ["本名", "沈砚"],
  ["身份", "档案修复师 / 失落事件调查者"],
  ["所属", "南岸旧卷局"],
  ["活跃区域", "青石巷、北馆、雾桥渡口"],
];

const timeline = [
  {
    year: "壬寅 春",
    title: "接手旧卷局残册",
    text: "发现多份人物档案被同一种淡墨覆盖，开始建立关系索引。",
  },
  {
    year: "壬寅 夏",
    title: "雾桥渡口会面",
    text: "与林照水交换证词，确认失踪事件与北馆编年误差有关。",
  },
  {
    year: "癸卯 冬",
    title: "北馆年表重排",
    text: "顾闻笙协助校正七段时间记录，洛青岚的远行笔记成为关键旁证。",
  },
  {
    year: "甲辰 初",
    title: "建立人物谱系",
    text: "将人物身份、经历、标签与事件串联为可持续扩展的 Wiki 框架。",
  },
];

const relations = [
  ["沈砚", "林照水", "证词互证"],
  ["沈砚", "顾闻笙", "档案协作"],
  ["顾闻笙", "洛青岚", "年表来源"],
  ["林照水", "洛青岚", "旧友"],
];

const navItems = [
  ["人物", "#人物"],
  ["关系", "#关系"],
  ["选手简介", "/players"],
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
              <span className="text-xs text-[#66736c]">人物档案与事件索引</span>
            </span>
          </a>

          <div className="flex flex-col gap-3 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
            <label className="group flex h-11 w-full items-center gap-2 rounded-md border border-[#d6d0c0] bg-white/75 px-3 text-sm shadow-sm transition focus-within:border-[#7c988b] focus-within:bg-white lg:max-w-sm">
              <Search className="size-4 text-[#789085] transition group-focus-within:text-[#30413d]" />
              <input
                className="w-full bg-transparent text-[#26312f] outline-none placeholder:text-[#8b948c]"
                placeholder="搜索人物、事件、标签"
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
        <section className="hero-panel grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <Sparkles className="size-4" />
              淡墨归档，留白成谱
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-[#17211f] sm:text-5xl lg:text-6xl">
              南岸旧卷人物 Wiki
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              一个用于整理人物档案、关系、经历与事件脉络的清爽 Wiki 首页。先以静态样例承载结构，后续可平滑接入真实数据。
            </p>
          </div>

          <aside className="ink-summary">
            <BookOpenText className="mb-4 size-6 text-[#526961]" />
            <p className="text-sm leading-7 text-[#5b6762]">
              “每一个名字都不是孤立的条目，而是一张纸上逐渐显影的河流、旧友、承诺和回声。”
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                ["04", "人物"],
                ["12", "事件"],
                ["08", "标签"],
              ].map(([num, label]) => (
                <div className="rounded-md border border-[#d9d2c2] bg-[#fffdf8]/70 p-3" key={label}>
                  <strong className="block text-xl text-[#20302c]">{num}</strong>
                  <span className="text-xs text-[#708079]">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="人物" className="section-block">
          <div className="section-heading">
            <UsersRound className="size-5" />
            <div>
              <h2>人物卡片</h2>
              <p>快速浏览角色身份、简介和标签。</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((person) => (
              <article className="wiki-card group" key={person.name}>
                <div className={`avatar-wash bg-gradient-to-br ${person.tone}`}>
                  <span>{person.name.slice(0, 1)}</span>
                </div>
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <p className="quote">{person.quote}</p>
                <div className="tag-row">
                  {person.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block detail-grid">
          <div className="portrait-panel">
            <div className="portrait-mark">
              <span>沈</span>
            </div>
            <div>
              <p className="eyebrow">当前档案</p>
              <h2>沈砚</h2>
              <p>旧卷修复者，擅长辨认被遮蔽的笔迹、错位的时间与人物关系中的空白。</p>
            </div>
          </div>

          <div className="profile-panel">
            <div className="section-heading compact">
              <MapPin className="size-5" />
              <div>
                <h2>基础信息</h2>
                <p>适合作为人物详情页的信息骨架。</p>
              </div>
            </div>
            <dl className="info-list">
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {["主角", "档案线", "南岸", "待补完", "可接入数据库"].map((tag) => (
                <span className="soft-tag" key={tag}>
                  <Tags className="size-3.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="时间线" className="section-block">
          <div className="section-heading">
            <CalendarDays className="size-5" />
            <div>
              <h2>经历与事件时间线</h2>
              <p>按时间记录人物经历、关键事件和旁证来源。</p>
            </div>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <time>{item.year}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="关系" className="section-block">
          <div className="section-heading">
            <Network className="size-5" />
            <div>
              <h2>人物关系</h2>
              <p>先以轻量关系卡表示，后续可替换为图谱或真实关系数据。</p>
            </div>
          </div>
          <div className="relation-grid">
            {relations.map(([from, to, relation]) => (
              <article className="relation-card" key={`${from}-${to}`}>
                <span>{from}</span>
                <i />
                <strong>{relation}</strong>
                <i />
                <span>{to}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#d8d2c3]/70 px-4 py-8 text-center text-sm text-[#68766f]">
        Kassa Wiki 示例界面，人物、事件与关系数据当前为静态占位。
      </footer>
    </div>
  );
}
