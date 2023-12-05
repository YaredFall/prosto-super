'use client';

import React, { useLayoutEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import GoodsList from "@/components/Catalog/GoodsList";
import CategorySelector from "@/components/Catalog/CategorySelector";
import { GoodData, GoodsCategories } from "@/utils/types";
import useLocalStorage from "@/hooks/useLocalStorage";
import SortingSelector from "@/components/Catalog/SortingSelector";
import plural from "plural-ru";
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { cn } from "@/lib/utils";
import { LAYOUT_BREAKPOINT } from '@/utils/misc';
import { BsCheckLg } from 'react-icons/bs';
import { TbFilter } from 'react-icons/tb';


const goodsList: Array<GoodData> = require('@/api-placeholder/goods-list.json');

type Props = {};

export default function page({ }: Props) {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const categories = (searchParams.get('category') || undefined)?.split(',') as Array<GoodsCategories> | undefined;
    const onSale = searchParams.has('on_sale');

    const setCategories = (newCategories: Array<GoodsCategories>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newCategories.length > 0) {
            params.set('category', newCategories.join(","));
        } else {
            params.delete('category');
        }

        router.push(pathname + '?' + params.toString());
    };

    const setOnSale = (newValue: boolean) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newValue) {
            params.set("on_sale", "true");
        } else {
            params.delete("on_sale");
        }

        router.push(pathname + '?' + params.toString());
    };

    let localStorage = undefined;
    if (typeof window !== 'undefined') {
        localStorage = window.localStorage;
    }
    const [sorting, setSorting] = useLocalStorage('sorting',
        localStorage?.getItem('sorting') ? JSON.parse(localStorage!.getItem('sorting')!) : 'alphabet,desc');

    const [sortingType, sortingOrder] = sorting.split(
        ",") as [Exclude<Parameters<typeof SortingSelector>[number]["sortingType"], undefined>, Exclude<Parameters<typeof SortingSelector>[number]["sortingOrder"], undefined>];

    const sortedAndFilteredGoods = goodsList.filter(good =>
        (categories?.includes(good.category) ?? true) && (onSale ? good.sale_price : true)
    ).sort((a, b) => {
        let res = 0;
        switch (sortingType) {
            case "alphabet":
                res = a.name < b.name ? 1 : -1;
                break;
            case "price":
                res = (+a.sale_price! || +a.price) > (+b.sale_price! || +b.price) ? 1 : -1;
                break;
            case "discount":
                if (a.sale_price && !b.sale_price) {
                    return -1;
                } else if (!a.sale_price && b.sale_price) {
                    return 1;
                } else if (!a.sale_price && !b.sale_price) {
                    return 0;
                } else {
                    res = (+a.price - +a.sale_price!) / +a.price > (+b.price - +b.sale_price!) / +b.price ? 1 : -1;
                }
                break;
        }
        return res * (sortingOrder === "asc" ? 1 : -1);
    });

    const windowWidth = useWindowWidth();
    const isSmallScreen = windowWidth ? windowWidth < LAYOUT_BREAKPOINT : false;

    const [isCategorySelectorOpen, setIsCategorySelectorOpen] = useState(false);

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("overflow-clip", isCategorySelectorOpen);
    }, [isCategorySelectorOpen]);

    return (
        <main className={cn("px-main-layout pb-16 grid gap-x-8", isSmallScreen ? "grid-cols-[auto]" : "grid-cols-[1fr_3fr]")}>
            <div className={cn("row-span-2 h-max z-10", !isSmallScreen && "sticky top-0")}>
                <div className={"pb-7 pt-12 flex items-center justify-between"}>
                    <h1 className={"text-4xl font-medium"}>Каталог</h1>
                    {isSmallScreen && <button className={"text-4xl"} onClick={() => setIsCategorySelectorOpen(prev => !prev)}>{isCategorySelectorOpen ? <BsCheckLg /> : <TbFilter />}</button>}
                </div>
                <div className={cn(isSmallScreen && "absolute text-2xl bg-white w-screen left-0 px-main-layout -mt-8 pt-8 h-screen transition-transform duration-500", !isSmallScreen || isCategorySelectorOpen ? "translate-x-0" : "translate-x-full")}>
                    <CategorySelector selectedCategories={categories}
                        onSale={onSale}
                        setOnSale={setOnSale}
                        setSelectedCategories={setCategories}
                        className={"pl-2"}
                    />
                    <p className={"mt-4 mb-4 text-neutral-600 pl-2"}>
                        {plural(sortedAndFilteredGoods.length, "%d товар", "%d товара", "%d товаров")}
                    </p>
                </div>
            </div>
            <SortingSelector
                sortingType={sortingType}
                sortingOrder={sortingOrder}
                onChange={(newType, newOrder) => {
                    setSorting(`${newType},${newOrder}`);
                }}
                className={cn("flex h-10 mb-8 gap-8", isSmallScreen ? "mt-0" : "mt-12")}
            />
            <GoodsList goods={sortedAndFilteredGoods} />
        </main>
    );
}