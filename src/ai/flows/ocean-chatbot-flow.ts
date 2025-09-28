'use server';

/**
 * @fileOverview A chatbot flow that answers questions about oceanography.
 *
 * - oceanChatbot - A function that handles chatbot queries.
 * - OceanChatbotInput - The input type for the oceanChatbot function.
 * - OceanChatbotOutput - The return type for the oceanChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OceanChatbotInputSchema = z.object({
  query: z.string().describe('The user question about oceanography.'),
});
export type OceanChatbotInput = z.infer<typeof OceanChatbotInputSchema>;

const OceanChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type OceanChatbotOutput = z.infer<typeof OceanChatbotOutputSchema>;

export async function oceanChatbot(input: OceanChatbotInput): Promise<OceanChatbotOutput> {
  const oceanChatbotFlow = ai.defineFlow(
    {
      name: 'oceanChatbotFlow',
      inputSchema: OceanChatbotInputSchema,
      outputSchema: OceanChatbotOutputSchema,
    },
    async (input) => {
        const prompt = ai.definePrompt({
            name: 'oceanChatbotPrompt',
            input: {schema: OceanChatbotInputSchema},
            output: {schema: OceanChatbotOutputSchema},
            prompt: `You are an AI assistant named Samudra, an expert in oceanography. Your role is to answer questions about oceans, marine life, and related scientific topics.

            If a user asks a question unrelated to oceanography, you must politely decline and state that your expertise is limited to ocean-related topics. Do not answer off-topic questions.

            User Query: {{{query}}}`,
        });

      const {output} = await prompt(input);
      return output!;
    }
  );
  return oceanChatbotFlow(input);
}