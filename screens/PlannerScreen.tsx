import { View, StyleSheet } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";
import WorkoutForm, { ExerciseForm } from "../components/WorkoutForm";

type PlannerScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Planner">;
    route: RouteProp<ParamListBase, "Planner">;
};

export default function PlannerScreen({navigation}: PlannerScreenProps){

    const handleFormSubmit = (form: ExerciseForm) => {
        alert(`${form.name} + ${form.duration}`)
    }

    return (
        <View style={styles.container}>
           <WorkoutForm onSubmit={handleFormSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    }
})
