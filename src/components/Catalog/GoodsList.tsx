import { GoodData } from "@/utils/types"
import { createRef, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import GoodCard from "./GoodCard"

type Props = {
    goods: Array<GoodData>
}

export default function GoodsList({ goods }: Props) {

    const nodeRefs = new Map(goods.map((good, i) => [good.id, createRef<HTMLDivElement>()]));

    const [deferredGoods, setDeferredGoods] = useState(goods);


    //trick for transitio
    useEffect(() => {
        if (JSON.stringify(deferredGoods) !== JSON.stringify(goods)) {
            setDeferredGoods([]);
            setTimeout(() => {
                setDeferredGoods([...goods]);
            }, 500)
        }
    }, [goods])


    return (
        <div className={"grid-main-layout-fill min-h-[75vh]"}>
            <TransitionGroup component={null}>
                {deferredGoods.map((good, i) => (
                    <CSSTransition key={good.id}
                        nodeRef={nodeRefs.get(good.id)}
                        timeout={500}
                        classNames={{
                            enter: "opacity-0 translate-y-4",
                            exit: "opacity-0 duration-200"
                        }}
                    >
                        <GoodCard ref={nodeRefs.get(good.id)} data={good} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}