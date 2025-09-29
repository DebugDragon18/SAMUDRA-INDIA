"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
                        <iframe
                            src="https://allencoralatlas.org/atlas/#6.13/17.6043/74.4592"
                            className="h-full w-full rounded-lg border"
                            title="Allen Coral Atlas Map"
                        />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
