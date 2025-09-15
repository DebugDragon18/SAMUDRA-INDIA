'use server';

/**
 * @fileOverview An AI-powered question answering flow that allows users to ask questions about the data using natural language.
 *
 * - aiPoweredQA - A function that handles the question answering process.
 * - AIPoweredQAInput - The input type for the aiPoweredQA function.
 * - AIPoweredQAOutput - The return type for the aiPoweredQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredQAInputSchema = z.object({
  query: z.string().describe('The natural language question about the data.'),
});
export type AIPoweredQAInput = z.infer<typeof AIPoweredQAInputSchema>;

const AIPoweredQAOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
  visualization: z.string().optional().describe('The visualization to support the answer, if applicable.'),
});
export type AIPoweredQAOutput = z.infer<typeof AIPoweredQAOutputSchema>;

export async function aiPoweredQA(input: AIPoweredQAInput): Promise<AIPoweredQAOutput> {
  return aiPoweredQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredQAPrompt',
  input: {schema: AIPoweredQAInputSchema},
  output: {schema: AIPoweredQAOutputSchema},
  prompt: `You are a helpful AI assistant that answers questions about oceanographic, fisheries, and biodiversity data.

  Based on the user's query, you will generate an answer and, if applicable, suggest a visualization to support the answer.

  Query: {{{query}}}`,
});

const aiPoweredQAFlow = ai.defineFlow(
  {
    name: 'aiPoweredQAFlow',
    inputSchema: AIPoweredQAInputSchema,
    outputSchema: AIPoweredQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
