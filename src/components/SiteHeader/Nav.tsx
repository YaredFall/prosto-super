import { SITE_NAVLINKS_LABELS, SiteNavlinksMap } from "@/utils/misc";
import classNames from "classnames";
import Link from "next/link";
import { FC } from 'react';

type NavProps = {
    
}

const Nav:FC<NavProps> = () => {
    return (
        <nav className={"text-xl font-medium ml-auto px-8"}>
            <ul className={"grid items-center grid-flow-col"}>
                {SITE_NAVLINKS_LABELS.map(item => (
                    <li key={item} className={"relative text-center"}>
                        <Link href={SiteNavlinksMap.get(item)!} children={item} className={classNames("p-3 block",
                            "after:content-[''] after:absolute after:bg-main-accent after:left-1 after:right-1 after:bottom-2 after:h-[2px]",
                            "after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:after:duration-300")} /> 
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;