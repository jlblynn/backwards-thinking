import { prisma } from '$lib/server/prisma';
import { Prisma } from '@prisma/client';

import { fail, type Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData();
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');
    if (!username || !email || !password || typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return fail(400, {
        message: 'Invalid input'
      });
    }
    try {
      const user = await prisma.user.create({
        data: {
          name: username,
          email: email,
          password: password,
        }
      });
      console.log({ user });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
				error.code === 'P2002' &&
				error.message?.includes('email')
      ) {
        return fail(400, {
					message: 'Email already in use'
				});
      }
      if (error.message === 'AUTH_DUPLICATE_PROVIDER_ID') {
        return fail(400, {
					message: 'Email already in use.'
				});
      }
      console.error(error);
      return fail(500, {
				message: 'Unknown error occurred'
			});
    }
  }
}
