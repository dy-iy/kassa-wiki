export type CareerVideo = {
  cover: string;
  text: string;
  href: string;
};

export type CareerEvent = {
  title: string;
  date: string;
  description: string;
  videos: CareerVideo[];
};

export const careerYears = [
  {
    year: "2021",
    title: "初入algs职业赛场",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
    ],
  },
  {
    year: "2022",
    title: "待补充",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
    ],
  },
  {
    year: "2023",
    title: "",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
    ],
  },
  {
    year: "2024",
    title: "",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
    ],
  },
  {
    year: "2025",
    title: "",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "元旦祝福",
        date: "2025-01-01",
        description: "",
        videos: [
          {
            cover: "/images/career/2025/VKG全员祝您元旦快乐！.avif",
            text: "VKG全员祝您元旦快乐！",
            href: "https://www.bilibili.com/video/BV1UaiKBHEN2",
          },
        ],
      },
      {
        title: "不要笑挑战",
        date: "2025-01-14",
        description: "",
        videos: [
          {
            cover: "/images/career/2025/【VKG】不要笑挑战.avif",
            text: "【VKG】不要笑挑战",
            href: "https://www.bilibili.com/video/BV1pFrxBCEWi/",
          },
        ],
      },
      {
        title: "拜年",
        date: "2025-01-28",
        description: " ",
        videos: [
          {
            cover: "/images/career/2025/VK加速器和VKGaming给大家拜年了！.avif",
            text: "VK加速器和VKGaming给大家拜年了！",
            href: "https://www.bilibili.com/video/BV1BLFxeZE32",
          },
        ],
      },
      {
        title: "札幌冠军赛 ALGS Year 4 Championship - Split2",
        date: "2025-02",
        description: "",
        videos: [],
      },
      {
        title: "常规赛",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "EWC电竞世界杯",
        date: "",
        description: "",
        videos: [
          {
            cover: "/images/career/2025/【沙特石油杯官方宣传片】冠军 VKG 的超帅宣传片！.avif",
            text: "【沙特石油杯官方宣传片】冠军 VKG 的超帅宣传片！",
            href: "https://www.bilibili.com/video/BV1Pn3qz9Ec6",
          },
          {
            cover: "/images/career/2025/【VKG夺冠第一视角】EWC 2025 季中赛Day4决赛.avif",
            text: "【VKG夺冠第一视角】EWC/ALGS 2025 季中赛Day4决赛",
            href: "https://www.bilibili.com/video/BV17juqzzEiZ",
          },
          {
            cover: "/images/career/2025/【EWC电竞世界杯】恭喜VKG夺得世界冠军！.avif",
            text: "【EWC电竞世界杯】恭喜VKG夺得世界冠军！",
            href: "https://www.bilibili.com/video/BV1EwuYzYEBF/",
          },
          {
            cover: "/images/career/2025/【VKG】我们是EWC世界冠军！.avif",
            text: "【VKG】我们是EWC世界冠军！",
            href: "https://www.bilibili.com/video/BV1gHuYzSEBr",
          },
          {
            cover: "/images/career/2025/这并非一场梦，天上下起金色的雨！.avif",
            text: "这并非一场梦，天上下起金色的雨！",
            href: "https://www.bilibili.com/video/BV1FJunzYEVW",
          },
        ],
      },
    ],
  },
  {
    year: "2026",
    title: "",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "",
        date: "",
        description: "",
        videos: [],
      },
    ],
  },
];

export const careerYearMap = new Map(careerYears.map((item) => [item.year, item]));
