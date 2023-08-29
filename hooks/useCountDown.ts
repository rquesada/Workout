import { useEffect, useState, useRef } from "react";

export function useCountDown(
    idx:number,
    initialCount: number
) {
    const intervalRef = useRef<number>();
    const [countDown, setCountDown] = useState(initialCount);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (idx == -1){ return; }
        
        //setIsRunning(true);
        if (isRunning && !intervalRef.current){
            intervalRef.current = window.setInterval(() => {
                setCountDown((count) => {
                    if (count === 0) {
                        cleanup(); 
                        return 0;
                    }
                    return count - 1;
                });
            }, 10);
        }
        return () => cleanup()
    }, [idx]);

    useEffect(() => {
        setCountDown(initialCount);
    }, [initialCount])


    useEffect(() => {
        if(countDown === 0){
            cleanup()
        }
    }, [countDown])


    const cleanup = () => {
        if(intervalRef.current){
            setIsRunning(false);
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined
        }
    }

    return {
        countDown,
        isRunning,
        stop:cleanup,
        start: (count?: number) => {
            setCountDown(count ?? initialCount);
            setIsRunning(true);
        }
    };
}