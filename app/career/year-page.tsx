import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, PlayCircle } from "lucide-react";
import { careerYearMap } from "./year-data";

export function CareerYearPage({ year }: { year: string }) {
  const data = careerYearMap.get(year);

  if (!data) {
    return null;
  }

  const eventItems = data.events.map((event, index) => ({
    ...event,
    anchorId: `${data.year}-event-${index + 1}`,
    displayTitle: event.title || `事件 ${index + 1}`,
  }));

  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:px-8">
        <aside className="career-event-toc" aria-label={`${data.year} 事件目录`}>
          <p>{data.year} 事件目录</p>
          <nav>
            {eventItems.map((event) => (
              <a href={`#${event.anchorId}`} key={event.anchorId}>
                {event.displayTitle}
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

          

          <section className="section-block">
            <div className="section-heading">
              <CalendarDays className="size-5" />
              <div>
                <h2>{data.year} 年度事件</h2>
                <p>记录该年度的关键节点、队伍变化和阶段成果。</p>
              </div>
            </div>
            <div className="event-note-list">
              {eventItems.map((event) => (
                <article className="event-note" id={event.anchorId} key={event.anchorId}>
                  <h3>{event.displayTitle}</h3>
                  {event.date ? (
                    <p className="event-note-date">{event.date}</p>
                  ) : null}
                  <div className="event-note-card">
                    <div className="event-card-section">
                      <h4>事件概览</h4>
                      <p>{event.description || "待补充"}</p>
                    </div>

                    <div className="event-card-section">
                      <h4>相关视频</h4>
                      {event.videos.length > 0 ? (
                        <div className="event-video-grid">
                          {event.videos.map((video, videoIndex) => (
                            <a
                              className="event-video-link"
                              href={video.href}
                              key={`${video.href}-${videoIndex}`}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <span className="event-video-cover">
                                {video.cover ? (
                                  <Image
                                    alt={video.text || event.displayTitle}
                                    className="object-cover"
                                    fill
                                    sizes="(min-width: 1024px) 20rem, 100vw"
                                    src={video.cover}
                                  />
                                ) : (
                                  <span className="event-video-placeholder">
                                    <PlayCircle className="size-10" />
                                  </span>
                                )}
                              </span>
                              <span className="event-video-title">
                                {video.text || event.displayTitle}
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="event-empty-text">暂无相关视频</p>
                      )}
                    </div>
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
