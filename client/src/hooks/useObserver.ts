import {useEffect, useRef} from "react";
import {observer} from "mobx-react-lite";

export const useObserver = (ref: any, canLoad: any, callback: any) => {
    const observer = useRef<any>();

    useEffect(() => {
        if(observer.current){observer.current.disconnect();}

        const callbackFunction = function(entries: any){
            if(entries[0].isIntersecting && canLoad){
                callback()
            }
        };

        observer.current = new IntersectionObserver(callbackFunction);
        observer.current.observe(ref.current)
    }, []);
}
