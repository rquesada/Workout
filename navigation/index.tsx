import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import React from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

export default function Navigation(){
    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator(){
    return (
        <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Root"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    );
};

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator(){
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen 
                name="Home" 
                component={HomeScreen}
                //options={{ unmountOnBlur: true }} 
                options={{
                    tabBarIcon: ({color, size}) =>
                    <FontAwesome name="home" size={size} color={color} />
                }}
            />
            <BottomTab.Screen 
                name="Planner" 
                component={PlannerScreen} 
                //options={{ unmountOnBlur: true }}
                options={{
                    tabBarIcon: ({color, size}) =>
                    <Entypo name="add-to-list" size={size} color={color} />
                }}
            />
        </BottomTab.Navigator>
    );
}