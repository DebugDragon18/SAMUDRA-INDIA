import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rss, Users } from "lucide-react";

const trendingTopics = ["#PFZ", "#CoralBleaching", "#OceanData", "#AIforGood", "#MarineBiology"];

const suggestedUsers = [
    { name: "Dr. Elena Maris", handle: "@elenamaris", avatarUrl: "https://images.unsplash.com/photo-1580894742490-4434167397c0?w=200&h=200&fit=crop" },
    { name: "INCOIS Official", handle: "@incois", avatarUrl: "https://pbs.twimg.com/profile_images/1237626995561955329/7_I5j2S9_400x400.jpg"},
];

export function CommunitySidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Rss className="h-5 w-5 text-primary" />
            Trending Topics
          </CardTitle>
          <CardDescription>What the community is talking about.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary/20">
              {topic}
            </Badge>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            Who to Follow
          </CardTitle>
          <CardDescription>Suggested researchers and organizations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {suggestedUsers.map(user => (
                <div key={user.handle} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatarUrl} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.handle}</p>
                        </div>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
