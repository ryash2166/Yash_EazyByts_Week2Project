"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Plus } from "lucide-react"

const topStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$175.43",
    change: "+2.34%",
    trend: "up" as const,
    volume: "45.2M",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$2,834.56",
    change: "+1.87%",
    trend: "up" as const,
    volume: "23.1M",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$334.89",
    change: "-0.45%",
    trend: "down" as const,
    volume: "31.7M",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$234.67",
    change: "+3.21%",
    trend: "up" as const,
    volume: "67.8M",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: "$3,456.78",
    change: "+0.89%",
    trend: "up" as const,
    volume: "28.9M",
  },
]

export function TopStocks() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Stocks</CardTitle>
            <CardDescription>Most active stocks today</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-1" />
            Add to Watchlist
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topStocks.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">{stock.symbol.slice(0, 2)}</span>
                </div>
                <div>
                  <div className="font-medium">{stock.symbol}</div>
                  <div className="text-sm text-muted-foreground">{stock.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{stock.price}</div>
                <div className="flex items-center space-x-1">
                  {stock.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <Badge variant={stock.trend === "up" ? "default" : "destructive"} className="text-xs">
                    {stock.change}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">Vol: {stock.volume}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
