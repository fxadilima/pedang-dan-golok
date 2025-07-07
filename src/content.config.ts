import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const preludes = defineCollection({
  loader: glob({ base: './src/content/preludes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
	title: z.string(),
	description: z.string(),
	partNumber: z.number().optional(),
	published: z.boolean().default(true),
	// ... add other specific prelude frontmatter fields here
  }),
});

export const collections = { blog: blog, preludes: preludes };
