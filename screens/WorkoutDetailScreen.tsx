import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack"
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";

type DetailParams = {
    route: {
        params:{
            slug: string;
        }
    }
}

type Navigation = StackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({route}: Navigation){
    const workout = useWorkoutBySlug(route.params.slug);

    if(!workout){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{workout.name}</Text>
            <Modal 
              activator={({handleOpen})=> 
                <PressableText
                    onPress={handleOpen}
                    text={"Check Sequence"} />
                } 
            >
                <Text>Hello There!</Text>
            </Modal>
            <Modal 
              activator={({handleOpen})=> 
                <Button
                    onPress={handleOpen}
                    title={"Custom Button"} />
              }
            >
                <Text>Custom Hell There!</Text>
            </Modal>
            <Modal>
                <Text>Default Modal Window!</Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex:1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
    }
})