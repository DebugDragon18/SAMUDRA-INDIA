'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiPoweredQA, AIPoweredQAOutput } from '@/ai/flows/ai-powered-qa-flow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BotMessageSquare, LoaderCircle, Sparkles, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const qaSchema = z.object({
  query: z.string().min(10, {
    message: 'Please ask a more detailed question (at least 10 characters).',
  }),
});

export function QaAssistant() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AIPoweredQAOutput | null>(null);

  const form = useForm<z.infer<typeof qaSchema>>({
    resolver: zodResolver(qaSchema),
    defaultValues: {
      query: '',
    },
  });

  async function onSubmit(values: z.infer<typeof qaSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await aiPoweredQA({ query: values.query });
      setResult(response);
    } catch (e) {
      setError('An error occurred while fetching the answer. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Smart Q&A Assistant
        </CardTitle>
        <CardDescription>Ask a question about the ocean data in natural language.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-4">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="e.g., &quot;Show me fish population trend in Arabian Sea last 5 years.&quot;"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Asking...
                </>
              ) : (
                'Ask AI'
              )}
            </Button>
          </form>
        </Form>
        <div className="mt-6">
          {error && (
            <Alert variant="destructive">
               <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {result && (
            <div className="rounded-lg border bg-secondary/50 p-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <BotMessageSquare className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="font-semibold">AI Answer:</p>
                  <p className="text-sm text-foreground/80">{result.answer}</p>
                  {result.visualization && (
                    <div className="mt-4 text-sm">
                      <p className="font-semibold">Suggested Visualization:</p>
                      <p className="text-sm text-foreground/80 bg-muted/50 p-2 rounded-md font-mono">{result.visualization}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
