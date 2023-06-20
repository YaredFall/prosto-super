import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : initialValue);
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}