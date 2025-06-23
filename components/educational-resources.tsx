"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Play, Clock, Star, ChevronRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Stock Market Fundamentals",
    description: "Learn the basics of stock market investing",
    duration: "2 hours",
    difficulty: "Beginner",
    progress: 75,
    lessons: 8,
    completed: 6,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Technical Analysis Mastery",
    description: "Master chart patterns and technical indicators",
    duration: "4 hours",
    difficulty: "Intermediate",
    progress: 30,
    lessons: 12,
    completed: 4,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Portfolio Management Strategies",
    description: "Advanced portfolio construction and risk management",
    duration: "3 hours",
    difficulty: "Advanced",
    progress: 0,
    lessons: 10,
    completed: 0,
    rating: 4.7,
  },
]

const articles = [
  {
    title: "Understanding Market Volatility",
    category: "Market Analysis",
    readTime: "5 min read",
    date: "2 days ago",
    featured: true,
  },
  {
    title: "Dividend Investing Strategies",
    category: "Investment Strategy",
    readTime: "8 min read",
    date: "1 week ago",
    featured: false,
  },
  {
    title: "Risk Management Techniques",
    category: "Risk Management",
    readTime: "6 min read",
    date: "3 days ago",
    featured: false,
  },
  {
    title: "ESG Investing Guide",
    category: "Sustainable Investing",
    readTime: "10 min read",
    date: "5 days ago",
    featured: true,
  },
]

const webinars = [
  {
    title: "Market Outlook 2024",
    presenter: "Sarah Johnson, CFA",
    date: "Dec 28, 2024",
    time: "2:00 PM EST",
    duration: "1 hour",
    registered: true,
  },
  {
    title: "Options Trading Basics",
    presenter: "Michael Chen",
    date: "Jan 5, 2025",
    time: "1:00 PM EST",
    duration: "45 minutes",
    registered: false,
  },
  {
    title: "Crypto vs Traditional Assets",
    presenter: "Alex Rodriguez",
    date: "Jan 12, 2025",
    time: "3:00 PM EST",
    duration: "1 hour",
    registered: false,
  },
]

const glossaryTerms = [
  {
    term: "Bull Market",
    definition: "A market condition where prices are rising or expected to rise",
    category: "Market Conditions",
  },
  {
    term: "P/E Ratio",
    definition: "Price-to-earnings ratio, a valuation metric comparing stock price to earnings per share",
    category: "Valuation",
  },
  {
    term: "Dividend Yield",
    definition: "Annual dividend payment divided by stock price, expressed as a percentage",
    category: "Dividends",
  },
  {
    term: "Market Cap",
    definition: "Total value of a company's shares, calculated by multiplying share price by number of shares",
    category: "Valuation",
  },
]

export function EducationalResources() {
  return (
    <div className="space-y-6">
      {/* Learning Progress */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">+1 this month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <div className="text-xs text-muted-foreground">Keep it up!</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-muted-foreground">Stock Market Basics, Risk Management</div>
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
          <TabsTrigger value="glossary">Glossary</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Courses</CardTitle>
              <CardDescription>Structured learning paths to improve your trading skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <Badge variant="outline">{course.difficulty}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-3 w-3" />
                            <span>{course.lessons} lessons</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        {course.progress > 0 ? "Continue" : "Start Course"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>

                    {course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>
                            Progress: {course.completed}/{course.lessons} lessons
                          </span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="articles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Educational Articles</CardTitle>
              <CardDescription>Stay updated with market insights and investment strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{article.title}</h3>
                          {article.featured && (
                            <Badge variant="default" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webinars" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Webinars</CardTitle>
              <CardDescription>Join live sessions with market experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webinars.map((webinar, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{webinar.title}</h3>
                        <p className="text-sm text-muted-foreground">by {webinar.presenter}</p>
                      </div>
                      <Button size="sm" variant={webinar.registered ? "default" : "outline"}>
                        {webinar.registered ? "Registered" : "Register"}
                      </Button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Play className="h-3 w-3" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="glossary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Glossary</CardTitle>
              <CardDescription>Essential terms every investor should know</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {glossaryTerms.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{item.term}</h3>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.definition}</p>
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
