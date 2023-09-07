import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MontserratText";
import { useWorkouts } from "../hooks/useWorkouts";
import { ThemeText } from "../components/styled/ThemeText";

type HomeScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Home">;
    route: RouteProp<ParamListBase, "Home">;
};

export default function HomeScreen({navigation}: HomeScreenProps){
    const workouts = useWorkouts();
    
    // useEffect(()=>{
    //     console.log("Rending Home Screen");

    //     return () => console.log("Unmounting Home Screen");
    // },[]);

    const PressableItem = ({item}:{item:Workout}) => {
        return(
            <Pressable
            onPress={() => 
                navigation.navigate("WorkoutDetail", {slug:item.slug})}
            >
                <WorkoutItem item={item} />
            </Pressable>
        )
    };
    
    return (
        <View style={styles.container}>
            <ThemeText style={styles.header}>New Workouts</ThemeText>
            {/* <Text>{ JSON.stringify(data) }</Text> */}
            <FlatList 
                data={workouts} 
                keyExtractor={item => item.slug}
                renderItem={PressableItem}
            />
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