"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, TrendingUp, AlertTriangle, Info, CheckCircle, X } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "price_alert" as const,
    title: "AAPL Price Alert",
    message: "Apple Inc. has reached your target price of $175.00",
    time: "2 minutes ago",
    read: false,
    priority: "high" as const,
  },
  {
    id: 2,
    type: "market_news" as const,
    title: "Market Update",
    message: "S&P 500 closes up 1.2% amid positive earnings reports",
    time: "1 hour ago",
    read: false,
    priority: "medium" as const,
  },
  {
    id: 3,
    type: "portfolio" as const,
    title: "Portfolio Milestone",
    message: "Congratulations! Your portfolio has reached $125,000",
    time: "3 hours ago",
    read: true,
    priority: "low" as const,
  },
  {
    id: 4,
    type: "trade_execution" as const,
    title: "Trade Executed",
    message: "Your buy order for 10 shares of MSFT has been filled at $334.89",
    time: "1 day ago",
    read: true,
    priority: "medium" as const,
  },
  {
    id: 5,
    type: "risk_alert" as const,
    title: "Risk Alert",
    message: "Your portfolio concentration in tech stocks exceeds 60%",
    time: "2 days ago",
    read: false,
    priority: "high" as const,
  },
]

const priceAlerts = [
  {
    symbol: "AAPL",
    condition: "Above $180.00",
    status: "active" as const,
    created: "1 week ago",
  },
  {
    symbol: "GOOGL",
    condition: "Below $2,800.00",
    status: "triggered" as const,
    created: "3 days ago",
  },
  {
    symbol: "TSLA",
    condition: "Above $250.00",
    status: "active" as const,
    created: "2 weeks ago",
  },
]

const notificationSettings = [
  {
    category: "Price Alerts",
    description: "Get notified when stocks reach your target prices",
    enabled: true,
  },
  {
    category: "Portfolio Updates",
    description: "Receive updates about your portfolio performance",
    enabled: true,
  },
  {
    category: "Market News",
    description: "Stay informed about market movements and news",
    enabled: false,
  },
  {
    category: "Trade Confirmations",
    description: "Get notified when your trades are executed",
    enabled: true,
  },
  {
    category: "Risk Alerts",
    description: "Receive warnings about portfolio risk levels",
    enabled: true,
  },
  {
    category: "Educational Content",
    description: "Get notified about new courses and articles",
    enabled: false,
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "price_alert":
      return <TrendingUp className="h-4 w-4 text-blue-500" />
    case "market_news":
      return <Info className="h-4 w-4 text-green-500" />
    case "portfolio":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "trade_execution":
      return <CheckCircle className="h-4 w-4 text-blue-500" />
    case "risk_alert":
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    default:
      return <Bell className="h-4 w-4 text-gray-500" />
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

export function NotificationCenter() {
  const [selectedNotifications, setSelectedNotifications] = React.useState<number[]>([])
  const unreadCount = notifications.filter((n) => !n.read).length

  const handleSelectNotification = (id: number) => {
    setSelectedNotifications((prev) => (prev.includes(id) ? prev.filter((nId) => nId !== id) : [...prev, id]))
  }

  const handleMarkAsRead = (ids: number[]) => {
    // In a real app, this would update the backend
    console.log("Marking as read:", ids)
  }

  const handleDeleteNotifications = (ids: number[]) => {
    // In a real app, this would delete from backend
    console.log("Deleting notifications:", ids)
  }

  return (
    <div className="space-y-6">
      {/* Notification Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadCount}</div>
            <div className="text-xs text-muted-foreground">New notifications</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">Active alerts</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-muted-foreground">Total notifications</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-muted-foreground">Require attention</div>
          </CardContent>
        </Card>
      </div>

      {/* Notification Management */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleMarkAsRead(selectedNotifications)}
              disabled={selectedNotifications.length === 0}
            >
              Mark as Read
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleDeleteNotifications(selectedNotifications)}
              disabled={selectedNotifications.length === 0}
            >
              Delete
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Stay updated with your portfolio and market activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                      !notification.read ? "bg-muted/50" : ""
                    } ${selectedNotifications.includes(notification.id) ? "ring-2 ring-primary" : ""}`}
                    onClick={() => handleSelectNotification(notification.id)}
                  >
                    <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getPriorityColor(notification.priority) as any} className="text-xs">
                            {notification.priority}
                          </Badge>
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <div className="text-xs text-muted-foreground">{notification.time}</div>
                    </div>
                    <Button size="sm" variant="ghost" className="flex-shrink-0">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Price Alerts</CardTitle>
                  <CardDescription>Manage your stock price notifications</CardDescription>
                </div>
                <Button>Create Alert</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {priceAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{alert.symbol}</div>
                      <div className="text-sm text-muted-foreground">{alert.condition}</div>
                      <div className="text-xs text-muted-foreground">Created {alert.created}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={alert.status === "active" ? "default" : "secondary"}>{alert.status}</Badge>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Customize which notifications you receive</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {notificationSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">{setting.category}</div>
                      <div className="text-sm text-muted-foreground">{setting.description}</div>
                    </div>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
