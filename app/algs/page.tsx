import { CalendarDays, Medal, TrendingUp, Trophy } from "lucide-react";

const results = [
  {
    event: "ALGS Split 1 Pro League",
    date: "2026 春季",
    team: "Ink Trace",
    rank: "第 3 名",
    points: "82 pts",
  },
  {
    event: "ALGS Regional Finals",
    date: "2026 夏季",
    team: "Paper Moon",
    rank: "第 1 名",
    points: "96 pts",
  },
  {
    event: "ALGS Championship Qualifier",
    date: "2026 秋季",
    team: "Mist Archive",
    rank: "第 6 名",
    points: "61 pts",
  },
];

const stats = [
  ["最高排名", "第 1 名"],
  ["记录赛事", "03 场"],
  ["总积分", "239 pts"],
];

export default function AlgsPage() {
  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="hero-panel grid min-h-0 gap-8 py-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <Trophy className="size-4" />
              ALGS 比赛成绩
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#17211f] sm:text-5xl">
              赛事成绩归档
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              用于沉淀 ALGS 队伍成绩、积分、排名和阶段表现。当前数据为静态示例，后续可替换为接口返回。
            </p>
          </div>

          <aside className="ink-summary">
            <TrendingUp className="mb-4 size-6 text-[#526961]" />
            <div className="grid grid-cols-3 gap-3 text-center">
              {stats.map(([label, value]) => (
                <div className="rounded-md border border-[#d9d2c2] bg-[#fffdf8]/70 p-3" key={label}>
                  <strong className="block text-xl text-[#20302c]">{value}</strong>
                  <span className="text-xs text-[#708079]">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <Medal className="size-5" />
            <div>
              <h2>成绩列表</h2>
              <p>按赛事阶段展示队伍名次与积分。</p>
            </div>
          </div>

          <div className="result-table">
            {results.map((result) => (
              <article className="result-row" key={result.event}>
                <div>
                  <p className="eyebrow">{result.date}</p>
                  <h3>{result.event}</h3>
                </div>
                <span>{result.team}</span>
                <strong>{result.rank}</strong>
                <em>{result.points}</em>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <CalendarDays className="size-5" />
            <div>
              <h2>赛季时间线</h2>
              <p>记录比赛节点和后续复盘入口。</p>
            </div>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <time>Split 1</time>
              <div>
                <h3>常规赛阶段</h3>
                <p>记录每周分数、阵容变化和地图池表现。</p>
              </div>
            </article>
            <article className="timeline-item">
              <time>Finals</time>
              <div>
                <h3>区域决赛</h3>
                <p>沉淀关键局、吃鸡局和晋级分线。</p>
              </div>
            </article>
            <article className="timeline-item">
              <time>Champs</time>
              <div>
                <h3>冠军赛资格</h3>
                <p>后续可关联队伍、选手和比赛录像。</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
