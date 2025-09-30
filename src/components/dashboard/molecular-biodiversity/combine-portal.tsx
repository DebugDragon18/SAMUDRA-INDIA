"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CombinePortal() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>CoMBINe Portal</CardTitle>
                <CardDescription>Explore the full CoMBINe portal directly.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-[800px] w-full">
                    <iframe
                        src="https://combine.ncscm.res.in/combine/"
                        className="h-full w-full rounded-lg border"
                        title="CoMBINe Portal"
                    />
                </div>
            </CardContent>
        </Card>
    );
}
