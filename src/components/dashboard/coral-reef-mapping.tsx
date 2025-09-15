"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function CoralReefMapping() {
    return (
        <Card className="shadow-lg h-full">
            <CardHeader>
                <CardTitle>Coral Reef Mapping</CardTitle>
                <CardDescription>Health and mapping of coral reefs.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-64 w-full">
                    <Image src="https://picsum.photos/seed/reef-map/800/400" alt="Coral Reef Map" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="map coral reef" />
                </div>
            </CardContent>
        </Card>
    )
}
