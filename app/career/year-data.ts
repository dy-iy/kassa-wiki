export type CareerEventLink = {
  label: string;
  href: string;
};

export type CareerEvent = {
  id: string;
  season: string;
  title: string;
  image: string;
  description: string;
  links: CareerEventLink[];
};

export const careerYears = [
  {
    year: "2021",
    title: "初入职业赛场",
    summary: "以替补和训练赛选手身份进入职业环境，开始形成个人比赛节奏。",
    team: "Open Trial",
    role: "试训 / 替补",
    highlight: "完成区域杯赛首秀，建立基础英雄池和对局记录。",
    events: [
      {
        id: "open-training",
        season: "春季",
        title: "参与公开训练赛",
        image: "",
        description: "第一次进入固定训练赛体系，记录选手定位和常用阵容。",
        links: [
          {
            label: "查看比赛记录",
            href: "https://example.com",
          },
        ],
      },
      {
        id: "regional-cup-debut",
        season: "夏季",
        title: "区域杯赛登场",
        image: "",
        description: "以替补身份完成杯赛亮相，积累正式比赛经验。",
        links: [],
      },
      {
        id: "review-archive",
        season: "冬季",
        title: "复盘资料归档",
        image: "",
        description: "开始整理个人录像、地图决策和英雄池变化。",
        links: [],
      },
    ],
  },
  {
    year: "2022",
    title: "加入首支固定队伍",
    summary: "进入稳定队伍阵容，承担突击位职责，比赛经验明显增加。",
    team: "North Paper",
    role: "突击位",
    highlight: "完成首个完整赛段，队伍协同和近点处理进入稳定期。",
    events: [
      {
        id: "join-roster",
        season: "春季",
        title: "签入固定阵容",
        image: "",
        description: "与队伍建立训练周期，确定突击位和主力英雄选择。",
        links: [],
      },
      {
        id: "regular-season",
        season: "秋季",
        title: "常规赛参赛",
        image: "",
        description: "参与多轮区域常规赛，积累转点和决赛圈经验。",
        links: [],
      },
      {
        id: "team-review",
        season: "年末",
        title: "队伍复盘",
        image: "",
        description: "整理全年对局数据，为下一阶段调整打法。",
        links: [],
      },
    ],
  },
  {
    year: "2023",
    title: "打法转型与数据积累",
    summary: "从单点突破转向更完整的团队协同，个人数据和团队复盘同步沉淀。",
    team: "North Paper",
    role: "突击位 / 协同突破",
    highlight: "近战参与率提升，开始承担更多信息交换职责。",
    events: [
      {
        id: "legend-pool",
        season: "上半年",
        title: "英雄池扩展",
        image: "",
        description: "根据版本变化补充控制和位移类角色，增强阵容弹性。",
        links: [],
      },
      {
        id: "rotation-pace",
        season: "中期",
        title: "转点节奏调整",
        image: "",
        description: "队伍从慢速运营转向更主动的边缘推进。",
        links: [],
      },
      {
        id: "data-review-system",
        season: "下半年",
        title: "数据复盘体系成型",
        image: "",
        description: "建立击倒、承伤、转点路线和圈型表现记录。",
        links: [],
      },
    ],
  },
  {
    year: "2024",
    title: "进入 ALGS 主舞台",
    summary: "随队进入更高强度赛程，代表赛事与个人表现开始进入 Wiki 主归档。",
    team: "Ink Trace",
    role: "主力突击位",
    highlight: "首次在 ALGS 赛程中获得稳定积分。",
    events: [
      {
        id: "join-ink-trace",
        season: "Split 1",
        title: "加入 Ink Trace",
        image: "",
        description: "完成队伍转换，重新磨合沟通和阵容分工。",
        links: [],
      },
      {
        id: "algs-regular-run",
        season: "Split 2",
        title: "ALGS 稳定参赛",
        image: "",
        description: "在多轮赛程中保持积分，形成代表性比赛样本。",
        links: [],
      },
      {
        id: "key-matches",
        season: "年末",
        title: "关键局归档",
        image: "",
        description: "整理吃鸡局、转折局和高光对局。",
        links: [],
      },
    ],
  },
  {
    year: "2025",
    title: "稳定竞争与荣誉积累",
    summary: "进入稳定竞争阶段，队伍成绩、个人高光和赛后访谈逐步完善。",
    team: "Ink Trace",
    role: "主力突击位",
    highlight: "区域赛事排名提升，形成稳定赛事履历。",
    events: [
      {
        id: "regional-breakthrough",
        season: "春季",
        title: "区域赛突破",
        image: "",
        description: "队伍排名进入前列，个人对枪与协同数据提升。",
        links: [],
      },
      {
        id: "roster-adjustment",
        season: "夏季",
        title: "阵容微调",
        image: "",
        description: "根据版本和队伍需求调整职责，提升残局处理比例。",
        links: [],
      },
      {
        id: "honor-archive",
        season: "冬季",
        title: "荣誉记录补完",
        image: "",
        description: "汇总年度成绩、采访和关键复盘链接。",
        links: [],
      },
    ],
  },
  {
    year: "2026",
    title: "资料持续更新",
    summary: "当前年度页面用于接入实时赛程、转会、队伍变动和后续荣誉。",
    team: "Ink Trace",
    role: "职业选手",
    highlight: "年度数据等待真实接口接入。",
    events: [
      {
        id: "season-opening",
        season: "春季",
        title: "新赛季开局",
        image: "",
        description: "保留常规赛记录位，后续可接入每周积分。",
        links: [],
      },
      {
        id: "team-updates",
        season: "夏季",
        title: "队伍动态",
        image: "",
        description: "记录阵容调整、训练方向和比赛节奏变化。",
        links: [],
      },
      {
        id: "wiki-maintenance",
        season: "持续",
        title: "Wiki 数据维护",
        image: "",
        description: "同步更新比赛成绩、个人简介和职业生涯节点。",
        links: [],
      },
    ],
  },
];

export const careerYearMap = new Map(careerYears.map((item) => [item.year, item]));
