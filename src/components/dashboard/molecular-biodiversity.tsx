"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dna } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function MolecularBiodiversity() {
    return (
        <Link href="/dashboard/molecular-biodiversity">
            <Card className="shadow-lg h-full transition-all hover:shadow-xl hover:border-primary/50">
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <CardTitle>Molecular Biodiversity</CardTitle>
                        <Dna className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Explore DNA/rDNA data from sampling sites.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative h-64 w-full">
                        <Image src="https://images.unsplash.com/photo-1579974199252-9FFc6c7b3c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkbmElMjBzdHJhbmR8ZW58MHx8fHwxNzU4NzM5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="DNA Strand" fill objectFit="cover" className="rounded-lg" data-ai-hint="dna strand" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
