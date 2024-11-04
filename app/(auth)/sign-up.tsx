import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { supabase } from "../utils/supabase.ts";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {};

    const testConnection = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            console.log("Connection failed:", error.message);
        } else {
            console.log("Connection successful:", data);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="bg-primary h-full">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View className="w-full justify-between pt-20 items-center h-full px-4">

                    <Button title="test" onPress={testConnection} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
