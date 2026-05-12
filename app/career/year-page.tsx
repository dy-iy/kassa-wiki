import Link from "next/link";
import { ArrowLeft, CalendarDays, Milestone } from "lucide-react";
import { careerYearMap } from "./year-data";

export function CareerYearPage({ year }: { year: string }) {
  const data = careerYearMap.get(year);

  if (!data) {
    return null;
  }

  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-2 text-sm text-[#526961] transition hover:bg-white"
          href="/career"
        >
          <ArrowLeft className="size-4" />
          返回职业生涯总览
        </Link>

        <section className="hero-panel grid min-h-0 gap-8 py-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <CalendarDays className="size-4" />
              {data.year} 年度记录
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#17211f] sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              {data.summary}
            </p>
          </div>

          <aside className="ink-summary">
            <Milestone className="mb-4 size-6 text-[#526961]" />
            <dl className="info-list">
              <div>
                <dt>年份</dt>
                <dd>{data.year}</dd>
              </div>
              <div>
                <dt>队伍</dt>
                <dd>{data.team}</dd>
              </div>
              <div>
                <dt>定位</dt>
                <dd>{data.role}</dd>
              </div>
              <div>
                <dt>重点</dt>
                <dd>{data.highlight}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <CalendarDays className="size-5" />
            <div>
              <h2>{data.year} 年事件时间线</h2>
              <p>记录该年度的关键节点、队伍变化和阶段成果。</p>
            </div>
          </div>
          <div className="timeline">
            {data.events.map(([time, title, text]) => (
              <article className="timeline-item" key={title}>
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
