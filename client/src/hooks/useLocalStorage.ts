import { useState, useEffect } from 'react';

function getStorageValue(key: any, defaultValue: any) {
    const saved = localStorage.getItem(key);
    const initial = saved!= null ? JSON.parse(saved) : null;
    return initial || defaultValue;
}

export const useLocalStorage = (key: any, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
