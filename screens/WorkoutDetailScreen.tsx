import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack"
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { PressableText } from "../components/styled/PressableText";
import { Modal } from "../components/styled/Modal";
import { formatSec } from "../utils/Time";
import { FontAwesome } from "@expo/vector-icons";
import WorkoutItem from "../components/WorkoutItem";

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
            <WorkoutItem item={workout} childStyles={{marginTop:10}}>
                <Modal 
                    activator={({handleOpen})=> 
                    <PressableText
                        onPress={handleOpen}
                        text={"Check Sequence"} />
                    } 
                >
                    <View>
                        { workout.sequence.map((si, idx) =>
                            <View key={si.slug} style={styles.sequenceItem}>
                                <Text>
                                    {si.name} | {si.type} | {formatSec(si.duration)}
                                </Text>
                                {idx !== workout.sequence.length - 1 &&
                                    <FontAwesome name="arrow-down" size={20} />
                                }
                            </View> 
                        )}
                    </View>
                </Modal>
            </WorkoutItem>
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
    },
    sequenceItem:{
        alignItems: "center"
    }
})