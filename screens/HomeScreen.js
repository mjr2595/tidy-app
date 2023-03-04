import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
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
    <>
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
      {/* Time selector */}
      <View className="items-center pt-10">
        <Text className="font-bold text-xl pb-5">How much time do you have?</Text>
        <Button
          title="5 minutes"
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
        <Button
          title="10 minutes"
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
        <Button
          title="15 minutes"
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
        <Button
          title="30 minutes"
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
        <Button
          title="60 minutes"
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: "rgba(78, 116, 289, 1)",
  },
  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  titleStyle: {
    color: "rgba(78, 116, 289, 1)",
  },
});

export default HomeScreen;
