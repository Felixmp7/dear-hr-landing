import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email(),
        }),
        handler: async ({ email }) => {
            const { data, error } = await resend.emails.send({
                from: 'no-reply@felixmpa.com',
                to: 'devfex.19@gmail.com',
                subject: `Dear HR | New email from ${email}`,
                html: '<strong>Nuevo cliente interesado en el producto!</strong>',
            });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }
            return data;
        },
    }),
};
