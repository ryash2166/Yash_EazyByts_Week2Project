"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketIndices = [
  {
    name: "S&P 500",
    symbol: "SPX",
    value: "4,567.89",
    change: "+23.45",
    changePercent: "+0.52%",
    trend: "up" as const,
  },
  {
    name: "NASDAQ",
    symbol: "IXIC",
    value: "14,234.56",
    change: "+89.12",
    changePercent: "+0.63%",
    trend: "up" as const,
  },
  {
    name: "Dow Jones",
    symbol: "DJI",
    value: "34,567.89",
    change: "-45.67",
    changePercent: "-0.13%",
    trend: "down" as const,
  },
  {
    name: "Russell 2000",
    symbol: "RUT",
    value: "2,123.45",
    change: "+12.34",
    changePercent: "+0.58%",
    trend: "up" as const,
  },
]

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Major market indices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketIndices.map((index) => (
            <div key={index.symbol} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{index.name}</div>
                <div className="text-sm text-muted-foreground">{index.symbol}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">{index.value}</div>
                <div className="flex items-center space-x-1">
                  {index.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <Badge variant={index.trend === "up" ? "default" : "destructive"} className="text-xs">
                    {index.changePercent}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
