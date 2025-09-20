"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function NgoSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the data to your backend
    const formData = new FormData(event.currentTarget);
    console.log('NGO Data submitted:', {
      name: formData.get('org-name'),
      email: formData.get('org-email'),
      dataType: formData.get('data-type'),
      description: formData.get('data-description'),
    });
    toast({
      title: "Data Submitted",
      description: "Thank you for your contribution! We will be in touch shortly.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Community & NGO Data Contribution
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Are you a part of a community group or NGO with valuable ocean data? Share it with us to help build a more comprehensive understanding of our marine ecosystems.
          </p>
        </div>

        <Card className="mt-12 mx-auto max-w-2xl bg-background/50 border-primary/20">
          <CardHeader>
            <CardTitle>Data Contribution Form</CardTitle>
            <CardDescription>
              Please provide details about the data you'd like to share.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization/Group Name</Label>
                  <Input id="org-name" name="org-name" placeholder="e.g., Ocean Protectors Foundation" required className="bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-email">Contact Email</Label>
                  <Input id="org-email" name="org-email" type="email" placeholder="contact@example.com" required className="bg-transparent" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="data-type">Type of Data</Label>
                <Select name="data-type">
                  <SelectTrigger id="data-type" className="w-full bg-transparent">
                    <SelectValue placeholder="Select data type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oceanographic">Oceanographic (e.g., temp, salinity)</SelectItem>
                    <SelectItem value="fisheries">Fisheries (e.g., catch data, stock assessment)</SelectItem>
                    <SelectItem value="biodiversity">Biodiversity (e.g., species sightings, habitat mapping)</SelectItem>
                    <SelectItem value="pollution">Pollution (e.g., plastic debris, chemical analysis)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="data-description">Data Description</Label>
                <Textarea
                  id="data-description"
                  name="data-description"
                  placeholder="Briefly describe your data, including location, time period, and collection methods..."
                  required
                  className="bg-transparent"
                />
              </div>

              <Button type="submit" className="w-full">
                Submit for Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
