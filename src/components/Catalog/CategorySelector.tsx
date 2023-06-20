import { GOODS_CATEGORIES, GoodsCategoriesTranscript } from "@/utils/misc"
import React, { useState } from 'react'
import CheckboxMark from "../common/CheckboxMark"
import { GoodsCategories } from "@/utils/types"
import classNames from "classnames"

type Props = {
    selectedCategories?: Array<GoodsCategories>
    setSelectedCategories?: (newValue: Array<GoodsCategories>) => void
    className?: string
}

export default function CategorySelector({ selectedCategories = [], setSelectedCategories, className }: Props) {
    return (
        <div className={classNames("flex flex-col gap-1 h-max", className)}>
            {GOODS_CATEGORIES.map(category => (
                <CategoryCheckItem key={category} category={category} checked={selectedCategories.includes(category)} onChange={(checked) => {
                    if (checked) {
                        setSelectedCategories && setSelectedCategories([...selectedCategories, category]);
                    } else {
                        setSelectedCategories && setSelectedCategories(selectedCategories.filter(c => c !== category));
                    }
                }} />
            ))}
        </div>
    )
}

function CategoryCheckItem({ category, checked = false, onChange }: { category: GoodsCategories, checked?: boolean, onChange?: (newValue: boolean) => void }) {

    return (
        <label className="py-1 flex items-center gap-2 hover:cursor-pointer group">
            <input type="checkbox" checked={checked} className="hidden" onChange={(e) => {
                onChange && onChange(e.target.checked);
            }} />
            <CheckboxMark checked={checked} className={classNames(!checked && "before:content-[''] before:h-[0.25em] before:w-[0.25em] before:absolute before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:rounded-[1px] before:hidden before:group-hover:block")} />
            <span className="pt-0.5">{GoodsCategoriesTranscript.get(category)}</span>
        </label>
    )
}