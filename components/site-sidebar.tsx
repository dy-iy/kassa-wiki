"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, ChevronDown, Home, Trophy, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const careerYears = ["2021", "2022", "2023", "2024", "2025", "2026"];

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  children?: {
    href: string;
    label: string;
  }[];
};

const navItems: NavItem[] = [
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
    href: "/career",
    label: "职业生涯",
    icon: BriefcaseBusiness,
    children: careerYears.map((year) => ({
      href: `/career/${year}`,
      label: year,
    })),
  },
  {
    href: "/algs",
    label: "ALGS 比赛成绩",
    icon: Trophy,
  },
];

export function SiteSidebar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const careerActive = pathname === "/career" || pathname.startsWith("/career/");
  const [careerOpen, setCareerOpen] = useState(careerActive);

  useEffect(() => {
    setCareerOpen(careerActive);
  }, [careerActive, pathname]);

  return (
    <div className="site-shell">
      <aside className="site-sidebar" aria-label="主导航">
        <div className="site-sidebar-brand">
          <span className="site-sidebar-mark">K</span>
          <div>
            <strong>Kassa Wiki</strong>
            <span className="site-sidebar-subtitle">人物与赛事实录</span>
          </div>
        </div>

        <nav className="site-sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            const expanded = item.href === "/career" && active && careerOpen;

            return (
              <div className="site-sidebar-group" data-expanded={expanded} key={item.href}>
                <Link
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="site-sidebar-link"
                  data-active={active}
                  href={item.href}
                  onClick={(event) => {
                    if (item.href === "/career" && pathname === "/career") {
                      event.preventDefault();
                      setCareerOpen((open) => !open);
                    }
                  }}
                >
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                  {item.children ? (
                    <ChevronDown
                      className="site-sidebar-chevron size-4"
                      data-expanded={expanded}
                    />
                  ) : null}
                </Link>

                {item.children && expanded ? (
                  <div className="site-sidebar-subnav">
                    {item.children.map((child) => (
                      <Link
                        aria-current={pathname === child.href ? "page" : undefined}
                        className="site-sidebar-sublink"
                        data-active={pathname === child.href}
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="site-content">{children}</div>
    </div>
  );
}
