"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react"

const recentTransactions = [
  {
    id: "1",
    type: "buy" as const,
    symbol: "AAPL",
    shares: 10,
    price: "$175.43",
    total: "$1,754.30",
    time: "2 hours ago",
    status: "completed" as const,
  },
  {
    id: "2",
    type: "sell" as const,
    symbol: "GOOGL",
    shares: 2,
    price: "$2,834.56",
    total: "$5,669.12",
    time: "4 hours ago",
    status: "completed" as const,
  },
  {
    id: "3",
    type: "buy" as const,
    symbol: "MSFT",
    shares: 15,
    price: "$334.89",
    total: "$5,023.35",
    time: "1 day ago",
    status: "pending" as const,
  },
  {
    id: "4",
    type: "sell" as const,
    symbol: "TSLA",
    shares: 5,
    price: "$234.67",
    total: "$1,173.35",
    time: "2 days ago",
    status: "completed" as const,
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest trading activity</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg border">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === "buy" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "buy" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-medium">
                    {transaction.type.toUpperCase()} {transaction.symbol}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.shares} shares @ {transaction.price}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{transaction.total}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{transaction.time}</span>
                  <Badge variant={transaction.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {transaction.status}
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
