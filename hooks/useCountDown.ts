import { useEffect, useState, useRef } from "react";

export function useCountDown(
    idx:number,
    initialCount: number = -1
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
            }, 100);
        }
        return () => cleanup()
    }, [idx, isRunning]);

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

    const start = (count?: number) => {
        console.log(count);
        if (count === undefined) {
            setCountDown(initialCount); // Start from initial count
        } else {
            setCountDown(count); // Start from the provided count
        }
        setIsRunning(true);
    };

    return {
        countDown,
        isRunning,
        stop:cleanup,
        start
    };
}