//Libs
import {useState , createContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem('theme');
        if (storedMode) {
            setTheme(JSON.parse(storedMode));
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext , ThemeProvider };