import { FC } from 'react';
import { tw } from "twind";
import Link from "next/link";
import classNames from "classnames";

type NavProps = {
    
}

const NAV_ITEMS = [
    "Акции",
    "Программа лояльности",
    "Магазины",
    "Доставка",
    "Партнерам",
    "Вакансии",
    "О нас"
]

const Nav:FC<NavProps> = () => {
    return (
        <nav className={"text-lg font-medium ml-auto px-6"}>
            <ul className={"grid items-center grid-flow-col"}>
                {NAV_ITEMS.map(item => (
                    <li key={item} className={"relative text-center"}>
                        <Link href={item} children={item} className={classNames("p-3 block",
                            "after:content-[''] after:absolute after:bg-main-accent after:left-1 after:right-1 after:bottom-2 after:h-[2px]",
                            "after:scale-x-0 hover:after:scale-x-100 after:transition-transform hover:after:duration-300")} /> 
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;