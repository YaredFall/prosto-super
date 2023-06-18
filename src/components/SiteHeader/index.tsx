import { FC } from 'react';
import Nav from "@/components/SiteHeader/Nav";
import SiteLogo from "../SiteLogo";

type SiteHeaderProps = {
    
}

const SiteHeader:FC<SiteHeaderProps> = () => {
    return (
        <header className={"flex w-full items-center"}>
            <SiteLogo className="px-8 py-6" />
            <Nav />
        </header>
    );
};

export default SiteHeader;