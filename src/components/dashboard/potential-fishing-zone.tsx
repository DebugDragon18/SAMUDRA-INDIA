"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function PotentialFishingZone() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Potential Fishing Zone Advisory</CardTitle>
                <CardDescription>Real-time advisories for optimal fishing locations.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="relative h-64 w-full">
                    <Image src="https://picsum.photos/seed/fishing-zone/800/400" alt="Fishing Zone Map" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="map fishing" />
                </div>
            </CardContent>
        </Card>
    )
}
