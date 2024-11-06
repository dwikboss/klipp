import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";

const TabsLayout = () => {
    return (
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
                    style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}
                >
                    Logo
                </Text>

                <View
                    style={{ flexDirection: "row", marginTop: 10 }}
                    className="bg-primary"
                >
                    <TouchableOpacity
                        onPress={() => alert("Profile")}
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginRight: 10,
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                            BTN-P
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => alert("Collection")}
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: "#fff" }}>
                            BTN-C
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
    );
};

export default TabsLayout;
