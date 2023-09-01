import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { PressableText } from "./styled/PressableText";


export type ExerciseForm ={
    name: string,
    duration: string
}

type WorkoutFormProps ={
    onSubmit: (form: ExerciseForm) => void
}

export default function WorkoutForm({
    onSubmit
}: WorkoutFormProps){
    const [form, setForm] = useState({
        name: "",
        duration: ""
    });

    const onChangeText = (name: string) => (text: string) => {
        setForm({
            ...form,
            [name]:text
        })
    };


    return (
        <View style={styles.container}>
            <Text>Exercise Form</Text>
            <View>
                <TextInput 
                    onChangeText={onChangeText("name")} 
                    style={styles.input} 
                    value={form.name} 
                />
                <TextInput 
                    onChangeText={onChangeText("duration")} 
                    style={styles.input} 
                    value={form.duration} 
                />
                <PressableText 
                    text="Submit"
                    onPress={() => onSubmit(form)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})
