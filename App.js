import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import shuffle from "./utils/shuffle";

const values = shuffle([...Array(8).keys()].concat([...Array(8).keys()]));

export default function App() {
  const [clicked, setClicked] = useState([]);
  const [solvedIndexes, setSolvedIndexes] = useState([]);
  const [prevIndex, setPrevIndex] = useState(null);
  const handleItemPress = (index) => {
    if (index === prevIndex || solvedIndexes.includes(index)) return;
    if (values[prevIndex] === values[index]) {
      setSolvedIndexes((previousState) => [...previousState, prevIndex, index]);
      setPrevIndex(null);
    } else {
      setPrevIndex(index);
    }
    setClicked((previousState) => [...previousState, index]);
  };
  const resetHandler = () => {
    setClicked([]);
    setSolvedIndexes([]);
    setPrevIndex(null);
  };

  return (
    <View style={styles.container}>
      <Text>Steps: {clicked.length}</Text>
      <Text>prevIndex: {prevIndex}</Text>
      <View style={styles.buttonRow}>
        <Button title="Start" onPress={() => startHandler()} />
        <Button title="Reset" onPress={resetHandler} />
      </View>
      <View style={styles.row}>
        {[...values.keys()].map((index) => (
          <TouchableOpacity key={index} onPress={() => handleItemPress(index)}>
            <View
              style={[
                styles.cell,
                solvedIndexes.includes(index) && styles.solved,
              ]}
            >
              <Text>{values[index]}</Text>
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
    backgroundColor: "#fcf",
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    margin: 2,
  },
  solved: {
    backgroundColor: "#aaf",
  },
});
