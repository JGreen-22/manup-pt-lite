'use server';

import { z } from 'zod';

export interface LoginActionState {
  status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
}

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (
  _: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> => {
  try {
    const validatedData = authFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // ✅ Bypass real auth — just pretend it's valid
    if (
      validatedData.email === 'demo@manup.com' &&
      validatedData.password === 'demo123'
    ) {
      return { status: 'success' };
    }

    return { status: 'failed' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: 'invalid_data' };
    }

    return { status: 'failed' };
  }
};
