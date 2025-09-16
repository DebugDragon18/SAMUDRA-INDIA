"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', {
        type: new FormData(event.currentTarget).get('feedback-type'),
        message: new FormData(event.currentTarget).get('feedback-message'),
        rating,
    });
    toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback!",
    });
    // Reset form if needed
    (event.target as HTMLFormElement).reset();
    setRating(0);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Share Your Feedback
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            We value your input! Let us know how we can improve the SAMUDRA platform.
          </p>
        </div>

        <Card className="mt-12 mx-auto max-w-2xl bg-transparent border-primary/20">
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              Your suggestions help us make the platform better for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>What kind of feedback do you have?</Label>
                <RadioGroup defaultValue="suggestion" name="feedback-type" className="flex gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="suggestion" id="r1" />
                    <Label htmlFor="r1">Suggestion</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="problem" id="r2" />
                    <Label htmlFor="r2">Problem/Bug</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="r3" />
                    <Label htmlFor="r3">General</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-message">Your Message</Label>
                <Textarea
                  id="feedback-message"
                  name="feedback-message"
                  placeholder="Tell us what's on your mind..."
                  required
                  className="bg-transparent"
                />
              </div>

              <div className="space-y-2">
                <Label>How would you rate our platform?</Label>
                <div className="flex items-center gap-2 pt-2" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        'h-8 w-8 cursor-pointer transition-colors',
                        (hoverRating || rating) >= star
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-muted-foreground'
                      )}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                    />
                  ))}
                </div>
              </div>
                
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
