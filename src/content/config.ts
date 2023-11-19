import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// 2. 各コレクションに`type`と`schema`を定義
const Guide = defineCollection({
  type: "content", // v2.5.0以降
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
  }),
});



const Reference = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog: blog,
  docs: Guide,
  
};
