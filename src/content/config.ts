import { defineCollection, z } from 'astro:content';

// =====================================
// ✅ Courses (replaces "sermons")
// Example: "Fund Your Builds With Forex"
// =====================================
const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.date(),
    author: z.string().default("Arc. Armstrong Uzoagwa"),
    courseType: z.string().default("Free Course"),
    duration: z.string().optional(), // e.g., "45 minutes"
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    image: z.string().startsWith('/images/').optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    videoUrl: z.string().url().optional(), // Embedded YouTube
    draft: z.boolean().default(false),
  }),
});

// =====================================
// ✅ Blog Posts (replaces "ministries" as categories)
// =====================================
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default("Arc. Armstrong Uzoagwa"),
    image: z.object({
      url: z.string().startsWith('/images/'),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// =====================================
// ✅ Webinars (replaces "events")
// =====================================
const webinarsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string().optional(), // e.g., "7:00 PM UTC"
    location: z.string().default("Online"),
    image: z.string().startsWith('/images/').optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    requiresRegistration: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

// =====================================
// ✅ Team / Profile (replaces "staff")
// =====================================
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Architect | DevOps Engineer"
    image: z.string().startsWith('/images/').optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// =====================================
// ✅ Categories (optional — if you want structured content types)
// =====================================
const categoriesCollection = defineCollection({
  type: 'data', // Uses `.json` or `.ts` files, not Markdown
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string().optional(), // e.g., "devops.svg"
  }),
});

// =====================================
// ✅ Export Renamed Collections
// =====================================
export const collections = {
  courses: coursesCollection,
  blog: blogCollection,
  webinars: webinarsCollection,
  team: teamCollection,
  categories: categoriesCollection,
};