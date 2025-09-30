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
                            src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb3JhbCUyMFJlZWZ8ZW58MHx8fHwxNzU5MjExMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Coral reef map"
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint="coral reef"
                        />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
