import Link from "next/link"
import React from 'react'
import SiteLogo from "../SiteLogo"
import Image from "next/image"

type SiteFooterProps = {}

const footerLinksSections = [
    {
        header: "Покупателям",
        links: [
            {
                title: "Акции",
                url: "/prome"
            },
            {
                title: "Программа лояльности",
                url: "/loyalty"
            },
            {
                title: "Адреса магазинов",
                url: "/locations"
            },
            {
                title: "Доставка",
                url: "/delivery"
            },
        ]
    },
    {
        header: "Партнерам",
        links: [
            {
                title: "Поставщикам",
                url: "/suppliers"
            },
            {
                title: "Рекламодателям",
                url: "/advertisers"
            },
            {
                title: "Аренда",
                url: "/lease"
            },
            {
                title: "Документооборот",
                url: "/documetns"
            },
        ]
    },
    {
        header: "Контакты",
        links: [
            {
                title: "+7 (000) 000-00-00",
                url: "tel:80000000000"
            },
            {
                title: "mail@example.demo",
                url: "mailto:mail@example.demo"
            },
            {
                title: "ВКонтакте",
                url: "https://vk.ru"
            },
            {
                title: "Телеграм",
                url: "https://telegram.org"
            },
        ]
    },
]

export default function SiteFooter({ }: SiteFooterProps) {
    return (
        <footer className={"w-full font-medium"}>
            <div className={"w-full bg-neutral-900 text-white px-main-layout grid-main-layout py-16"}>
                <div className={"flex flex-col justify-between py-2 pr-20"}>
                    <SiteLogo dark />
                    <p className={"text-sm text-neutral-400"}>"Просто Супер" не является зарегистрированнным товарным знаком</p>
                </div>
                {footerLinksSections.map(s => (
                    <div key={s.header}>
                        <header className={"py-2 text-xl"} children={s.header} />
                        <ul className="flex flex-col">
                            {s.links.map((l, i) => (
                                <li key={i} className="contents">
                                    <Link href={l.url}
                                        target={l.url.startsWith("https://") ? "_blank" : undefined}
                                        className={"px-2 py-1 hover:text-main-accent"}
                                        children={l.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={"w-full flex justify-center items-center relative text-sm p-2"}>
                <p>Данный сайт является учебным проектом</p>
                <Link
                    href={"https://github.com/YaredFall/prosto-super"}
                    className={"flex absolute right-0 px-4 py-2 opacity-75 hover:opacity-100 transition-opacity"}
                    target={"_blank"}
                >
                    <Image src={"/github-mark.svg"} width={20} height={20} alt={"GitHub"} />
                </Link>
            </div>
        </footer>
    )
}