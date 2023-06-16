import { FC } from 'react';
import Nav from "@/components/SiteHeader/Nav";
import Link from "next/link";

type SiteHeaderProps = {
    
}

const SiteHeader:FC<SiteHeaderProps> = () => {
    return (
        <header className={"flex w-full items-center"}>
            <Link href={"/"} className={"contents"}>

            <h1 className={"text-2xl font-bold flex flex-col leading-none px-6 py-4 "}>
                    <span className={"pr-2"}>Просто</span>
                    <span className={"text-main-accent self-end"}>Супер</span>
            </h1>
            </Link>
            <Nav />
        </header>
    );
};

export default SiteHeader;