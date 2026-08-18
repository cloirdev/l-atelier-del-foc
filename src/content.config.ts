import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
  }),
});

const fallas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fallas" }),
  schema: ({ image }) =>
    z.object({
      falla: z.string(),
      año: z.number(),
      lema: z.string(),
      seccion: z.string(),
      casal: z.string().optional(),
      premios: z.array(z.string()).default([]),
      foto: image().optional(),
    }),
});

export const collections = { blog, fallas };
