import { Text, View, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

import { images } from '../constants'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-start py-36 items-center h-full px-4">
          <Text className="text-6xl text-white font-bold mb-5">Klipp</Text>
          <Text className="text-3xl text-white font-bold">Create and collect</Text>
          <Text className="text-3xl text-white font-bold">custom photocards</Text>
          <CustomButton 
            title="Create!"
            handlePress={() => {}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
