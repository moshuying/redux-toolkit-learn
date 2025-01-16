import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Main from './src/main'
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Main />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  }
});
