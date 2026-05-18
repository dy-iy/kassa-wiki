import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, ExternalLink, Milestone } from "lucide-react";
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

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:px-8">
        <aside className="career-event-toc" aria-label={`${data.year} 事件目录`}>
          <p>{data.year} 事件目录</p>
          <nav>
            {data.events.map((event) => (
              <a href={`#${event.id}`} key={event.id}>
                <span>{event.season}</span>
                {event.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
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
                <h2>{data.year} 年度事件</h2>
                <p>记录该年度的关键节点、队伍变化和阶段成果。</p>
              </div>
            </div>
            <div className="event-card-list">
              {data.events.map((event) => (
                <article className="event-card" id={event.id} key={event.id}>
                  <div className="event-card-media">
                    {event.image ? (
                      <Image
                        alt={event.title}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1024px) 18rem, 100vw"
                        src={event.image}
                      />
                    ) : (
                      <div className="event-card-placeholder">
                        <CalendarDays className="size-8" />
                      </div>
                    )}
                  </div>
                  <div className="event-card-body">
                    <p className="eyebrow">{event.season}</p>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {event.links.length > 0 ? (
                      <div className="event-link-row">
                        {event.links.map((link) => (
                          <a
                            href={link.href}
                            key={link.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {link.label}
                            <ExternalLink className="size-3.5" />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
