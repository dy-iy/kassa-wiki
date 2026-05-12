import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, Milestone, ScrollText } from "lucide-react";
import { careerYears } from "./year-data";

const careerEvents = [
  {
    time: "2021",
    title: "初入职业赛场",
    text: "以替补身份参与训练赛和区域杯赛，开始建立个人比赛风格与英雄池记录。",
  },
  {
    time: "2022",
    title: "加入首支固定队伍",
    text: "稳定担任突击位，参与常规赛阶段，积累转点、协同和残局经验。",
  },
  {
    time: "2023",
    title: "打法转型与数据积累",
    text: "从单点突破转向更完整的团队协同，个人数据和团队复盘同步沉淀。",
  },
  {
    time: "2024",
    title: "进入 ALGS 主舞台",
    text: "随队完成多轮赛程，个人数据和团队排名开始进入 Wiki 归档范围。",
  },
  {
    time: "2025",
    title: "稳定竞争与荣誉积累",
    text: "区域赛事排名提升，个人高光、采访和赛后复盘逐步完善。",
  },
  {
    time: "2026",
    title: "资料持续更新",
    text: "后续可接入真实履历、转会记录、赛事成绩、采访链接和复盘资料。",
  },
];

const careerFacts = [
  ["当前身份", "职业选手"],
  ["主要位置", "突击位 / 协同突破"],
  ["代表赛区", "APAC North"],
  ["资料状态", "静态样例，待接入真实数据"],
];

export default function CareerPage() {
  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="hero-panel grid min-h-0 gap-8 py-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <BriefcaseBusiness className="size-4" />
              职业生涯
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#17211f] sm:text-5xl">
              选手职业生涯
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              用于展示选手从入行、组队、赛事突破到后续转会与荣誉的完整履历。当前先以静态样例搭好页面结构。
            </p>
          </div>

          <aside className="ink-summary">
            <ScrollText className="mb-4 size-6 text-[#526961]" />
            <p className="text-sm leading-7 text-[#5b6762]">
              职业生涯页适合承载履历、节点、队伍变动、重要采访和代表赛事，是人物 Wiki 的纵向时间轴。
            </p>
          </aside>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <Milestone className="size-5" />
            <div>
              <h2>年度子页面</h2>
              <p>按年份进入更细的职业生涯记录。</p>
            </div>
          </div>
          <div className="year-card-grid">
            {careerYears.map((item) => (
              <Link className="year-card transition hover:-translate-y-1" href={`/career/${item.year}`} key={item.year}>
                <p className="eyebrow">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block detail-grid">
          <div className="portrait-panel">
            <div className="portrait-mark">
              <span>K</span>
            </div>
            <div>
              <p className="eyebrow">生涯摘要</p>
              <h2>Kassa</h2>
              <p>从训练赛记录到职业赛事归档，这里保留选手生涯的关键节点、阶段变化和可追溯资料。</p>
            </div>
          </div>

          <div className="profile-panel">
            <div className="section-heading compact">
              <Milestone className="size-5" />
              <div>
                <h2>职业资料</h2>
                <p>后续可扩展为真实履历字段。</p>
              </div>
            </div>
            <dl className="info-list">
              {careerFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <CalendarDays className="size-5" />
            <div>
              <h2>重要事件时间线</h2>
              <p>总览职业阶段、队伍变化和代表事件。</p>
            </div>
          </div>
          <div className="timeline">
            {careerEvents.map((event) => (
              <article className="timeline-item" key={event.title}>
                <time>{event.time}</time>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
