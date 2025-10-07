'use server';

/**
 * @fileOverview A content filtering AI agent.
 *
 * - filterContentByDescription - A function that handles the content filtering process.
 * - FilterContentByDescriptionInput - The input type for the filterContentByDescription function.
 * - FilterContentByDescriptionOutput - The return type for the filterContentByDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterContentByDescriptionInputSchema = z.object({
  contentDescription: z
    .string()
    .describe('The natural language description to filter content by.'),
  contentList: z.array(z.string()).describe('The list of content to filter.'),
});
export type FilterContentByDescriptionInput = z.infer<
  typeof FilterContentByDescriptionInputSchema
>;

const FilterContentByDescriptionOutputSchema = z.array(z.string()).describe(
  'The list of content that matches the description.'
);
export type FilterContentByDescriptionOutput = z.infer<
  typeof FilterContentByDescriptionOutputSchema
>;

export async function filterContentByDescription(
  input: FilterContentByDescriptionInput
): Promise<FilterContentByDescriptionOutput> {
  return filterContentByDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterContentByDescriptionPrompt',
  input: {schema: FilterContentByDescriptionInputSchema},
  output: {schema: FilterContentByDescriptionOutputSchema},
  prompt: `You are an expert content filter. Given a description and a list of content, you will return a list of content that matches the description. Only return content that is a close match to the contentDescription.

Content Description: {{{contentDescription}}}
Content List: {{{contentList}}}`,
});

const filterContentByDescriptionFlow = ai.defineFlow(
  {
    name: 'filterContentByDescriptionFlow',
    inputSchema: FilterContentByDescriptionInputSchema,
    outputSchema: FilterContentByDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
