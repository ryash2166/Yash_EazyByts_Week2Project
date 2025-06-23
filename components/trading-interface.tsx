"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Search, ShoppingCart, DollarSign } from "lucide-react"

const watchlistStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$175.43",
    change: "+2.34%",
    trend: "up" as const,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$2,834.56",
    change: "+1.87%",
    trend: "up" as const,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$334.89",
    change: "-0.45%",
    trend: "down" as const,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$234.67",
    change: "+3.21%",
    trend: "up" as const,
  },
]

export function TradingInterface() {
  const [selectedStock, setSelectedStock] = React.useState("AAPL")
  const [orderType, setOrderType] = React.useState("market")
  const [quantity, setQuantity] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [searchQuery, setSearchQuery] = React.useState("")

  const selectedStockData = watchlistStocks.find((stock) => stock.symbol === selectedStock)

  const handleTrade = (action: "buy" | "sell") => {
    // Simulate trade execution
    alert(`${action.toUpperCase()} order placed for ${quantity} shares of ${selectedStock}`)
  }

  return (
    <div className="space-y-6">
      {/* Trading Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Buying Power</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,432.50</div>
            <div className="text-xs text-muted-foreground">Available to trade</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Day Trades Left</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">Resets tomorrow</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-muted-foreground">Pending execution</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$847.32</div>
            <div className="text-xs text-muted-foreground">+2.34%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Trading Panel */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Place Order</CardTitle>
              <CardDescription>Execute your trades with real-time pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy" className="text-green-600">
                    Buy
                  </TabsTrigger>
                  <TabsTrigger value="sell" className="text-red-600">
                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy" className="space-y-4">
                  <div className="space-y-4">
                    {/* Stock Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="stock-search">Search Stock</Label>
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="stock-search"
                          placeholder="Enter symbol (e.g., AAPL)"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* Selected Stock Info */}
                    {selectedStockData && (
                      <div className="p-3 rounded-lg border bg-muted/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{selectedStockData.symbol}</div>
                            <div className="text-sm text-muted-foreground">{selectedStockData.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{selectedStockData.price}</div>
                            <Badge variant={selectedStockData.trend === "up" ? "default" : "destructive"}>
                              {selectedStockData.change}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Order Details */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="order-type">Order Type</Label>
                        <Select value={orderType} onValueChange={setOrderType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="market">Market Order</SelectItem>
                            <SelectItem value="limit">Limit Order</SelectItem>
                            <SelectItem value="stop">Stop Order</SelectItem>
                            <SelectItem value="stop-limit">Stop-Limit Order</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="Number of shares"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>

                    {orderType === "limit" && (
                      <div className="space-y-2">
                        <Label htmlFor="limit-price">Limit Price</Label>
                        <Input
                          id="limit-price"
                          type="number"
                          placeholder="Price per share"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    )}

                    {/* Order Summary */}
                    {quantity && selectedStockData && (
                      <div className="p-3 rounded-lg border">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Shares:</span>
                            <span>{quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price per share:</span>
                            <span>{selectedStockData.price}</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Estimated Total:</span>
                            <span>
                              $
                              {(
                                Number.parseFloat(quantity) *
                                Number.parseFloat(selectedStockData.price.replace("$", ""))
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => handleTrade("buy")}
                      disabled={!quantity || !selectedStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Place Buy Order
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="sell" className="space-y-4">
                  <div className="space-y-4">
                    {/* Similar structure for sell orders */}
                    <div className="space-y-2">
                      <Label>Select Position to Sell</Label>
                      <Select value={selectedStock} onValueChange={setSelectedStock}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {watchlistStocks.map((stock) => (
                            <SelectItem key={stock.symbol} value={stock.symbol}>
                              {stock.symbol} - {stock.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="sell-quantity">Quantity</Label>
                        <Input
                          id="sell-quantity"
                          type="number"
                          placeholder="Shares to sell"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sell-order-type">Order Type</Label>
                        <Select value={orderType} onValueChange={setOrderType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="market">Market Order</SelectItem>
                            <SelectItem value="limit">Limit Order</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => handleTrade("sell")}
                      disabled={!quantity || !selectedStock}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Place Sell Order
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Watchlist */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Watchlist</CardTitle>
              <CardDescription>Stocks you're monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {watchlistStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedStock === stock.symbol ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedStock(stock.symbol)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{stock.symbol}</div>
                        <div className="text-xs text-muted-foreground">{stock.name}</div>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
