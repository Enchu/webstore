import React, {FC, useEffect} from 'react';
import detectDarkMode from "../../utils/detectDarkMode";
import {useLocalStorage} from "../../utils/useLocalStorage";
import './style.scss';
import Image from "../image/ImageProps";

import sun from "../../image/icons/sun.svg"
import moon from "../../image/icons/moon.svg"

const BtnDarkMode: FC = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue: any) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <Image img={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <Image img={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    );
};

export default BtnDarkMode;