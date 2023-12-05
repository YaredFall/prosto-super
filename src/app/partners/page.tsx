'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

type Props = {}

let location = typeof window !== undefined ? window.location : undefined;

export default function page({ }: Props) {

    const [topics, setTopics] = useState<Array<string>>([]);

    const params = useParams();

    useLayoutEffect(() => {
        const hash = location?.hash.split('#')[1];
        if (hash && (!topics.includes(hash) || topics.length > 1)) setTopics([hash])
    }, [params])

    const onTriggerClick = (value: string[]) => {
        const hash = location?.hash.split('#')[1];
        hash && history.pushState(null, '', ' ')
        setTopics(prev => value)
    }

    return (
        <main className={"px-2main-layout mt-8 mb-16"}>
            <h1 className={"mb-4 text-xl font-semibold"}>Информация для партнеров</h1>
            <Accordion type="multiple" value={topics} onValueChange={onTriggerClick}>
                <AccordionItem value="suppliers">
                    <AccordionTrigger>Поставщикам</AccordionTrigger>
                    <AccordionContent className="max-w-[160ch]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto minima neque numquam aliquid, sapiente velit sint perferendis necessitatibus repellat nam reiciendis quia. Accusantium delectus saepe dolor beatae iusto, excepturi aut doloribus? Doloremque nesciunt quibusdam minima cum, iusto, voluptatem officia ipsa numquam repudiandae earum commodi ducimus, itaque pariatur provident quis unde aliquid distinctio consequuntur eius! Exercitationem, inventore dolor, explicabo voluptates eveniet vitae a optio sed, molestias numquam autem laboriosam ex consequuntur aperiam possimus? Numquam nam eum, provident beatae tenetur aperiam.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advertisers">
                    <AccordionTrigger>Рекламодателям</AccordionTrigger>
                    <AccordionContent className="max-w-[160ch]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem fugiat culpa cumque repudiandae, amet numquam assumenda libero nesciunt mollitia omnis facere rerum commodi iste consectetur deserunt ut, error quibusdam modi? Aspernatur sit debitis nobis sequi, corrupti minus nam id facilis. Porro, harum. Reiciendis error harum eaque at deleniti ullam facere quisquam. Deserunt dolores iusto natus officia iure velit itaque cumque ea! Quod, dolore. Autem rem minus vero repellendus, veniam tempora, recusandae neque ea quaerat quod voluptas eligendi voluptatibus aut voluptatum, odit suscipit earum veritatis vel in beatae sunt labore quae! Alias ipsa ullam delectus laudantium veritatis assumenda. Perspiciatis repellendus ducimus ea optio non delectus, totam facilis possimus amet itaque perferendis nisi dolorem eligendi cupiditate accusantium rerum asperiores, quod accusamus.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lease">
                    <AccordionTrigger>Аренда</AccordionTrigger>
                    <AccordionContent className="max-w-[160ch]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, adipisci inventore. Modi commodi suscipit nulla numquam dignissimos culpa aut a? Blanditiis temporibus aliquam minima sed enim accusantium quibusdam error possimus est accusamus amet reprehenderit sunt numquam unde asperiores, cupiditate doloribus explicabo reiciendis? Expedita, molestiae perferendis porro sit ex nobis magnam enim cum accusantium temporibus amet quidem eveniet id inventore impedit necessitatibus minima, quis doloremque odit quam. Ullam odit, dolorem aspernatur cum id dolorum voluptates vero inventore. Magnam culpa deserunt eveniet consequuntur non aliquid accusantium commodi, tempore in maiores dolorem architecto ab distinctio dolor atque, ipsam eaque dolorum ducimus, id explicabo?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="documents">
                    <AccordionTrigger>Документооборот</AccordionTrigger>
                    <AccordionContent className="max-w-[160ch]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus temporibus officia doloremque, voluptates harum tempore ab quod quia tempora totam eveniet reprehenderit repellat eos veniam, aspernatur aliquam quibusdam mollitia nam alias quisquam! Nam quisquam tempore culpa placeat dicta architecto obcaecati, pariatur totam accusantium fugit, porro voluptatibus et nemo accusamus rerum nesciunt molestiae, ad similique eius temporibus labore! Est, accusantium, aperiam doloribus unde excepturi quidem laborum reprehenderit laudantium maxime dolorem dicta!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}