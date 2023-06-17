import React from 'react'
import categories from '@/api-placeholder/goods-categories.json'
import Category from './Category'

type Props = {}

export default function GoodsCategories({}: Props) {
  return (
    <section className={"px-16 lg:px-32 my-16"}>
        <h2 className={"text-4xl mb-8 font-medium"} children={"Категории товаров"} />
        <ul className={"w-full grid grid-cols-[repeat(auto-fit,minmax(max(20%,16rem),1fr))] gap-8"}>
            {categories.map(c => (<Category data={c} key={c.id} />))}
        </ul>
    </section>
  )
}