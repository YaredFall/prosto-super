import React from 'react';

type Props = {};

export default function page({ }: Props) {
    return (
        <main className={"mt-16 font-medium"}>
            <h1 className={"mb-4 px-main-layout font-normal"}>О программе лояльности</h1>
            <div className={"py-12 px-main-layout bg-black text-white mb-16"}>
                <h2 className={"text-4xl mb-8"}>Больше покупаешь - больше экономишь!</h2>
                <p className={"text-lg"}>Совершай регулярный покупки и получай больше бонусов</p>
            </div>
            <div className={"py-12 px-main-layout bg-main-accent text-white mb-16"}>
                <h2 className={"text-4xl mb-8"}>Постоянные акции и бонусные рубли</h2>
                <p className={"text-lg"}>Оформи карту в любом магазине сети</p>
            </div>
            <div className={"py-12 px-main-layout mb-16"}>
                <h2 className={"text-4xl mb-8"}>Виртуальная карта в твоем телефоне</h2>
                <p className={"text-lg"}>Просто зарегистрируйся на сайте</p>
            </div>
        </main>
    );
}