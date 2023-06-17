import Link from 'next/link'
import Image from "next/image";
import React from 'react'

type CategoryData = {
    id: string
    name: string
    image: string
    link: string
}

type Props = {
    data: CategoryData
}

export default function Category({data}: Props) {
  return (
    <Link href={data.link} className='grid group'>
        <div className={"bg-gray-300 aspect-square relative rounded-2xl overflow-hidden"}>
            {data.image && <Image src={data.image} alt={data.name} fill className={"object-cover transition-[filter] group-hover:brightness-75"} />}
        </div>
        <h3 className={"text-2xl font-medium py-3 transition-colors group-hover:text-main-accent"} children={data.name} />
    </Link>
  )
}