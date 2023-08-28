import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkoutBySlug } from "../storage/workouts";

export const useWorkoutBySlug = (slug: string) => {
    const [workout,setWorkout] = useState<Workout>();
    
    useEffect(()=>{
        async function getData() {
            const _workout = await getWorkoutBySlug(slug); 
            setWorkout(_workout);
        }
        getData();
    },[]);

    return workout;
}