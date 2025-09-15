import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { statsCardsData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StatsCards() {
  return (
    <>
      {statsCardsData.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className={cn("text-xs text-muted-foreground", card.change > 0 ? "text-green-600" : "text-red-600")}>
              {card.change > 0 ? '+' : ''}{card.change}% from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
