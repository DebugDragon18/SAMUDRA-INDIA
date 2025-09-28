import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  { id: '1', name: 'Asim Malik', role: 'Org. Lead & Designer', imageUrl: 'https://images.unsplash.com/photo-1755519024827-fd05075a7200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHwlMjBwcm9mZXNzaW9uYWwlMjBtYWxlJTIwaW1hZ2V8ZW58MHx8fHwxNzU4MDE5MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '2', name: 'Rugved Narkar', role: 'Frontend Developer', imageUrl: 'https://images.unsplash.com/photo-1597561030767-5ce58b1a2393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBib3klMjBpbWFnZSUyMHxlbnwwfHx8fDE3NTgwMTkyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '3',name: 'Sarthak Wawre', role: 'Backend Developer', imageUrl: 'https://images.unsplash.com/photo-1537006176750-19c08a9af863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bWFsZSUyMHBob3Rvc3xlbnwwfHx8fDE3NTgwMTk2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '4', name: 'Shalvi Mate', role: 'Content Lead & Research', imageUrl: 'https://images.unsplash.com/photo-1752650733757-bcb151bc2045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBwaG90b3N8ZW58MHx8fHwxNzU4MDE5Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '5', name: 'Leekhit Ingle', role: 'Lead Presentation', imageUrl: 'https://images.unsplash.com/photo-1592710630283-614388cc92cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8bWFsZSUyMHByb2Zlc3Npb25hbCUyMHBob3xlbnwwfHx8fDE3NTgwMTk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: '6', name: 'Swapnil Pophale', role: 'Lead Documentation', imageUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcGhvdHN8ZW58MHx8fHwxNzU4MDE5ODM4fDA&ixlib-rb-4.1.0&q=80&w=1080' },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A passionate group of Researchers, engineers, and strategists dedicated to the ocean.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-none bg-transparent shadow-none text-center">
              <CardContent className="flex flex-col items-center p-0">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={member.imageUrl}
                    alt={member.name}
                    data-ai-hint="person portrait"
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-foreground/60">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
