//Hook criado para controlar o tema da aplicação, sendo 'ligth'ou 'dark'

import React from "react";
import { useEffect, useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState<'ligth' | 'dark'>('ligth');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'ligth' | 'dark' | null;
        if(storedTheme) {
            setTheme(storedTheme);
                document.documentElement.setAttribute('data-theme', storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'ligth' ? 'dark' : 'ligth';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return { theme, toggleTheme};
}

export default useTheme;