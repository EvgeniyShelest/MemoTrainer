import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import generateArray from "./utils/generate-array";
import GameImage from "./components/GameImage";

let values = generateArray();

export default function App() {
  const [started, setStarted] = useState(false);
  const [clicked, setClicked] = useState([]);
  const [solvedIndexes, setSolvedIndexes] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleItemPress = (index) => {
    if (solvedIndexes.includes(index) || clicked.length === 2) return;
    const prevIndex = clicked[0];
    if (prevIndex !== undefined) {
      if (index === prevIndex) return;
      if (values[prevIndex] === values[index]) {
        setSolvedIndexes((previousState) => [
          ...previousState,
          prevIndex,
          index,
        ]);
        setClicked([]);
      } else {
        setClicked([prevIndex, index]);
        setTimeout(() => {
          setClicked([]);
        }, 1000);
      }
    } else {
      setClicked([index]);
    }
    setCounter((prev) => prev + 1);
  };
  const startHandler = () => {
    setStarted((prev) => !prev);
  };
  const resetHandler = () => {
    setClicked([]);
    setSolvedIndexes([]);
    setCounter(0);
    values = generateArray();
    setStarted(false);
  };
  const showImage = (index) => {
    return !started || clicked.includes(index) || solvedIndexes.includes(index);
  };

  return (
    <View style={styles.container}>
      <Text>Steps: {counter}</Text>
      <View style={styles.buttonRow}>
        <Button title={started ? "Stop" : "Start"} onPress={startHandler} />
        <Button title="Reset" onPress={resetHandler} />
      </View>
      <View style={styles.row}>
        {[...values.keys()].map((index) => (
          <TouchableOpacity
            disabled={!started}
            key={index}
            onPress={() => handleItemPress(index)}
          >
            <View style={styles.cell}>
              {showImage(index) && <GameImage name={values[index]} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    width: 150,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#cff",
    width: 350,
    padding: 15,
  },
  cell: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    margin: 2,
  },
});
