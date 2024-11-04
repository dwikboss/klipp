import { Text, View, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

const Index = () => {
    return (
        <SafeAreaView className="bg-primary h-full">
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3, padding: 40 }} className="justify-center items-center">
                    <Image
                        source={require("../assets/images/card-example.png")}
                        resizeMode="contain"
                        className="w-full"
                    />
                </View>
                <View
                    style={{ flex: 1 }}
                    className="justify-center items-center"
                >
                    <Text className="text-white mb-5 text-7xl font-malternatesbold leading-none">
                        klipp!
                    </Text>
                    <Text className="text-white mb-[25px] text-lg font-mmedium leading-none">
                        Collect your friends
                    </Text>
                    <CustomButton
                        title="Start collecting"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-1/2"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Index;
