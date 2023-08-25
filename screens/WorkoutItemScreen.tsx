import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { StackHeaderProps, StackNavigationProp } from "@react-navigation/stack"

type DetailParams = {
    route: {
        params:{
            slug: string;
        }
    }
}

type Navigation = StackHeaderProps & DetailParams;

export default function WorkoutDetailScreen({route}: Navigation){
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Slug - {route.params.slug}</Text>
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