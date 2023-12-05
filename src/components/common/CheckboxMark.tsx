import { cn } from "@/lib/utils";
import React from 'react'

type Props = {
  checked: boolean
  className?: string
}

export default function CheckboxMark({ checked, className }: Props) {
  return (
    <div className={cn("inline-flex relative bg-main-accent text-white w-[1em] h-[1em] rounded-sm",
      "after:content-[''] after:absolute after:inset-1/2 after:-translate-x-1/2 after:-translate-y-2/3 after:-rotate-45 after:w-[0.5em] after:h-[0.33em]  after:border-current after:border-b-2 after:border-l-2",
      !checked && "after:!hidden",
      className)}
    />
  )
}