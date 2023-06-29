import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image';

type Props = {};

export default function page({ }: Props) {
    return (
        <main className={"mt-16 font-medium"}>
            <h1 className={"mb-4 px-main-layout"}>О программе лояльности</h1>
            <div className={"py-12 px-main-layout bg-pink-100 text-black mb-16"}>
                <h2 className={"text-4xl"}>Больше покупаешь - больше экономишь!</h2>
                <div className={"flex items-center justify-between my-16 text-7xl font-bold"}>
                    <div className={"w-32 h-32 bg-red-200 flex items-center justify-center rounded-xl"}>₽</div>
                    <HiArrowNarrowRight />
                    <div className={"w-32 h-32 bg-secondary-accent text-white flex items-center justify-center rounded-xl"}>Б</div>
                    <HiArrowNarrowRight />
                    <div className={"w-32 h-32 bg-main-accent text-white flex items-center justify-center rounded-xl"}>%</div>
                </div>
                <p className={"text-lg"}>Совершай регулярный покупки и получай больше бонусов</p>
            </div>
            <div className={"py-12 px-main-layout bg-emerald-200 text-black mb-16"}>
                <h2 className={"text-4xl"}>Постоянные акции и бонусные рубли</h2>
                <div className={"my-16 flex items-center justify-around text-7xl"}>
                    <div className={"bg-main-accent relative w-64 h-40 rounded-xl overflow-hidden text-white"}>
                        <span className='absolute top-12 left-4 text-3xl'>Супер карта</span>
                        <span className='absolute bottom-4 right-8 text-lg'>000 000</span>
                        <div className='absolute border-8 rounded-full inset-0 translate-x-3/4 -translate-y-1/2'></div>
                        <div className='absolute border-8 border-black rounded-full inset-0 -translate-x-2/3 translate-y-1/2 scale-50'></div>
                    </div>
                    <HiArrowNarrowRight />
                    <div className={"relative h-40 w-64"}>
                        <div className={"absolute -top-8 left-4 w-32 h-32 bg-secondary-accent text-white flex items-center justify-center rounded-xl"}>Б</div>
                        <div className={"absolute -bottom-8 right-4 w-32 h-32 bg-main-accent text-white flex items-center justify-center rounded-xl"}>%</div>
                    </div>
                </div>
                <p className={"text-lg"}>Оформи карту в любом магазине сети</p>
            </div>
            <div className={"py-12 px-main-layout mb-16 bg-orange-200"}>
                <h2 className={"text-4xl"}>Виртуальная карта в твоем телефоне</h2>
                <div className={"my-16 text-7xl flex items-center justify-around "}>
                    <BsFillPersonFill className='text-white bg-neutral-500 rounded-xl w-32 h-32' />
                    <HiArrowNarrowRight />
                    <div className='rounded-xl h-32 w-32 relative overflow-hidden outline-8 outline outline-red-400'>
                        <Image src={"https://chart.googleapis.com/chart?cht=qr&chl=%D0%A1%D1%83%D0%BF%D0%B5%D1%80%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20%E2%84%96000000&chs=180x180&choe=UTF-8&chld=L|2"}
                            fill
                            alt='QR'
                        />
                    </div>
                </div>
                <p className={"text-lg"}>Просто зарегистрируйся на сайте</p>
            </div>
        </main>
    );
}