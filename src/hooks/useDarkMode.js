import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
const body = document.getElementsByTagName("body");

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark_mode", value);

    useEffect(()=>{
        if(darkMode){
            body[0].classList.add("dark-mode");
        }
        else{
            body[0].classList.remove("dark-mode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};