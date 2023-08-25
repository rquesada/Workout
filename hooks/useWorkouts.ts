import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkouts } from "../storage/workouts";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = () => {
    const [workouts,setWorkouts] = useState<Workout[]>([]);
    const isFocused = useIsFocused();
    useEffect(()=>{
        async function getData() {
            const _workouts = await getWorkouts();    
            setWorkouts(_workouts);
        }
        getData();
    },[isFocused]);

    return workouts;
}