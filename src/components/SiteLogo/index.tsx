import classNames from "classnames"
import Link from "next/link"
import React from 'react'

type Props = {
    dark?: boolean
    className?: string
}

export default function SiteLogo({ dark = false, className }: Props) {
    return (
        <Link href={"/"} className={"contents"}>
            <h1 className={classNames("text-4xl font-bold flex flex-col leading-none w-min", className)}>
                <span className={classNames("pr-2", dark && "text-white")}>Просто</span>
                <span className={"text-main-accent self-end"}>Супер</span>
            </h1>
        </Link>
    )
}