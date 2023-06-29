import { useCallback, useLayoutEffect, useState } from "react";

export function useWindowWidth() {
    if (typeof window === "undefined") return;
    
    const [width, setWidth] = useState<number>(window.innerWidth);

    const resizeHandler = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return width;
}