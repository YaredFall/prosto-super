'use client'

import classNames from "classnames";
import React from 'react';
import { LuArrowDownAZ, LuArrowDownNarrowWide, LuArrowDownWideNarrow, LuArrowDownZA } from 'react-icons/lu';

const SORTING_TYPES = ["alphabet", "price", "discount"] as const;

const SortingTypesTranscript = new Map([
    ["alphabet", "по алфавиту"],
    ["price", "по цене"],
    ["discount", "по размеру скидки"]
]);

type Props = {
    className?: string;
    sortingType?: typeof SORTING_TYPES[number];
    sortingOrder?: "asc" | "desc";
    onChange?: (newType: Props["sortingType"], newOrder: Props["sortingOrder"]) => void;
};

export default function SortingSelector({ className, sortingType = "alphabet", sortingOrder = "desc", onChange }: Props) {
    return (
        <div className={classNames("text-lg", className)}>
            <button className={"text-2xl hover:text-main-accent"} onClick={() => {
                onChange && onChange(sortingType, sortingOrder === "asc" ? "desc" : "asc");
            }}>
                {sortingOrder === "asc" ? 
                (sortingType === "alphabet" ? <LuArrowDownZA /> : <LuArrowDownNarrowWide />) 
                : (sortingType === "alphabet" ? <LuArrowDownAZ /> : <LuArrowDownWideNarrow />)}
            </button>
            {
                SORTING_TYPES.map(type => (
                    <button key={type}
                        className={classNames("px-2 hover:text-main-accent transition-colors", sortingType === type && "font-medium pointer-events-none")}
                        disabled={sortingType === type}
                        onClick={() => {
                            onChange && onChange(type, sortingOrder);
                        }}
                        children={SortingTypesTranscript.get(type)}
                    />
                ))
            }
        </div>
    );
}