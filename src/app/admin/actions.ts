'use server';

import { redirect } from 'next/navigation';
import {
  checkPassword,
  createAdminSession,
  destroyAdminSession,
} from '@/lib/admin-session';

export async function login(formData: FormData) {
  const password = String(formData.get('password') ?? '');
  if (!checkPassword(password)) {
    redirect('/admin/login?error=1');
  }
  await createAdminSession();
  redirect('/admin');
}

export async function logout() {
  await destroyAdminSession();
  redirect('/admin/login');
}
