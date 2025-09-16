import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  { id: '1', name: 'Asim Malik', role: 'Org. Lead & Designer' },
  { id: '2', name: 'Rugved Narkar', role: 'Frontend Developer' },
  { id: '3',name: 'Sarthak Wawre', role: 'Backend Developer' },
  { id: '4', name: 'Shalvi Mate', role: 'Content Lead & Research' },
  { id: '5', name: 'Leekhit Ingle', role: 'Lead Presentation' },
  { id: '6', name: 'Swapnil Pophale', role: 'Lead Documentation' },
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
                    src={`https://picsum.photos/seed/${member.id}/200/200`}
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
