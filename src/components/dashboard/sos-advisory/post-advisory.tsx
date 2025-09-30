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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Send } from 'lucide-react';


const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  content: z.string().min(10, "Advisory content must be at least 10 characters long."),
  level: z.enum(['Info', 'Moderate', 'High'], {
    required_error: "You need to select a severity level."
  }),
});

export function PostAdvisory() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd save this to Firestore under an "advisories" collection.
    // This would likely be restricted to "Scientist" roles.
    console.log("New advisory posted:", values);
    toast({
      title: "Advisory Posted",
      description: "Your advisory is now live in the feed.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Send className="h-6 w-6 text-primary" />
            Post a New Advisory
        </CardTitle>
        <CardDescription>
          Share an update, warning, or information with the community. (For authorized users)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Advisory Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'High Wind Warning'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Provide detailed information for the advisory..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Severity Level</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                        >
                        <FormItem className="flex items-center space-x-2">
                            <FormControl>
                            <RadioGroupItem value="Info" />
                            </FormControl>
                            <FormLabel className="font-normal">Info</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                            <FormControl>
                            <RadioGroupItem value="Moderate" />
                            </FormControl>
                            <FormLabel className="font-normal">Moderate</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                            <FormControl>
                            <RadioGroupItem value="High" />
                            </FormControl>
                            <FormLabel className="font-normal">High</FormLabel>
                        </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className="w-full">Post Advisory</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
