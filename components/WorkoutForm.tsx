import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PressableText } from "./styled/PressableText";

export type WorkoutFormData ={
    name: string
}

type WorkoutFormProps = {
    onSubmit: (form: WorkoutFormData) => void
}

export default function WorkoutForm({
    onSubmit
}: WorkoutFormProps){
    const {control, handleSubmit} = useForm();

    return (
        <View style={styles.container}>
            <Controller 
                control={control}
                rules={{
                    required: true
                }}
                name="name"
                render={({ field: {onChange, value}}) => 
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor={"rgba(0,0,0,0.4)"}
                        placeholder="Workout name"
                    />
                }  
            />
            <PressableText
                style={{marginTop: 10}}
                text="Confirm"
                onPress={handleSubmit((data) => {
                    onSubmit(data as WorkoutFormData);
                })}
            /> 
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
        width: 200,
        margin: 2,
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: "rgba(0,0,0, 0.4)"
    }
})
