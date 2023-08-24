import React from "react";
import { Text } from "react-native"

//export function MontserratText({children}:{children:Text["props"]["children"] }) {
//export function MontserratText({children}:{children:React.ReactNode }) {
    export function MontserratText(props:Text["props"]) {
    return (
        <Text 
            {...props} 
            style={[ props.style,  {fontFamily: "montserrat"}]} 
        />
    );
};