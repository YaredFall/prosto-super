import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import { CategoryData, GoodsCategories } from "@/utils/types";
import { GoodsCategoriesTranscript } from "@/utils/misc";

type Props = {
  data: CategoryData
}

export default function Category({ data }: Props) {
  return (
    <Link href={`/catalog?category=${data.id}`} className='flex flex-col group min-w-[12rem]'>
      <div className={"bg-gray-300 aspect-square relative rounded-2xl overflow-hidden"}>
        {data.image && <Image src={data.image} alt={GoodsCategoriesTranscript.get(data.id) || ""} fill className={"object-cover transition-[filter] group-hover:brightness-75"} />}
      </div>
      <h3 className={"text-2xl font-medium py-3 transition-colors group-hover:text-main-accent"} children={GoodsCategoriesTranscript.get(data.id)} />
    </Link>
  )
}