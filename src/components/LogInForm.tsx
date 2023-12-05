"use client"

import InputMask from 'react-input-mask';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { setUser } from '@/server-actions/user';

type LogInFormProps = {
  className?: string
};

export default function LogInForm({ className }: LogInFormProps) {
  return (
    <form className={cn('flex flex-col gap-4', className)} action={setUser}>
      <InputMask className={"border border-neutral-400 rounded-md px-3 py-2"} name='phone' required placeholder='Номер телефона*' type='tel' mask="+7 (999) 999-99-99" maskChar={"_"} />
      {/* <input className={"border border-neutral-400 rounded-md px-3 py-2"} placeholder="Ваше имя" /> */}
      <Button className={"bg-main-accent w-max self-end"}>Войти</Button>
    </form>
  );
}