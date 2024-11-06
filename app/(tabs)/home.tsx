import React from "react";
import GestureFlipView from "react-native-gesture-flip-card";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <View style={styles.container}>
                <GestureFlipView width={300} height={500}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
            </View>
        </SafeAreaView>
    );
};

const renderFront = () => {
    return (
        <View style={styles.frontStyle}>
            <Image
                source={require("../../assets/images/c-dwyk.png")}
                resizeMode="contain"
                className="w-[1200px] h-full rounded-2xl"
            />
        </View>
    );
};

const renderBack = () => {
    return (
        <View style={styles.backStyle}>
            <Image
                source={require("../../assets/images/c-back.png")}
                resizeMode="contain"
                className="w-[1200px] h-full rounded-2xl"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default Home;
