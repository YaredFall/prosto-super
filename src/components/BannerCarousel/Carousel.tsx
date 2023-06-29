"use client";

import { FC, Ref, useEffect, useRef, useState } from 'react';
import banners from '../../api-placeholder/banners.json';
import Banner from './Banner';
import classNames from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type CarouselProps = {}

function getBanners() {
    return banners;
}

const BANNER_SWITCH_INTERVAL = 10000; //in milliseconds

const Carousel: FC<CarouselProps> = () => {
    const bannersData = getBanners();

    const [activeBanner, setActiveBanner] = useState(0);
    const [bannersTransitionGroup, setBannersTransitionGroup] = useState([bannersData[activeBanner]]);

    const timer = useRef(0);

    function changeBanner(to: "next" | "previous" | number) {
        timer.current = 0;

        let newBanner = 0;
        if (to === "next") {
            newBanner = (activeBanner + 1) % bannersData.length;
        } else if (to === "previous") {
            newBanner = (bannersData.length + activeBanner - 1) % bannersData.length;
        } else {
            newBanner = (bannersData.length + to % bannersData.length) % bannersData.length;
        }
        setBannersTransitionGroup([bannersData[newBanner]]);
        setActiveBanner(newBanner);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            timer.current = timer.current + 1000;
            if (timer.current >= BANNER_SWITCH_INTERVAL) {
                timer.current = 0;
                changeBanner("next");
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [activeBanner]);

    const bannerRefs = bannersData.map(_ => useRef<HTMLDivElement | null>(null));

    return (
        bannersData && bannersData.length > 0 &&
        <section className={"relative text-white w-full h-[640px] bg-black overflow-hidden"}>
            <TransitionGroup component={null}>
                {
                    bannersTransitionGroup.map((banner, i) => (
                        <CSSTransition nodeRef={bannerRefs[activeBanner] as Ref<HTMLDivElement>}
                                       key={banner.title}
                                       timeout={700}
                                       classNames={{
                                           enter: "translate-x-[0] duration-75",
                                           exit: "translate-x-[-100%] opacity-0"
                                       }}
                        >
                            <div ref={bannerRefs[activeBanner]} className={"absolute inset-0 transition-all duration-700"}>
                                <Banner data={banner} />
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
            <div className={"absolute right-24 bottom-12 h-4 flex items-center"}>
                {bannersData.map((_, i) => (
                    <button key={i}
                            onClick={() => changeBanner(i)}
                            className={"p-2 w-6 h-6"}
                            disabled={i === activeBanner}
                    >
                        <div className={classNames("h-full w-full rounded-full bg-current transition-transform",
                            i === activeBanner && "scale-[200%]")}
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Carousel;