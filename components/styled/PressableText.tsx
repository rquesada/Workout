import React from "react";
import { Pressable, Text, StyleSheet, PressableProps } from "react-native";

export function PressableText(props: PressableProps & {text: string}){

    return(
        <Pressable {...props}>
           <Text style={{textDecorationLine:'underline'}}>
                {props.text}
            </Text>
        </Pressable>
    );
}