"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function CoralReefMapping() {
    return (
        <Link href="/dashboard/coral-reef-mapping">
            <Card className="shadow-lg h-full transition-all hover:shadow-xl hover:border-primary/50">
                <CardHeader>
                    <CardTitle>Coral Reef Mapping</CardTitle>
                    <CardDescription>Health and mapping of coral reefs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-64 w-full">
                        <Image 
                            src="https://picsum.photos/seed/coral-map/600/400"
                            alt="Coral reef map"
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint="coral map"
                        />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
