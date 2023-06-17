import { FC } from 'react';
import Image from "next/image";

type BannerProps = {
    data: any
}

const Banner: FC<BannerProps> = ({ data }) => {
    return (
        <div className={"relative contents"}>
            <Image className={"object-cover w-full bg-black "} src={data.bg_image} alt={""} fill={true}/>
            <div className={"absolute inset-0 flex justify-center ml-[43%] px-12 pb-20 bg-[rgba(0,0,0,0.6)]"}>
                <div className={"flex flex-col items-start justify-center"}>
                    <p className={"text-md self-end mb-4"} children={`С ${data.start_date} по ${data.end_date}`} />
                    <h3 className={"text-6xl mb-4"} children={data.title} />
                    <p className={"text-2xl"} children={data.description} />
                </div>
            </div>
        </div>
    );
};

export default Banner;