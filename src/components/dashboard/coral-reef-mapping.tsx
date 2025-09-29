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
                        <Image src="https://images.unsplash.com/photo-1697826208801-6082a2222a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMFJlZWYlMjBvY2VhbnxlbnwwfHx8fDE3NTc5NDM3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Coral Reef Map" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="coral reef" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
