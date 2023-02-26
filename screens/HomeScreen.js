import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Tidy!",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row p-4 items-center mx-1 space-x-2">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2088/2088675.png",
          }}
          className="h-7 w-7 p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-xl">Time to Tidy!</Text>
        </View>
        <UserIcon size={35} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
