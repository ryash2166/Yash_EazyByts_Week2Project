"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Download } from "lucide-react"

const performanceMetrics = [
  {
    title: "Total Return",
    value: "+12.34%",
    comparison: "vs S&P 500: +8.45%",
    trend: "up" as const,
    description: "Overall portfolio performance",
  },
  {
    title: "Sharpe Ratio",
    value: "1.24",
    comparison: "Above average (>1.0)",
    trend: "up" as const,
    description: "Risk-adjusted returns",
  },
  {
    title: "Max Drawdown",
    value: "-5.67%",
    comparison: "Better than market: -8.23%",
    trend: "up" as const,
    description: "Largest peak-to-trough decline",
  },
  {
    title: "Win Rate",
    value: "68%",
    comparison: "Above average (>60%)",
    trend: "up" as const,
    description: "Percentage of profitable trades",
  },
]

const monthlyReturns = [
  { month: "Jan", return: 2.3, benchmark: 1.8 },
  { month: "Feb", return: -1.2, benchmark: -0.8 },
  { month: "Mar", return: 4.1, benchmark: 3.2 },
  { month: "Apr", return: 1.8, benchmark: 2.1 },
  { month: "May", return: 3.4, benchmark: 2.8 },
  { month: "Jun", return: 2.1, benchmark: 1.9 },
]

const topPerformers = [
  { symbol: "AAPL", return: "+18.5%", contribution: "+2.1%" },
  { symbol: "GOOGL", return: "+15.2%", contribution: "+1.8%" },
  { symbol: "MSFT", return: "+12.8%", contribution: "+1.5%" },
]

const riskMetrics = [
  { metric: "Portfolio Beta", value: "0.95", description: "Less volatile than market" },
  { metric: "Standard Deviation", value: "12.4%", description: "Annual volatility" },
  { metric: "Value at Risk (95%)", value: "-2.1%", description: "Daily VaR" },
  { metric: "Correlation to S&P 500", value: "0.87", description: "High correlation" },
]

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.comparison}</div>
                <div className="flex items-center space-x-1">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className="text-xs text-muted-foreground">{metric.description}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="returns" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="returns">Returns Analysis</TabsTrigger>
            <TabsTrigger value="risk">Risk Metrics</TabsTrigger>
            <TabsTrigger value="attribution">Performance Attribution</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        <TabsContent value="returns" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Monthly Returns Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Returns</CardTitle>
                <CardDescription>Portfolio vs benchmark performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyReturns.map((data) => (
                    <div key={data.month} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{data.month}</span>
                        <div className="flex space-x-4">
                          <span className={data.return >= 0 ? "text-green-600" : "text-red-600"}>
                            Portfolio: {data.return > 0 ? "+" : ""}
                            {data.return}%
                          </span>
                          <span className="text-muted-foreground">
                            S&P 500: {data.benchmark > 0 ? "+" : ""}
                            {data.benchmark}%
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Progress value={Math.abs(data.return) * 10} className="flex-1 h-2" />
                        <Progress value={Math.abs(data.benchmark) * 10} className="flex-1 h-2 opacity-50" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">YTD Return</span>
                    <Badge variant="default">+12.34%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">1 Year Return</span>
                    <Badge variant="default">+18.67%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">3 Year Annualized</span>
                    <Badge variant="default">+15.23%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Best Month</span>
                    <Badge variant="default">+4.1% (Mar)</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Worst Month</span>
                    <Badge variant="destructive">-1.2% (Feb)</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Positive Months</span>
                    <Badge variant="default">83% (5/6)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Risk Metrics</CardTitle>
                <CardDescription>Portfolio risk analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((risk) => (
                    <div key={risk.metric} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{risk.metric}</span>
                        <Badge variant="outline">{risk.value}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{risk.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk-Return Profile</CardTitle>
                <CardDescription>Efficient frontier analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Excellent</div>
                    <div className="text-sm text-muted-foreground">Risk-adjusted performance</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Risk Score</span>
                      <span>7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Return Score</span>
                      <span>8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attribution" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>Stocks driving portfolio performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((stock, index) => (
                    <div key={stock.symbol} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="font-medium">{stock.symbol}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">{stock.return}</div>
                        <div className="text-sm text-muted-foreground">{stock.contribution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Attribution</CardTitle>
                <CardDescription>Performance by sector allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Technology</span>
                      <span className="text-green-600">+3.2%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Healthcare</span>
                      <span className="text-green-600">+1.8%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Financial</span>
                      <span className="text-red-600">-0.5%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Consumer</span>
                      <span className="text-green-600">+0.9%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>Download detailed performance reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Monthly Performance Report</div>
                      <div className="text-sm text-muted-foreground">Detailed monthly analysis</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Risk Analysis Report</div>
                      <div className="text-sm text-muted-foreground">Comprehensive risk metrics</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Tax Summary</div>
                      <div className="text-sm text-muted-foreground">Capital gains and losses</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Goals</CardTitle>
                <CardDescription>Track your investment objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Annual Return Target</span>
                      <Badge variant="default">15%</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={82} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground">82%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Risk Tolerance</span>
                      <Badge variant="outline">Moderate</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={70} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground">Within range</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Diversification Score</span>
                      <Badge variant="default">Good</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
