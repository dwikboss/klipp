import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
    const router = useRouter();
    
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        router.replace("/(tabs)/home");
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <SafeAreaView className="bg-primary h-full">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View className="w-full justify-between pt-20 items-center h-full px-4">
                        <Text className="text-4xl text-center text-white font-bold mb-5">
                            Log in to Klipp
                        </Text>
                        <FormField
                            title="Email"
                            value={form.email}
                            placeholder="Email"
                            handleChangeText={(e) =>
                                setForm({ ...form, email: e })
                            }
                            otherStyles="mt-7"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Password"
                            value={form.password}
                            placeholder="Password"
                            handleChangeText={(e) =>
                                setForm({ ...form, password: e })
                            }
                            otherStyles="mt-7"
                        />
                        <View style={{ flex: 1 }} />
                        <CustomButton
                            title="Log in"
                            handlePress={submit}
                            containerStyles="w-full mt-10"
                            isLoading={isSubmitting}
                        />
                        <View className="mt-5 mb-5 flex-row gap-2">
                            <Text className="text-md text-zinc-500 font-pmedium">
                                Don't have an account?
                            </Text>
                            <Link
                                className="text-md text-white font-pmedium"
                                href="/sign-up"
                            >
                                Sign Up
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
