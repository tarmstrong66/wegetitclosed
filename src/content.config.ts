import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const loanPrograms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/loan-programs' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    description: z.string(),
    loanType: z.string(),
    order: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const states = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/states' }),
  schema: z.object({
    title: z.string(),
    stateName: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    heroSubtitle: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { 'loan-programs': loanPrograms, states, blog };
