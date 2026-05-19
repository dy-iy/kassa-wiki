import Link from "next/link";
import { CalendarDays, Milestone } from "lucide-react";
import { TimelineEventVideos } from "./timeline-event-videos";
import type { CareerVideo } from "./year-data";
import { careerYears } from "./year-data";

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
