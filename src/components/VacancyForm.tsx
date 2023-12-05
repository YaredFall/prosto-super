'use client';

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import InputMask from 'react-input-mask';
import { useToast } from "./ui/use-toast";

type Props = {};

export default function VacancyForm({ }: Props) {

  const { toast } = useToast()

  return (
    <form className={"flex flex-col gap-4 w-full mt-2"} onSubmit={(e) => {
      e.preventDefault();
      if ((e.target as HTMLFormElement).reportValidity()) {
        toast({
          title: "Анкета отправлена",
          description: "Ожидайте звонка",
        })
      }
    }}>
      <input className={"border border-neutral-400 rounded-md px-3 py-2"} required placeholder='ФИО*' type='text' />
      <InputMask className={"border border-neutral-400 rounded-md px-3 py-2"} required placeholder='Номер телефона*' type='tel' mask="+7 (999) 999-99-99" maskChar={"_"} />
      <input className={"border border-neutral-400 rounded-md px-3 py-2"} placeholder='Возраст' type='number' min={10} max={100} />
      <Select>
        <SelectTrigger className="w-full text-base h-auto">
          <SelectValue placeholder="Должность" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Кассир">Кассир</SelectItem>
          <SelectItem value="Кладовщик">Кладовщик</SelectItem>
          <SelectItem value="Ревизор">Ревизор</SelectItem>
          <SelectItem value="Директор магазина">Директор магазина</SelectItem>
          <SelectItem value="Зам. директора магазина">Зам. директора магазина</SelectItem>
          <SelectItem value="Другая">Другая</SelectItem>
        </SelectContent>
      </Select>
      <Button className={"bg-main-accent w-max self-end"}>Отправить анкету</Button>
    </form>
  );
}