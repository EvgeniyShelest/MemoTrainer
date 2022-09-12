import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const shuffle = function (o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};
const values = shuffle([...Array(8).keys()].concat([...Array(8).keys()]));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>working on your app!</Text>
      <View style={styles.row}>
        {[...values.keys()].map((index) => (
          <TouchableOpacity key={index} onPress={() => alert(index)}>
            <View style={styles.cell}>
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
  }
});
