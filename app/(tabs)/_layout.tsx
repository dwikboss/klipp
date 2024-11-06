import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";

const TabsLayout = () => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        alignItems: "center",
                        backgroundColor: "#000",
                        paddingTop: 25,
                        paddingBottom: 0,
                    }}
                >
                    <Text
                        style={{ fontWeight: "bold", color: "#fff" }}
                        className="text-3xl font-malternatesbold"
                    >
                        Klipp!
                    </Text>

                    <View
                        style={{ flexDirection: "row", marginTop: 10 }}
                        className="bg-primary"
                    >
                        <TouchableOpacity
                            onPress={() => alert("Profile")}
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                            }}
                        >
                            <Text className="font-mmedium text-zinc-400 text-xl">
                                My Card
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => alert("Collection")}
                            style={{
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                            }}
                        >
                            <Text className="font-mmedium text-zinc-400 text-xl">
                                Collection
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Stack>
                    <Stack.Screen
                        name="home"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </View>
        </>
    );
};

export default TabsLayout;
