"use server";

import { cookies } from 'next/headers';
import { User } from "@/utils/types";
import { USER_COOKIE_KEY } from '@/utils/misc';

export async function setUser(formData: FormData) {
  const phone = formData.get("phone")?.toString();
  if (!phone) throw new Error("Invalid user data!");
  const user: User = {
    phone
  };

  cookies().set(USER_COOKIE_KEY, JSON.stringify(user), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365
  });
}

export async function removeUser() {
  cookies().delete(USER_COOKIE_KEY);
}