"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

// Mock chart data
const generateChartData = () => {
  const data = []
  const baseValue = 100
  let currentValue = baseValue

  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * 10
    currentValue += change
    data.push({
      day: i + 1,
      value: Math.max(currentValue, 50), // Ensure positive values
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
    })
  }
  return data
}

export function StockChart() {
  const [timeframe, setTimeframe] = React.useState("30D")
  const [chartData] = React.useState(generateChartData())

  const currentValue = chartData[chartData.length - 1]?.value || 0
  const previousValue = chartData[chartData.length - 2]?.value || 0
  const change = currentValue - previousValue
  const changePercent = ((change / previousValue) * 100).toFixed(2)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Your portfolio value over time</CardDescription>
          </div>
          <div className="flex space-x-2">
            {["1D", "7D", "30D", "1Y"].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeframe(period)}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold">${currentValue.toFixed(2)}</span>
            <Badge variant={change >= 0 ? "default" : "destructive"}>
              <TrendingUp className="mr-1 h-3 w-3" />
              {change >= 0 ? "+" : ""}
              {changePercent}%
            </Badge>
          </div>

          {/* Simple SVG Chart */}
          <div className="h-64 w-full">
            <svg viewBox="0 0 800 200" className="h-full w-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 40}
                  x2="800"
                  y2={i * 40}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}

              {/* Chart area */}
              <path
                d={`M 0 ${200 - (chartData[0]?.value || 0)} ${chartData
                  .map((point, index) => `L ${(index * 800) / (chartData.length - 1)} ${200 - point.value}`)
                  .join(" ")} L 800 200 L 0 200 Z`}
                fill="url(#gradient)"
              />

              {/* Chart line */}
              <path
                d={`M 0 ${200 - (chartData[0]?.value || 0)} ${chartData
                  .map((point, index) => `L ${(index * 800) / (chartData.length - 1)} ${200 - point.value}`)
                  .join(" ")}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />

              {/* Data points */}
              {chartData.map((point, index) => (
                <circle
                  key={index}
                  cx={(index * 800) / (chartData.length - 1)}
                  cy={200 - point.value}
                  r="3"
                  fill="hsl(var(--primary))"
                />
              ))}
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
