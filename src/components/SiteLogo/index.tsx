import { cn } from "@/lib/utils";
import Link from "next/link"
import React from 'react'

type Props = {
    dark?: boolean
    className?: string
}

export default function SiteLogo({ dark = false, className }: Props) {
    return (
        <Link href={"/"} className={cn("text-4xl font-bold flex p-1 flex-col leading-none w-min -outline-offset-2", className)}>
            <span className={cn("pr-2", dark && "text-white")}>Просто</span>
            <span className={"text-main-accent self-end"}>Супер</span>
        </Link>
    )
}