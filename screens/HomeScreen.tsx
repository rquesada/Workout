import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { StackHeaderProps, StackNavigationProp } from "@react-navigation/stack"
import { ParamListBase, RouteProp } from "@react-navigation/native";

type HomeScreenProps = {
    navigation: StackNavigationProp<ParamListBase, "Home">;
    route: RouteProp<ParamListBase, "Home">;
};

export default function HomeScreen({navigation}: HomeScreenProps){
    
    useEffect(()=>{
        console.log("Rending Home Screen");

        return () => console.log("Unmounting Home Screen");
    },[]);
    
    return (
        <View>
            <Text>I am home screenssss</Text>
            <Button title="Go to Planner"
                onPress={() => {
                    navigation.navigate("Planner")
                }}
            />
        </View>
    )
}