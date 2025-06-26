import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Users2, Calendar } from "lucide-react"

export function ResearchStats() {
  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: "Publications",
      value: "4",
      description: "Peer-reviewed papers",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Citations",
      value: "25+",
      description: "Total citations",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      label: "Collaborations",
      value: "8",
      description: "Research partners",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Projects",
      value: "3",
      description: "Active research",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 text-center">
          <CardContent className="p-6">
            <div className="flex justify-center mb-3 text-blue-400">{stat.icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-blue-400 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-400">{stat.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
