import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowUpRight,
  Beaker,
  Brain,
  Building2,
  CalendarDays,
  FileText,
  Globe2,
  Menu,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type NavItem = {
  to: string
  title: string
  description: string
  icon: LucideIcon
}

type NavGroup = {
  value: string
  label: string
  tagline: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    value: "solutions",
    label: "Solutions",
    tagline: "Where market teams plug in",
    items: [
      {
        to: "/reports?category=artificial-intelligence",
        title: "Growth strategy desks",
        description: "Opportunity maps, TAM sizing, and runway modelling updated daily.",
        icon: TrendingUp,
      },
      {
        to: "/reports?category=digital-health",
        title: "Product innovation labs",
        description: "Translate signal spikes into validated roadmap bets in one workspace.",
        icon: Beaker,
      },
      {
        to: "/reports?category=renewable-energy",
        title: "Corporate development",
        description: "Track competitive moves, deal velocity, and market beats in real time.",
        icon: Building2,
      },
    ],
  },
  {
    value: "research",
    label: "Research",
    tagline: "Curated coverage by market",
    items: [
      {
        to: "/reports",
        title: "All market reports",
        description: "Analyst-grade research with downloadable models and executive briefs.",
        icon: FileText,
      },
      {
        to: "/reports?category=artificial-intelligence",
        title: "AI & intelligent systems",
        description: "GenAI, automation, and infrastructure demand forecasts out to 2030.",
        icon: Brain,
      },
      {
        to: "/reports?category=renewable-energy",
        title: "Climate & energy",
        description: "Storage, mobility, policy, and investment flows across key regions.",
        icon: Globe2,
      },
    ],
  },
  {
    value: "resources",
    label: "Resources",
    tagline: "Keep leadership aligned",
    items: [
      {
        to: "/blog",
        title: "Insight briefings",
        description: "Weekly commentary, signal deep dives, and launch playbooks.",
        icon: Star,
      },
      {
        to: "/about",
        title: "Analyst collective",
        description: "Meet the specialists decoding movement across 60+ categories.",
        icon: Target,
      },
      {
        to: "/privacy",
        title: "Data & trust",
        description: "Understand how we steward proprietary data and model governance.",
        icon: CalendarDays,
      },
    ],
  },
]

const utilityLinks = [
  { label: "About", to: "/about" },
  { label: "Reports", to: "/reports" },
  { label: "Blog", to: "/blog" },
  { label: "Terms", to: "/terms" },
]

export function Header() {
  const [openMenu, setOpenMenu] = useState<string>("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu("")
        setMobileOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="hidden border-b border-border/60 bg-muted/60 py-2 text-xs text-muted-foreground/90 md:block">
        <div className="container flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium tracking-[0.2em] uppercase">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            New: 2026 Horizon Heatmaps for 8 industries
          </span>
          <Link
            to="/reports?featured=true"
            className="inline-flex items-center gap-1 font-semibold text-foreground transition hover:text-primary"
          >
            View release notes
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-3 py-2 transition hover:border-primary/50 hover:bg-card"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/90 via-primary to-primary/70 text-primary-foreground shadow-md shadow-primary/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-foreground">
              StatStrive
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-muted-foreground transition group-hover:text-foreground/80">
              Market Research Cloud
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <NavigationMenu
            value={openMenu}
            onValueChange={(value) => {
              if (!value) {
                setOpenMenu("")
              }
            }}
            ref={menuRef}
            className="rounded-full border border-border/80 bg-background/70 px-2 py-1"
          >
            <NavigationMenuList className="gap-1">
              {navGroups.map((group) => (
                <NavigationMenuItem key={group.value} value={group.value}>
                  <NavigationMenuTrigger
                    className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                    onClick={(event) => {
                      event.preventDefault()
                      setOpenMenu((prev) => (prev === group.value ? "" : group.value))
                    }}
                    onPointerEnter={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                    onPointerMove={(event) => event.preventDefault()}
                  >
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    onPointerEnter={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                  >
                    <div className="w-[520px] rounded-3xl border border-border/70 bg-card/95 p-6 shadow-xl shadow-primary/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        {group.tagline}
                      </p>
                      <div className="mt-4 grid gap-3">
                        {group.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="group/link flex items-start gap-4 rounded-2xl border border-transparent px-4 py-3 transition hover:border-primary/30 hover:bg-primary/5"
                            onClick={() => setOpenMenu("")}
                          >
                            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-foreground group-hover/link:text-primary">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/reports"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                  >
                    Library
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="hidden h-11 rounded-full border border-border/70 px-5 text-sm font-semibold text-foreground/80 transition hover:border-primary/50 hover:text-primary lg:inline-flex"
            asChild
          >
            <Link to="/blog">Signal Briefings</Link>
          </Button>
          <Button
            className="hidden h-11 rounded-full px-5 text-sm font-semibold shadow-sm shadow-primary/20 lg:inline-flex"
            asChild
          >
            <Link to="/reports">
              Request briefing
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-border/60 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation</span>
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-4 top-24 z-50 origin-top rounded-3xl border border-border/70 bg-card/95 p-6 shadow-2xl shadow-primary/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Navigate
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close navigation</span>
              </Button>
            </div>

            <div className="mt-6 space-y-6">
              {navGroups.map((group) => (
                <div key={group.value} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold text-foreground/90"
                      >
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p>{item.title}</p>
                          <p className="text-xs font-normal text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              <Button className="w-full" asChild>
                <Link to="/reports">
                  Launch free workspace
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}