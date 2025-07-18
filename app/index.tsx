// app/index.tsx
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style1.container}>
      <Text style={style1.content}>Welcome Home!</Text>
    </View>
  );
}

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  content: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  }
})