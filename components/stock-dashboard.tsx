"use client"

import * as React from "react"
import {
  TrendingUp,
  BarChart3,
  Bell,
  Settings,
  User,
  Home,
  Wallet,
  Activity,
  GraduationCap,
  Search,
  RefreshCw,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DashboardOverview } from "./dashboard-overview"
import { PortfolioManager } from "./portfolio-manager"
import { TradingInterface } from "./trading-interface"
import { PerformanceAnalytics } from "./performance-analytics"
import { EducationalResources } from "./educational-resources"
import { NotificationCenter } from "./notification-center"

const navigation = [
  {
    title: "Dashboard",
    items: [
      { title: "Overview", icon: Home, id: "overview" },
      { title: "Portfolio", icon: Wallet, id: "portfolio" },
      { title: "Trading", icon: Activity, id: "trading" },
      { title: "Analytics", icon: BarChart3, id: "analytics" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Education", icon: GraduationCap, id: "education" },
      { title: "Notifications", icon: Bell, id: "notifications" },
    ],
  },
  {
    title: "Account",
    items: [
      { title: "Profile", icon: User, id: "profile" },
      { title: "Settings", icon: Settings, id: "settings" },
    ],
  },
]

export function StockDashboard() {
  const [activeTab, setActiveTab] = React.useState("overview")
  const [isRefreshing, setIsRefreshing] = React.useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />
      case "portfolio":
        return <PortfolioManager />
      case "trading":
        return <TradingInterface />
      case "analytics":
        return <PerformanceAnalytics />
      case "education":
        return <EducationalResources />
      case "notifications":
        return <NotificationCenter />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TrendingUp className="size-4" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">StockTrader Pro</span>
              <span className="text-xs text-muted-foreground">Dashboard</span>
            </div>
          </div>
          <form className="px-2">
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <SidebarInput placeholder="Search stocks..." className="pl-8" />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>
        <SidebarContent>
          {navigation.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild isActive={activeTab === item.id} onClick={() => setActiveTab(item.id)}>
                        <button className="w-full">
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
              <Badge variant="secondary" className="text-xs">
                Live Data
              </Badge>
            </div>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`size-4 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </header>
        <div className="flex-1 p-4">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
