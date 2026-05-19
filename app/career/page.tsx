import Link from "next/link";
import { CalendarDays, Milestone } from "lucide-react";
import { TimelineEventVideos } from "./timeline-event-videos";
import type { CareerVideo } from "./year-data";
import { careerYears } from "./year-data";

const careerYearNavItems = [
  {
    year: "2021",
    description: "初入 ALGS 职业赛场，打出第一声回响。",
    tags: ["#出道", "#证明"],
  },
  {
    year: "2022",
    description: "进入 MDY 时期，在队伍磨合和职业节奏里继续累积经验。",
    tags: ["#成长", "#MDY"],
  },
  {
    year: "2023",
    description: "VKG 成立，职业路线迎来新的队伍身份和重要转折。",
    tags: ["#转折", "#VKG"],
  },
  {
    year: "2024",
    description: "首次闯入线下赛舞台，把职业生涯推进到世界赛现场。",
    tags: ["#线下赛", "#突破"],
  },
  {
    year: "2025",
    description: "站上 EWC 兼 ALGS 季中赛决赛顶点，写下 CNAPEX 冠军时刻。",
    tags: ["#冠军", "#世界赛"],
  },
  {
    year: "2026",
    description: "继续代表 VKG 出征，在新赛季里延续故事与挑战。",
    tags: ["#继续出征", "#新赛季"],
  },
];

type TimelineEvent = {
  time: string;
  title: string;
  text: string;
  videos?: CareerVideo[];
};

const careerEvents: TimelineEvent[] = [
  {
    time: "2021.06",
    title: "星空杯一打三",
    text: "赛场首秀",
    videos: [
      {
        cover:"/images/career/2021/星空杯一打三.avif",
        text: "【APEX/卡莎/星空杯】我要一打三！我要一打三了！",
        href: "https://www.bilibili.com/video/BV1354y1H7Ex",
      },
    ],
  },
  {
    time: "2021.11",
    title: "从0开始单排上猎杀",
    text: "打破质疑，证明实力",
    videos: [
      {
        cover:"/images/career/2021/国内第一个单排猎杀！.avif",
        text: "国内第一个单排猎杀！",
        href: "https://www.bilibili.com/video/BV1h34y1Z7Cq",
      },
    ],
  },
  {
    time: "2023.02",
    title: "VKG成立",
    text: " ",
  },
  {
    time: "2023.03",
    title: "四人小队事件",
    text: "禁赛半年",
    videos: [
      {
        cover:"/images/career/2023/【派圈梗百科】四人小队  教练场外？作弊行为？.avif",
        text: "【派圈梗百科】四人小队 | 教练场外？作弊行为？",
        href: "https://www.bilibili.com/video/BV1jo4y1q7kz",
      },
    ],
  },
  {
    time: "2024.01",
    title: "Aono is back!",
    text: "我是为了爱回来的",
    videos: [
      {
        cover:"/images/career/2024/【卡莎】aono回归全过程，五小时精剪.avif",
        text: "【卡莎】aono回归全过程，五小时精剪",
        href: "https://www.bilibili.com/video/BV17k4y197DP",
      },
    ],
  },
  {
    time: "2024.08",
    title: "德国曼哈姆季后赛",
    text: "卡莎首次进入线下赛",
    videos: [
      {
        cover:"/images/career/2024/【VKG】卡哥第一次世界赛发癫不停唱歌，QQ怒斥别吵！.avif",
        text: "[VKG]卡哥第一次世界赛发癫不停唱歌，QQ怒斥别吵！",
        href: "https://www.bilibili.com/video/BV1VsHTexESs",
      },
    ],
  },
  {
    time: "2025.2",
    title: "2025札幌冠军赛",
    text: "再次出战线下赛",
    videos: [
      {
        cover:"/images/career/2025/【QQ飞车vkg队内语音视角】卡哥也没绷住 这下真QQ飞车了.avif",
        text: "【QQ飞车vkg队内语音视角】卡哥也没绷住 这下真QQ飞车了",
        href: "https://www.bilibili.com/video/BV1LwFfe2Eha",
      },
    ],
  },
  {
    time: "2025.7",
    title: "EWC电竞世界杯&ALGS季中赛决赛",
    text: "我们是冠军！",
    videos: [
      {
        cover: "/images/career/2025/【EWC电竞世界杯】恭喜VKG夺得世界冠军！.avif",
        text: "【EWC电竞世界杯】恭喜VKG夺得世界冠军！",
        href: "https://www.bilibili.com/video/BV1EwuYzYEBF",
      },
    ],
  },
  {
    time: "2026.1",
    title: "2026札幌冠军赛",
    text: "继续出征，无奈路边，败者组出局",
    videos: [
      {
        cover: "/images/career/2026/【VKG】彻底爆炸！卡莎到底要干几把啥啊！.avif",
        text: "【VKG】彻底爆炸！卡莎:\"到底要干几把啥啊！\"",
        href: "https://www.bilibili.com/video/BV131rSBcEX3/",
      },
    ],
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
          <nav className="year-zigzag-timeline" aria-label="按年份进入更细的职业生涯记录">
            <svg className="year-zigzag-line" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="career-year-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#8ca99a" />
                  <stop offset="45%" stopColor="#4f7767" />
                  <stop offset="72%" stopColor="#b79b63" />
                  <stop offset="100%" stopColor="#6f9483" />
                </linearGradient>
                <linearGradient id="career-year-flow" x1="-100%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#5f8876" />
                  <stop offset="22%" stopColor="#cdbb83" />
                  <stop offset="46%" stopColor="#f7edbd" />
                  <stop offset="68%" stopColor="#75a18c" />
                  <stop offset="100%" stopColor="#4f7767" />
                  <animate attributeName="x1" dur="4.8s" repeatCount="indefinite" values="-100%;0%;100%" />
                  <animate attributeName="x2" dur="4.8s" repeatCount="indefinite" values="0%;100%;200%" />
                </linearGradient>
              </defs>
              <polyline className="year-zigzag-line-glow" points="62 136 238 92 412 132 588 86 762 136 938 92" stroke="rgba(151, 175, 160, 0.45)" />
              <polyline className="year-zigzag-line-main" points="62 136 238 92 412 132 588 86 762 136 938 92" stroke="url(#career-year-line)" />
              <polyline className="year-zigzag-line-flow" points="62 136 238 92 412 132 588 86 762 136 938 92" stroke="url(#career-year-flow)" />
            </svg>
            <div className="year-zigzag-list">
              {careerYears.map((item, index) => {
                const navItem = careerYearNavItems.find((yearItem) => yearItem.year === item.year);
                const isUpper = index % 2 === 0;

                return (
                  <Link
                    className={`year-zigzag-item ${isUpper ? "is-upper" : "is-lower"}`}
                    href={`/career/${item.year}`}
                    key={item.year}
                  >
                    <span className="year-zigzag-node" aria-hidden="true">
                      <span>{item.year.slice(2)}</span>
                    </span>
                    <span className="year-zigzag-card">
                      <span className="eyebrow">{item.year}</span>
                      <span className="year-zigzag-title">{item.title}</span>
                      <span className="year-zigzag-description">{navItem?.description || item.summary}</span>
                      {navItem?.tags?.length ? (
                        <span className="year-zigzag-tags">
                          {navItem.tags.map((tag) => (
                            <span className="soft-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
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
                  <TimelineEventVideos displayTitle={event.title} videos={event.videos} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
