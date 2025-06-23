"use client"
import { TrendingUp, DollarSign, Activity, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StockChart } from "./stock-chart"
import { MarketOverview } from "./market-overview"
import { TopStocks } from "./top-stocks"
import { RecentTransactions } from "./recent-transactions"

const portfolioStats = [
  {
    title: "Total Portfolio Value",
    value: "$124,532.50",
    change: "+2.4%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Today's Gain/Loss",
    value: "+$2,847.32",
    change: "+2.34%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Total Investments",
    value: "$98,450.00",
    change: "+1.2%",
    changeType: "positive" as const,
    icon: Target,
  },
  {
    title: "Active Positions",
    value: "12",
    change: "+2",
    changeType: "positive" as const,
    icon: Activity,
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Portfolio Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {portfolioStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge variant={stat.changeType === "positive" ? "default" : "destructive"} className="text-xs">
                  {stat.change}
                </Badge>
                <span>from yesterday</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Portfolio Performance Chart */}
        <div className="lg:col-span-2">
          <StockChart />
        </div>

        {/* Market Overview */}
        <div>
          <MarketOverview />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TopStocks />
        <RecentTransactions />
      </div>
    </div>
  )
}
