'use server';

/**
 * @fileOverview This file defines a Genkit flow for automatically tagging user content using AI.
 *
 * It exports:
 * - `autoTagContent`: An async function that takes content text and returns suggested tags.
 * - `AutoTagContentInput`: The input type for the `autoTagContent` function.
 * - `AutoTagContentOutput`: The output type for the `autoTagContent` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoTagContentInputSchema = z.object({
  content: z
    .string()
    .describe('The content to be tagged. Can be a description, text, etc.'),
});

export type AutoTagContentInput = z.infer<typeof AutoTagContentInputSchema>;

const AutoTagContentOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of suggested tags for the content.'),
});

export type AutoTagContentOutput = z.infer<typeof AutoTagContentOutputSchema>;

export async function autoTagContent(input: AutoTagContentInput): Promise<AutoTagContentOutput> {
  return autoTagContentFlow(input);
}

const autoTagContentPrompt = ai.definePrompt({
  name: 'autoTagContentPrompt',
  input: {schema: AutoTagContentInputSchema},
  output: {schema: AutoTagContentOutputSchema},
  prompt: `You are a content tagging expert. Given the following content, suggest relevant tags.
      Content: {{{content}}}
      Tags:`, // Let the model generate tags, no need to specify
});

const autoTagContentFlow = ai.defineFlow(
  {
    name: 'autoTagContentFlow',
    inputSchema: AutoTagContentInputSchema,
    outputSchema: AutoTagContentOutputSchema,
  },
  async input => {
    const {output} = await autoTagContentPrompt(input);
    return output!;
  }
);
