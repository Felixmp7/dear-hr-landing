import { defineCollection, z } from 'astro:content';

const benefits = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        benefits: z.array(
            z.object({
                title: z.string(),
                description: z.string(),
                img: z.string(),
                imageAlt: z.string(),
                checks: z.array(z.string()),
            }),
        ),
    }),
});

const motivation = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        ptoFeature: z.object({
            title: z.string(),
            items: z.array(
                z.object({
                    title: z.string(),
                    description: z.string(),
                }),
            ),
        }),
        teamCultureFeature: z.object({
            title: z.string(),
            paragraph1: z.string(),
            paragraph2: z.string(),
            paragraph3: z.string(),
            paragraph4: z.string(),
        }),
        finalParagraph: z.string(),
    }),
});

export const collections = { benefits, motivation };
