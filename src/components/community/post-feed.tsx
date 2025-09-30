"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";

const mockPosts = [
  {
    id: 1,
    author: {
      name: "Dr. Aris",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    },
    timestamp: "8h ago",
    content: "Just published our findings on the impact of microplastics on deep-sea coral ecosystems in the Indian Ocean. The results are concerning, but there's a path forward. #oceanhealth #research",
    imageUrl: "https://images.unsplash.com/photo-1620325407328-3e036e2cac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8c2VhJTIwY29yYWx8ZW58MHx8fHwxNzU5MjEzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "coral reef",
    likes: 128,
    comments: 23,
  },
  {
    id: 2,
    author: {
      name: "Samudra AI",
      avatarUrl: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=500&h=500&fit=crop",
    },
    timestamp: "1d ago",
    content: "New dataset available: High-resolution satellite imagery tracking chlorophyll-a concentrations in the Bay of Bengal from 2022-2023. Perfect for PFZ analysis. #opendata #fisheries",
    likes: 256,
    comments: 45,
  },
];

export function PostFeed() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1755519024827-fd05075a7200?w=500&h=500&fit=crop" alt="User" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <Textarea
                placeholder="Share your research, data, or questions..."
                className="bg-muted border-none focus-visible:ring-primary"
              />
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button>Post</Button>
        </CardFooter>
      </Card>

      {mockPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.timestamp}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            {post.imageUrl && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt="Post image"
                  fill
                  className="object-cover"
                  data-ai-hint={post.imageHint}
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Heart className="h-4 w-4" /> {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
