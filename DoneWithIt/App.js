import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewScreen from "./app/screens/ViewScreen";

export default function App() {
  return <WelcomeScreen></WelcomeScreen>;
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
});
