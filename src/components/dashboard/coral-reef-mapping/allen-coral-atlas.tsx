"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AllenCoralAtlas() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>Allen Coral Atlas</CardTitle>
                <CardDescription>An extensive map showing the world's coral reefs.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-[600px] w-full">
                    <iframe
                        src="https://allencoralatlas.org/atlas/#6.13/17.6043/74.4592"
                        className="h-full w-full rounded-lg border"
                        title="Allen Coral Atlas Map"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
