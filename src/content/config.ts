import { defineCollection, z } from "astro:content";

// 2. 各コレクションに`type`と`schema`を定義
const Guide = defineCollection({
  type: "content", // v2.5.0以降
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.string()
    // Transform string to Date object
  }),
});


const Reference = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.string(),    
  }),
});

export const collections = {
  guides: Guide,
  references:Reference
  
};
