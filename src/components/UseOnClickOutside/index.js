import { useState, useEffect, useRef } from "react";

export default function useOnClickOutside(ref, handler) {

 //#region "Screen size"
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])
  //#endregion

    useEffect(() => {
        if(screenSize.dynamicWidth <1500){
            window.addEventListener('resize', setDimension);
            return(() => {
                window.removeEventListener('resize', setDimension);
            })
        }
    }, [])
    
    useEffect(() => {
        if (screenSize.dynamicWidth <1500){
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
    
                handler(event);
            };
    
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }
    },[ref, handler]);    
}