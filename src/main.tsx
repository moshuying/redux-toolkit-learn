import React from 'react'
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { store } from './store/store'
import { Provider } from 'react-redux';
import { Counter } from './pages/demoPage/counter/Counter';
import { StateTest } from './components/StateTest';

export default function Main() {
  return <Provider store={store}>
    <Text style={styles.h1}>Hello CodeSandbox
      <StateTest />
    </Text>
    <Text style={styles.h2}>
      Start editing to see some magic happen, even on your mobile device!
    </Text>
    <br />
    <br />
    <Text style={styles.paragraph}>
      Open Expo on your mobile device with scanning the QR code in the
      application log under the start tab.
    </Text>
    <Counter />
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
