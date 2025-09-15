"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function PotentialFishingZone() {
    return (
      <Link href="/dashboard/potential-fishing-zone">
        <Card className="shadow-lg h-full transition-all hover:shadow-xl hover:border-primary/50">
            <CardHeader>
                <CardTitle>Potential Fishing Zone Advisory</CardTitle>
                <CardDescription>Real-time advisories for optimal fishing locations.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="relative h-64 w-full">
                    <Image src="https://images.unsplash.com/photo-1695143634680-082bb7426923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8T2NlYW4lMjBGaXNoZXN8ZW58MHx8fHwxNzU3OTQyMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Fishing Zone Map" fill objectFit="cover" className="rounded-lg" data-ai-hint="map fishing" />
                </div>
            </CardContent>
        </Card>
      </Link>
    )
}
