'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import GoodsList from "@/components/Catalog/GoodsList";
import CategorySelector from "@/components/Catalog/CategorySelector";
import { GoodData, GoodsCategories } from "@/utils/types";
import useLocalStorage from "@/hooks/useLocalStorage";
import SortingSelector from "@/components/Catalog/SortingSelector";
import plural from "plural-ru"

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
            params.set("on_sale", "true")
        } else {
            params.delete("on_sale");
        }

        router.push(pathname + '?' + params.toString());
    }

    const [sorting, setSorting] = useLocalStorage('sorting', localStorage.getItem('sorting') ? JSON.parse(localStorage.getItem('sorting')!) : 'alphabet,desc');
    const [sortingType, sortingOrder] = sorting.split(",") as [Parameters<typeof SortingSelector>[number]["sortingType"], Parameters<typeof SortingSelector>[number]["sortingOrder"]];

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
                if (a.sale_price && !b.sale_price) return -1;
                else if (!a.sale_price && b.sale_price) return 1;
                else if (!a.sale_price && !b.sale_price) return 0;
                else res = (+a.price - +a.sale_price!) / +a.price > (+b.price - +b.sale_price!) / +b.price ? 1 : -1;
                break;
        }
        return res * (sortingOrder === "asc" ? 1 : -1);
    });

    return (
        <main className="px-main-layout pb-16 grid grid-cols-[1fr_3fr] gap-x-8">
            <div className={"row-span-2 sticky top-0 h-max"}>
                <h1 className={"text-4xl pb-7 pt-12 font-medium flex items-center"}>Каталог</h1>
                <CategorySelector selectedCategories={categories} onSale={onSale} setOnSale={setOnSale} setSelectedCategories={setCategories} className={"pl-2"} />
                <p className={"mt-4 mb-4 text-neutral-600 pl-2"}>{plural(sortedAndFilteredGoods.length, "%d товар", "%d товара", "%d товаров")}</p>
            </div>
            <SortingSelector
                sortingType={sortingType}
                sortingOrder={sortingOrder}
                onChange={(newType, newOrder) => {
                    setSorting(`${newType},${newOrder}`);
                }}
                className={"flex h-10 mb-8 mt-12 gap-8"}
            />
            <GoodsList goods={sortedAndFilteredGoods} />
        </main>
    );
}