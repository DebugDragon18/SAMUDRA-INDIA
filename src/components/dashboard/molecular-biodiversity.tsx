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
                        <Image src="https://images.unsplash.com/photo-1635819335758-304866e30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8bW9sZWN1bGFyJTIwZGF0YXxlbnwwfHx8fDE3NTkyMTEyODh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="DNA Strand" fill objectFit="cover" className="rounded-lg" data-ai-hint="molecular data" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
