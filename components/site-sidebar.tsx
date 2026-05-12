"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, UserRound } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  {
    href: "/",
    label: "首页",
    icon: Home,
  },
  {
    href: "/players",
    label: "选手简介",
    icon: UserRound,
  },
  {
    href: "/algs",
    label: "ALGS 比赛成绩",
    icon: Trophy,
  },
];

export function SiteSidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="site-shell">
      <aside className="site-sidebar" aria-label="主导航">
        <div className="site-sidebar-brand">
          <span className="site-sidebar-mark">K</span>
          <div>
            <strong>Kassa Wiki</strong>
            <span>人物与赛事实录</span>
          </div>
        </div>

        <nav className="site-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className="site-sidebar-link"
                data-active={active}
                href={item.href}
                key={item.href}
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="site-content">{children}</div>
    </div>
  );
}
