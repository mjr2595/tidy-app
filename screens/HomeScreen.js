import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@rneui/themed";

const HomeScreen = ({ navigation }) => {
  const timeButtonOptions = [5, 10, 15, 30, 60];
  const dispatch = useDispatch();
  const { todoTasks, timeRemaining } = useSelector((store) => store.todolist);

  if (timeRemaining <= 0) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Time's up! You did it!</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>How much time do you have?</Text>
      {timeButtonOptions.map((time, index) => (
        <Button
          key={index}
          title={`${time} minutes`}
          buttonStyle={styles.timeButton}
          type="outline"
          raised
          titleStyle={styles.timeButtonTitle}
          containerStyle={styles.timeButtonContainer}
          onPress={() => {
            navigation.navigate("TaskScreen");
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    textAlign: "center",
  },
  timeButton: {
    borderColor: "rgba(78, 116, 289, 1)",
  },
  timeButtonTitle: {
    color: "rgba(78, 116, 289, 1)",
  },
  timeButtonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default HomeScreen;
