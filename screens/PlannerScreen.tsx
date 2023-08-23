import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";

type PlannerScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Planner">;
    route: RouteProp<ParamListBase, "Planner">;
};

export default function PlannerScreen({navigation}: PlannerScreenProps){

    useEffect(()=>{
        console.log("Rending Planner Screen");

        return () => console.log("Unmounting Planner Screen");
    },[]);
    
    return (
        <View>
            <Text>I am planner screen</Text>
            <Button title="Go to Home"
                onPress={() => {
                    navigation.navigate("Home")
                }}
            />
        </View>
    )
}