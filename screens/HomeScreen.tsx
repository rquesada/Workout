import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MontserratText";

type HomeScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Home">;
    route: RouteProp<ParamListBase, "Home">;
};

export default function HomeScreen({navigation}: HomeScreenProps){
    
    // useEffect(()=>{
    //     console.log("Rending Home Screen");

    //     return () => console.log("Unmounting Home Screen");
    // },[]);

    const PressableItem = ({item}:{item:Workout}) => {
        return(
            <Pressable
            onPress={() => alert(`I am pressed - ${item.name}`)}
            >
                <WorkoutItem item={item} />
            </Pressable>
        )
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
            <MontserratText
                style={{fontSize:30}}    
            >
                New Workouts
            </MontserratText>
            {/* <Text>{ JSON.stringify(data) }</Text> */}
            <FlatList 
                data={data as Workout[]} 
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