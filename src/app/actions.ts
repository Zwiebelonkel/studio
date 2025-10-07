'use server';

import { filterContentByDescription } from '@/ai/flows/filter-content-by-description';
import { projects, type Project } from '@/lib/placeholder-data';
import { z } from 'zod';

export async function filterProjectsAction(
  query: string
): Promise<Project[]> {
  if (!query) {
    return projects;
  }

  try {
    const contentList = projects.map(
      (p) => `${p.id}::${p.title} - ${p.description}`
    );

    const filteredContent = await filterContentByDescription({
      contentDescription: query,
      contentList: contentList,
    });

    const filteredIds = new Set(
      filteredContent.map((item) => item.split('::')[0])
    );

    const filteredProjects = projects.filter((p) => filteredIds.has(p.id));
    return filteredProjects;
  } catch (error) {
    console.error('Error filtering projects:', error);
    return [];
  }
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactState = {
  message: string;
  success: boolean;
};

export async function contactAction(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your entries.',
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log('New contact message:', validatedFields.data);

  return {
    message: 'Thanks for reaching out! I will get back to you soon.',
    success: true,
  };
}
