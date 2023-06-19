import React from 'react'
import Category from './Category'
import { CategoryData } from "@/utils/types"

const categories: Array<CategoryData> = require('@/api-placeholder/goods-categories.json')

type Props = {}

export default function GoodsCategories({}: Props) {
  return (
    <section className={"my-16 px-main-layout"}>
        <h2 className={"text-4xl mb-8 font-medium"} children={"Категории товаров"} />
        <ul className={"w-full grid-main-layout"}>
            {categories.map(c => (<Category data={c} key={c.id} />))}
        </ul>
    </section>
  )
}