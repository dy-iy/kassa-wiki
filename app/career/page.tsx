import Link from "next/link";
import { CalendarDays, Milestone } from "lucide-react";
import { careerYears } from "./year-data";

const careerEvents = [
  {
    time: "2021.06",
    title: "星空杯一打三",
    text: "我要一打三了！我要一打三了！https://www.bilibili.com/video/BV1354y1H7Ex",
  },
  {
    time: "2021.11",
    title: "从0开始单排上猎杀",
    text: "国内第一个单排猎杀！https://www.bilibili.com/video/BV1h34y1Z7Cq",
  },
  {
    time: "2023.02",
    title: "VKG成立",
    text: "随队完成多轮赛程，个人数据和团队排名开始进入 Wiki 归档范围。",
  },
  {
    time: "2023.03",
    title: "四人小队被禁赛",
    text: "https://www.bilibili.com/video/BV1jo4y1q7kz",
  },
  {
    time: "2024.08",
    title: "第一次进线下-德国曼哈姆季后赛",
    text: "https://www.bilibili.com/video/BV1bQHBeME2X",
  },
  {
    time: "2025.2",
    title: "札幌冠军赛 卡莎，QQ，老吊",
    text: "https://www.bilibili.com/video/BV1SYPzetEnK",
  },
  {
    time: "2025.7",
    title: "EWC夺冠",
    text: "https://www.bilibili.com/video/BV1EwuYzYEBF",
  },
  {
    time: "2026.1",
    title: "札幌冠军赛",
    text: "路边",
  },
];

export default function CareerPage() {
  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
