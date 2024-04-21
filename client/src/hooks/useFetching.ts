import {useState} from "react";

export const useFetching = (callback: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: any[]) => {
        try{
            setIsLoading(true)
            await callback(...args);
        }catch(err: any){
            setError(err);
        }finally{
            setIsLoading(false);
        }
    }

    return [fetching, setIsLoading, error]
}
