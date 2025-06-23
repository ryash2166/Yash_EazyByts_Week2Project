"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Plus, Minus } from "lucide-react"

const portfolioHoldings = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 50,
    avgPrice: "$165.20",
    currentPrice: "$175.43",
    value: "$8,771.50",
    gainLoss: "+$511.50",
    gainLossPercent: "+6.20%",
    allocation: 25.3,
    trend: "up" as const,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    shares: 8,
    avgPrice: "$2,750.00",
    currentPrice: "$2,834.56",
    value: "$22,676.48",
    gainLoss: "+$676.48",
    gainLossPercent: "+3.07%",
    allocation: 18.2,
    trend: "up" as const,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    shares: 25,
    avgPrice: "$340.00",
    currentPrice: "$334.89",
    value: "$8,372.25",
    gainLoss: "-$127.75",
    gainLossPercent: "-1.50%",
    allocation: 15.8,
    trend: "down" as const,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: 15,
    avgPrice: "$245.00",
    currentPrice: "$234.67",
    value: "$3,520.05",
    gainLoss: "-$154.95",
    gainLossPercent: "-4.22%",
    allocation: 12.1,
    trend: "down" as const,
  },
]

export function PortfolioManager() {
  const totalValue = portfolioHoldings.reduce(
    (sum, holding) => sum + Number.parseFloat(holding.value.replace("$", "").replace(",", "")),
    0,
  )

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            <div className="flex items-center space-x-2 text-xs">
              <Badge variant="default">+2.4%</Badge>
              <span className="text-muted-foreground">Today</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Day's Gain/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$905.28</div>
            <div className="flex items-center space-x-2 text-xs">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-muted-foreground">+2.34%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Gain/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$905.28</div>
            <div className="flex items-center space-x-2 text-xs">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-muted-foreground">+2.34%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Holdings */}
      <Tabs defaultValue="holdings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Portfolio Holdings</CardTitle>
                  <CardDescription>Your current stock positions</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Position
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioHoldings.map((holding) => (
                  <div key={holding.symbol} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-medium">{holding.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <div className="font-medium">{holding.symbol}</div>
                        <div className="text-sm text-muted-foreground">{holding.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {holding.shares} shares @ {holding.avgPrice}
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="font-medium">{holding.value}</div>
                      <div className="flex items-center space-x-1">
                        {holding.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-green-500" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-500" />
                        )}
                        <Badge variant={holding.trend === "up" ? "default" : "destructive"} className="text-xs">
                          {holding.gainLossPercent}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">{holding.gainLoss}</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Minus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Allocation</CardTitle>
              <CardDescription>Distribution of your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portfolioHoldings.map((holding) => (
                  <div key={holding.symbol} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{holding.symbol}</span>
                      <span className="text-sm text-muted-foreground">{holding.allocation}%</span>
                    </div>
                    <Progress value={holding.allocation} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Detailed performance analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Best Performer</div>
                  <div className="text-2xl font-bold text-green-600">AAPL (+6.20%)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Worst Performer</div>
                  <div className="text-2xl font-bold text-red-600">TSLA (-4.22%)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Total Return</div>
                  <div className="text-2xl font-bold">+2.34%</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Sharpe Ratio</div>
                  <div className="text-2xl font-bold">1.24</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
