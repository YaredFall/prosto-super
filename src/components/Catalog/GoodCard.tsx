import { GoodData } from "@/utils/types"
import React, { forwardRef } from 'react'
import Image from "next/image"

type Props = {
  data: GoodData
}

const GoodCard = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  return (
    <article ref={ref} className={"transition-all duration-500"}>
      <div className={"aspect-square bg-neutral-200 rounded-2xl flex items-center justify-center relative overflow-hidden"}>
        {data.image ?
          <Image src={data.image} fill alt={data.name} className="object-cover" />
          :
          <span className={"text-neutral-300 font-bold text-4xl text-center"}>Картинка отсутствует</span>
        }
        <div className="absolute inset-0 flex flex-col items-end justify-end font-medium">
          {data.sale_price && <div className={"self-start mb-auto px-4 pt-1.5 pb-1 bg-main-accent text-white rounded-br-xl font-bold"} children={"-" + ~~((+data.price - +data.sale_price) / +data.price * 100) + "%"} />}
          {data.sale_price && <div className={"bg-white pl-3 pr-2 pb-0.5 pt-1.5 text-sm rounded-tl-xl relative after:h-0.5 after:opacity-90 after:absolute after:content-[''] after:-inset-1 after:top-1/2 after:bg-main-accent after:-rotate-15"} children={data.price} />}
          <div className={"bg-neutral-900 text-white text-lg px-4 pb-1 pt-1.5 rounded-tl-2xl"} children={data.sale_price || data.price} />
        </div>
      </div>
      <header className={"text-xl font-medium py-2 px-1"}>
        {data.name}
      </header>
    </article>
  )
})

export default GoodCard