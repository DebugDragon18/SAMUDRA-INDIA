"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const formSchema = z.object({
  reefName: z.string().min(3, "Reef name must be at least 3 characters."),
  latitude: z.coerce.number().min(-90).max(90),
  longitude: z.coerce.number().min(-180).max(180),
  notes: z.string().optional(),
});

export function SubmissionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reefName: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this to Firestore with user auth info.
    console.log("New reef submission:", values);
    toast({
      title: "Submission Received",
      description: "Thank you! Your reef data is pending review by our moderators.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Contribute Data</CardTitle>
        <CardDescription>
          Submit a new coral reef location or observation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="reefName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reef Name / Identifier</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'Unnamed reef near Havelock'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="12.02" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="93.01" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observation Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., 'Spotted a school of parrotfish...'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-2">
                <FormLabel>Upload Image (Optional)</FormLabel>
                 <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/80">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <Input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
            </div>
            <Button type="submit" className="w-full">Submit for Review</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
