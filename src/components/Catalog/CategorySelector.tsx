import { GOODS_CATEGORIES, GoodsCategoriesTranscript } from "@/utils/misc";
import { GoodsCategories } from "@/utils/types";
import classNames from "classnames";
import CheckboxMark from "../common/CheckboxMark";
import React from 'react';

type Props = {
    selectedCategories?: Array<GoodsCategories>;
    setSelectedCategories?: (newValue: Array<GoodsCategories>) => void;
    onSale?: boolean;
    setOnSale: (newValue: boolean) => void;
    className?: string;
};

export default function CategorySelector({ selectedCategories = [], setSelectedCategories, onSale = false, setOnSale, className }: Props) {
    
    const onCategoryCheckboxChange = (category: GoodsCategories) => (checked: boolean) => {
        setSelectedCategories && setSelectedCategories(
            checked ? [...selectedCategories, category] : selectedCategories!.filter(c => c !== category));
    };
    
    return (
        <div className={classNames("flex flex-col gap-1 h-max", className)}>
            <CategoryCheckItem label="Со скидкой" checked={!!onSale} className={"mb-3"} onChange={(checked) => {
                setOnSale && setOnSale(checked);
            }}
            />
            {GOODS_CATEGORIES.map(category => (
                <CategoryCheckItem key={category}
                                   label={GoodsCategoriesTranscript.get(category)!}
                                   checked={selectedCategories!.includes(category)}
                                   onChange={onCategoryCheckboxChange(category)}
                />
            ))}
        </div>
    );
}

function CategoryCheckItem({ label, checked = false, onChange, className }:
    { label: string, checked?: boolean, onChange?: (newValue: boolean) => void, className?: string; }) {

    return (
        <label className={classNames("py-3 sm:py-1 flex items-center gap-2 hover:cursor-pointer group", className)}>
            <input type="checkbox" checked={checked} className="hidden" onChange={(e) => {
                onChange && onChange(e.target.checked);
            }}
            />
            <CheckboxMark checked={checked}
                          className={classNames(
                              !checked && "flex-shrink-0 before:content-[''] before:h-[0.25em] before:w-[0.25em] before:absolute before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:rounded-[1px] before:hidden before:group-hover:block")}
            />
            <span className="pt-0.5">{label}</span>
        </label>
    );
}