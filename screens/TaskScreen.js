import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "@rneui/themed";
import { selectRandomTask } from "../features/todoList/todoListSlice";

const TaskScreen = ({ navigation }) => {
  const taskToDo = selectRandomTask();
  console.log(taskToDo);
  return (
    <View style={styles.taskContainer}>
      <Card>
        <Card.Title>{taskToDo.title}</Card.Title>
        <Card.Divider />
        <Text>{taskToDo.description}</Text>
        <Text>This should take you {taskToDo.taskDuration} minutes</Text>
      </Card>
      <View>
        <Button
          title={"I DID THE THING"}
          buttonStyle={styles.completeButton}
          type="outline"
          raised
          titleStyle={styles.completeButtonTitle}
          containerStyle={styles.completeButtonContainer}
          onPress={() => navigation.push("TaskScreen")}
        />
      </View>
      <View>
        <Button
          title={"NO THANKS"}
          buttonStyle={styles.nopeButton}
          type="outline"
          raised
          titleStyle={styles.nopeButtonTitle}
          containerStyle={styles.nopeButtonContainer}
          onPress={() => navigation.push("TaskScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  completeButton: {
    borderColor: "rgba(78, 116, 289, 1)",
  },
  completeButtonTitle: {
    color: "rgba(78, 116, 289, 1)",
  },
  completeButtonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  nopeButton: {
    borderColor: "rgba(255, 87, 51, 1)",
  },
  nopeButtonTitle: {
    color: "rgba(255, 87, 51, 1)",
  },
  nopeButtonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default TaskScreen;
