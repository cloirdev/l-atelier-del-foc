import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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
      galeria: z.array(image()).max(12).default([]),
    }),
});

export const collections = { fallas };
