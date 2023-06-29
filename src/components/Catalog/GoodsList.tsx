import { GoodData } from "@/utils/types";
import { createRef, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import GoodCard from "./GoodCard";

type Props = {
    goods: Array<GoodData>;
};

export default function GoodsList({ goods }: Props) {

    const nodeRefs = new Map(goods.map((good, i) => [good.id, createRef<HTMLDivElement>()]));

    const [deferredGoods, setDeferredGoods] = useState(goods);


    //trick for transition
    useEffect(() => {
        if (JSON.stringify(deferredGoods) !== JSON.stringify(goods)) {
            setDeferredGoods([]);
            setTimeout(() => {
                setDeferredGoods([...goods]);
            }, 500);
        }
    }, [goods]);

    const nothingFoundRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"grid-main-layout grid-cols-3 min-h-[75vh] relative"}>
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
                {!deferredGoods.length &&
                    <CSSTransition key={"nothing"}
                        nodeRef={nothingFoundRef}
                        timeout={1000}
                        classNames={{
                            enter: "opacity-0 translate-y-4",
                            exit: "opacity-0 duration-200"
                        }}
                    >
                        <p ref={nothingFoundRef} className={"absolute text-4xl font-medium text-neutral-400 inset-0 px-4 transition-all duration-500"}>Ничего не найдено!</p>
                    </CSSTransition>
                }
            </TransitionGroup>
        </div>
    );
}