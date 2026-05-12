import { BadgeCheck, MapPin, Search, Shield, UserRound } from "lucide-react";

const players = [
  {
    name: "Kassa",
    role: "突击位",
    region: "APAC North",
    team: "Ink Trace",
    summary: "擅长先手突破和近点信息交换，是队伍在混战阶段的主要节奏点。",
    tags: ["Entry", "近战", "节奏"],
  },
  {
    name: "Mori",
    role: "指挥位",
    region: "APAC South",
    team: "Paper Moon",
    summary: "偏稳健的地图阅读者，常通过提前转点为队伍争取决赛圈站位。",
    tags: ["IGL", "转点", "运营"],
  },
  {
    name: "Lumen",
    role: "支援位",
    region: "EMEA",
    team: "Mist Archive",
    summary: "负责资源分配、交叉火力和复盘记录，残局处理风格冷静。",
    tags: ["Support", "残局", "资源"],
  },
];

export default function PlayersPage() {
  return (
    <div className="ink-wiki min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="hero-panel grid min-h-0 gap-8 py-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#cfd8cf] bg-white/55 px-3 py-1 text-sm text-[#526961]">
              <UserRound className="size-4" />
              选手简介
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#17211f] sm:text-5xl">
              ALGS 选手档案
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6d67] sm:text-lg">
              这里用于展示选手身份、队伍、赛区、定位与标签。当前为静态样例，后续可以接入真实选手数据库。
            </p>
          </div>

          <label className="group flex h-12 w-full items-center gap-2 rounded-md border border-[#d6d0c0] bg-white/75 px-4 text-sm shadow-sm transition focus-within:border-[#7c988b] focus-within:bg-white">
            <Search className="size-4 text-[#789085] transition group-focus-within:text-[#30413d]" />
            <input
              className="w-full bg-transparent text-[#26312f] outline-none placeholder:text-[#8b948c]"
              placeholder="搜索选手、队伍、赛区"
              type="search"
            />
          </label>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <Shield className="size-5" />
            <div>
              <h2>选手列表</h2>
              <p>每张卡片对应一个选手简介入口。</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {players.map((player) => (
              <article className="wiki-card" key={player.name}>
                <div className="avatar-wash bg-gradient-to-br from-cyan-50 via-white to-stone-100">
                  <span>{player.name.slice(0, 1)}</span>
                </div>
                <h3>{player.name}</h3>
                <p className="role">{player.team} / {player.role}</p>
                <p className="quote">{player.summary}</p>
                <dl className="info-list mt-4">
                  <div>
                    <dt>赛区</dt>
                    <dd>{player.region}</dd>
                  </div>
                </dl>
                <div className="tag-row">
                  {player.tags.map((tag) => (
                    <span key={tag}>
                      <BadgeCheck className="size-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block detail-grid">
          <div className="portrait-panel">
            <div className="portrait-mark">
              <span>K</span>
            </div>
            <div>
              <p className="eyebrow">当前样例选手</p>
              <h2>Kassa</h2>
              <p>用于后续真实数据接入的详情展示位，可以扩展为单独选手详情页、履历、英雄池和比赛记录。</p>
            </div>
          </div>
          <div className="profile-panel">
            <div className="section-heading compact">
              <MapPin className="size-5" />
              <div>
                <h2>基础资料</h2>
                <p>选手页常用字段。</p>
              </div>
            </div>
            <dl className="info-list">
              <div>
                <dt>队伍</dt>
                <dd>Ink Trace</dd>
              </div>
              <div>
                <dt>位置</dt>
                <dd>突击位</dd>
              </div>
              <div>
                <dt>赛区</dt>
                <dd>APAC North</dd>
              </div>
              <div>
                <dt>状态</dt>
                <dd>活跃</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </div>
  );
}
