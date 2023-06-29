import React from 'react'
import Category from './Category'
import { CategoryData } from "@/utils/types"
import Link from "next/link"
import { HiOutlineChevronRight } from "react-icons/hi"

const categories: Array<CategoryData> = require('@/api-placeholder/goods-categories.json')

type Props = {}

export default function GoodsCategories({}: Props) {
  return (
    <section className={"my-16 px-main-layout"}>
        <h2 className={"text-4xl mb-8 font-medium"}>
          <Link className="hover:text-main-accent py-2" href={"/catalog"}>
            <span>Каталог</span><HiOutlineChevronRight className="inline-flex ml-2 p-2" />
          </Link>
        </h2>
        <ul className={"w-full grid-main-layout grid-cols-[repeat(2,minmax(min-content,1fr))]"}>
            {categories.map(c => (<Category data={c} key={c.id} />))}
        </ul>
    </section>
  )
}