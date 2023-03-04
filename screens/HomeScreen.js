import { StyleSheet, View, Text, SafeAreaView, Image, Modal } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { UserIcon } from "react-native-heroicons/outline";
import { TaskModal } from "../components/TaskModal";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState(null);
  const [timesArray, setTimesArray] = useState([5, 10, 15, 30, 60]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Tidy!",
      headerShown: false,
    });
  }, []);

  const showTidyItem = (time) => {
    setModalVisible(true);
    setTime(time);
    console.log("showTidyItem was exicuted");
  };

  const closeTidyItem = () => {
    setModalVisible(false);
    setTime(null);
    console.log("closeTidyItem was exicuted");
  };

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
        <TaskModal visible={modalVisible} showTidyItem={showTidyItem} closeTidyItem={closeTidyItem} time={time} />
        <Button
          title={"Add Time"}
          buttonStyle={styles.buttonStyle}
          type="outline"
          raised
          titleStyle={styles.titleStyle}
          containerStyle={styles.containerStyle}
          onPress={() => setTimesArray([...timesArray, 120])}
        />
        {timesArray.map((time) => (
          <Button
            title={`${time} minutes`}
            buttonStyle={styles.buttonStyle}
            type="outline"
            raised
            titleStyle={styles.titleStyle}
            containerStyle={styles.containerStyle}
            onPress={() => showTidyItem(time)}
          />
        ))}
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
