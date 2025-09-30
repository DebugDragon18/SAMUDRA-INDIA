"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Siren, LocateFixed } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

export function SOSCard() {
  const { toast } = useToast();
  const [location, setLocation] = useState<{ lat: number, lon: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const handleSOS = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      toast({
        variant: 'destructive',
        title: 'Geolocation Not Supported',
        description: 'Your browser does not support geolocation.',
      });
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
        // In a real app, you would send this location and user details to a backend.
        console.log('SOS triggered at:', { latitude, longitude });
        toast({
          title: 'SOS Signal Sent!',
          description: `Your location (${latitude.toFixed(4)}, ${longitude.toFixed(4)}) has been sent to emergency responders.`,
        });
        setIsLocating(false);
      },
      (error) => {
        console.error('Geolocation error:', error);
        toast({
          variant: 'destructive',
          title: 'Could Not Get Location',
          description: 'Please ensure location services are enabled for your browser.',
        });
        setIsLocating(false);
      }
    );
  };

  return (
    <Card className="shadow-lg bg-destructive/10 border-destructive">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center gap-2">
          <Siren className="h-6 w-6" />
          Emergency SOS
        </CardTitle>
        <CardDescription>
          Press the button ONLY in a real emergency. This will send your location to responders.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive"
                    className="h-32 w-32 rounded-full text-2xl font-bold flex flex-col shadow-2xl animate-pulse"
                    disabled={isLocating}
                >
                    <Siren className="h-10 w-10 mb-1" />
                    SOS
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Emergency SOS?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will immediately send your current location and registered details to the nearest emergency response team. Only proceed if you are in genuine distress.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSOS} disabled={isLocating}>
                        {isLocating ? 'Sending...' : 'Yes, Send SOS'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        
        {isLocating && <p className="text-sm text-muted-foreground animate-pulse">Getting your location...</p>}
        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <LocateFixed className="h-4 w-4" />
            <span>Last location: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
