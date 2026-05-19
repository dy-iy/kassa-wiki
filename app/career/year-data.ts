export type CareerVideo = {
  cover?: string;
  text: string;
  href: string;
};

export type CareerEvent = {
  title: string;
  date: string;
  description: string;
  videos: CareerVideo[];
};

const md = (content: string) => {
  const lines = content.replace(/^\n/, "").replace(/\n\s*$/, "").split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^ */)?.[0].length ?? 0);
  const minIndent = indents.length > 0 ? Math.min(...indents) : 0;

  return lines.map((line) => line.slice(minIndent)).join("\n");
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
    title: "MDY时期",
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
    title: "VKG成立",
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
    title: "第一次进线下赛",
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
    title: "CNAPEX第一个世界赛冠军",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "元旦祝福",
        date: "2025-01-01",
        description: "卡莎、QQ、老吊一起拍元旦祝福",
        videos: [
          {
            cover: "/images/career/2025/VKG全员祝您元旦快乐！.avif",
            text: "VKG全员祝您元旦快乐！",
            href: "https://www.bilibili.com/video/BV1UaiKBHEN2",
          },
        ],
      },
      
      {
        title: "拜年",
        date: "2025-01-28",
        description: "继元旦祝福后还有拜年视频 ",
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
        description: md(`

          `),
        videos: [],
      },
      {
        title: "常规赛",
        date: "",
        description: "",
        videos: [],
      },
      {
        title: "Midseason Playoffs/EWC - Split 1",
        date: "2025-07",
        description: md(`
          ## Day2 Group B

          Day2 小组赛阶段，VKG 被分在 Group B，与 Alliance、100 Thieves、ROC Esports 等强队同场竞争。


          | 对局 | 排名 | Kills | Score |
          | --- | ---: | ---: | ---: |
          | Game #1 | 12 | 1 | 3 |
          | Game #2 | 3 | 3 | 12 |
          | Game #3 | 1 | 11 | 23 |
          | Game #4 | 11 | 1 | 3 |
          | Game #5 | 20 | 0 | 0 |
          | Game #6 | 12 | 2 | 3 |
          | Game #7 | 7 | 5 | 8 |
          | Game #8 | 8 | 0 | 5 |
          | Game #9 | 20 | 0 | 0 |
          | Game #10 | 5 | 4 | 8 |

          这一天的 VKG 并不是全场最耀眼的队伍。他们既有 Game #3 的 11 杀吃鸡高光，也经历了多局低分，甚至零分局的波动。十局比赛结束后，VKG 最终以 65 分、27 个击杀排名小组第 6，成功拿到晋级 Finals 的资格。

          相比之下，Alliance 在小组赛阶段展现出了极强的统治力。作为一支典型的圈边强队，他们在 Game #2 打出 20 Kills，Game #4 打出 22 Kills，Game #9 再次拿下 17 Kills，三局捍卫者级别的表现直接拉开分差，最终以 135 分断层领先。

          Alliance 同时也是 2024 EWC 的冠军，因此在当时很多观众看来，他们依然是本届赛事最有冠军相的队伍之一。与 Alliance 的强势相比，Day2 的 VKG 更像是在低调蓄力：他们没有一路碾压，却稳住了晋级所需的关键分数，把真正的爆发留到了最后一天。

          ![Day2数据](/images/career/2025/Day2data.png)

          ## Day4 Finals

          Day4 Finals 采用赛点制。队伍需要先达到赛点门槛，随后再拿下一局捍卫者，才能真正锁定冠军。相比小组赛，决赛的竞争强度和心理压力都被进一步拉满。场上不仅有状态火热的 Alliance，还有 Gen.G、Team Falcons、FNATIC 等世界级强队，每一局的失误都可能直接影响冠军归属。

          决赛第一局，VKG 就以 7 杀吃鸡、单局 19 分强势开局，直接把自己送入争冠行列。接下来的几局，VKG 没有出现大幅掉速，而是稳扎稳打，持续拿到排名分和击杀分。第五局，VKG 以 10 杀第 3 的成绩拿下 15 分，成功开启赛点。

          从这一刻开始，VKG 只需要再吃下一鸡，就能直接夺冠。也正因如此，后面的每一局都变得格外紧张。

          Game #8 的最后决赛圈，VKG 队伍只剩 QQ 一人独狼存活。在巨大压力下，QQ 手持克雷贝尔连续寻找机会，可惜几枪未能命中关键目标。最终，他选择稳住局面，清掉独狼并拿下第二名。虽然这一局没能直接终结比赛，但 VKG 依然拿到了宝贵分数，也将悬念继续保留到下一局。

          真正的冠军转折点出现在 Game #9 的电力区。VKG 在小屋遭到 LIQUID 强冲，卡莎和老吊先后倒地，局势一度濒临崩盘。关键时刻，QQ 凭借极强的身法、身位控制和近距离枪法完成一打三兜底，硬生生把队伍从悬崖边拉了回来。这波操作不仅挽救了整局比赛，也为 VKG 后续争夺冠军局奠定了基础。

          最后决赛圈，VKG 三人重新站稳阵型，成功踩住高点。依靠兰伯特板子的火力压制和队伍之间的默契配合，他们牢牢控制住圈内空间，最终拿下捍卫者，完成赛点制夺冠。

          从 Day2 小组第 6 到 Day4 决赛登顶，VKG 的冠军之路并不是一路顺风，而是在波动、压力和绝境中一步步打出来的。尤其是 Game #9，QQ 的关键兜底和全队最后的高点控图，让这场胜利真正成为了属于 VKG 的世界冠军时刻。

          | 对局 | 排名 | Kills | Score |
          | --- | ---: | ---: | ---: |
          | Game #1 | 1 | 7 | 19 |
          | Game #2 | 7 | 4 | 7 |
          | Game #3 | 5 | 2 | 7 |
          | Game #4 | 12 | 1 | 3 |
          | Game #5 | 3 | 10 | 15 |
          | Game #6 | 6 | 5 | 6 |
          | Game #7 | 14 | 1 | 2 |
          | Game #8 | 2 | 3 | 12 |
          | Game #9 | 1 | 13 | 25 |

          ![Day4数据](/images/career/2025/Day4data.png)
        `),
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
          {
            cover: "/images/career/2025/纯粹的坚持，真的能等到石破天惊的回响.avif",
            text: "纯粹的坚持，真的能等到石破天惊的回响",
            href: "https://www.bilibili.com/video/BV1rbgGz7ECH",
          },
        ],
      },
    ],
  },
  {
    year: "2026",
    title: "VKG继续出征",
    summary: "",
    team: "",
    role: "",
    highlight: "",
    events: [
      {
        title: "不要笑挑战",
        date: "2026-01-14",
        description: "",
        videos: [
          {
            cover: "/images/career/2026/【VKG】不要笑挑战.avif",
            text: "【VKG】不要笑挑战",
            href: "https://www.bilibili.com/video/BV1pFrxBCEWi/",
          },
        ],
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
