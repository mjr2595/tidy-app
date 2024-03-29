import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import TaskScreen from "./screens/TaskScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Time to Tidy!",
            }}
          />
          <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ title: "Here's a thing to do" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
