import Image from "next/image";

const captain = {
  name: "卡莎",
  image: "/images/players/卡莎1.png",
};

const teammates = [
  {
    name: "QQ",
    image: "/images/players/QQ1.png",
  },
  {
    name: "老吊",
    image: "/images/players/老吊1.png",
  },
  {
    name: "蛋蛋鼠",
    image: "/images/players/蛋蛋鼠1.png",
  },
];

function PlayerCard({ image, name }: { image: string; name: string }) {
  return (
    <article className="wiki-card">
      <div className="avatar-wash bg-[#f8f7f0]">
        <Image
          alt={name}
          className="relative z-10 h-full w-full object-cover"
          height={720}
          priority={name === "卡莎"}
          src={image}
          width={900}
        />
      </div>
      <h3>{name}</h3>
    </article>
  );
}

export default function PlayersPage() {
  return (
    <div className="ink-wiki players-page min-h-screen overflow-x-hidden text-[#26312f]">
      <div className="ink-wash ink-wash-a" />
      <div className="ink-wash ink-wash-b" />
      <div className="paper-grain" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="hero-panel flex min-h-0 items-center py-8">
          <h1 className="text-balance text-4xl font-semibold leading-tight text-[#17211f] sm:text-5xl lg:text-6xl">
            VKG战队
          </h1>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>队长</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlayerCard image={captain.image} name={captain.name} />
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>队友</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teammates.map((player) => (
              <PlayerCard
                image={player.image}
                key={player.name}
                name={player.name}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
