import VacancyForm from '@/components/VacancyForm'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {}

export default function page({ }: Props) {
    
    
    return (
        <main className={""}>
            <div className={"mt-16 flex justify-between gap-16 px-main-layout"}>
                <div className='flex-[3]'>
                    <h1 className={"text-6xl font-bold"}>Найти работу легко!</h1>
                    <p className={"text-xl my-8"}>Заполни короткую анкету и мы подберем для тебя подходящую должность</p>

                </div>
                <div className='flex-[2]'>
                    <VacancyForm />
                </div>
            </div>
            <div className={"flex items-center my-16 py-8 font-medium text-2xl justify-between gap-4 bg-gray-200 px-main-layout"}>
                <div className={"text-center"}>Заполни анкету</div>
                <HiArrowNarrowRight />
                <div className={"text-center"}>Пройди собеседование</div>
                <HiArrowNarrowRight />
                <div className={"text-center"}>Приступай к работе</div>
            </div>
        </main>
    )
}