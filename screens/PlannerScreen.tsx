import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";
import ExerciseForm, { ExerciseFormData } from "../components/ExerciseForm";
import { SequenceItem, SequenceType, Workout } from "../types/data";
import slugify from "slugify";
import ExerciseItem from "../components/ExerciseItem";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import WorkoutForm, { WorkoutFormData } from "../components/WorkoutForm";
import { storeWorkout } from "../storage/workouts";
import { PressableThemeText } from "../components/styled/PressableThemeText";

type PlannerScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Planner">;
    route: RouteProp<ParamListBase, "Planner">;
};

export default function PlannerScreen({navigation}: PlannerScreenProps){

    const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

    const handleExcerciseSubmit = (form: ExerciseFormData) => {
        const sequenceItem: SequenceItem = {
            slug: slugify(form.name + Date.now(), {lower:true}),
            name: form.name,
            type: form.type as SequenceType,
            duration: Number(form.duration),
        };

        if(form.reps){
            sequenceItem.reps = Number(form.reps);
        }

        setSeqItems([...seqItems, sequenceItem]);
    }

    const computedDiff = (exerciseCount: number,  workoutDuration: number) => {
        const intensity = workoutDuration / exerciseCount;

        if (intensity <= 60 ) {
            return "hard";
        }else if(intensity <= 100 ) {
            return "normal";
        }else{
            return "easy";
        } 
    }

    const handleWorkoutSubmit = async (form: WorkoutFormData) => {
        if (seqItems.length > 0){

            const duration = seqItems.reduce((acc, item) => {
                return acc + item.duration;
            }, 0)

            const workout: Workout = {
                name: form.name,
                slug: slugify(form.name + Date.now(), {lower:true}),
                difficulty: computedDiff(seqItems.length, duration),
                sequence: [...seqItems],
                duration
            }
            await storeWorkout(workout);
        }
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={seqItems}
                renderItem={({item, index}) =>
                    <ExerciseItem item={item}>
                        <PressableText 
                            text="Remove"
                            onPressIn={() => {
                                const items = [...seqItems];
                                items.splice(index, 1);
                                setSeqItems(items);
                            }}
                        />
                    </ExerciseItem>
                }
                keyExtractor={item => item.slug}
            />
           <ExerciseForm onSubmit={handleExcerciseSubmit} />
           <View>
                <Modal
                    activator={({handleOpen}) => 
                        <PressableThemeText 
                            style={{marginTop: 15}}
                            text="Create Workout" 
                            onPress={handleOpen} />
                    }
                >
                { ({handleClose}) => 
                    <View>
                        <WorkoutForm onSubmit={async (data) => {
                            await handleWorkoutSubmit(data);

                            handleClose();
                            navigation.navigate("Home");
                        }} />
                    </View>
                }
                </Modal>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    }
})
