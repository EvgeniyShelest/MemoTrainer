import { Image, StyleSheet } from "react-native";

const IMAGES = {
  1: require("../assets/icons/1.jpg"),
  2: require("../assets/icons/2.jpg"),
  3: require("../assets/icons/3.jpg"),
  4: require("../assets/icons/4.jpg"),
  5: require("../assets/icons/5.jpg"),
  6: require("../assets/icons/6.jpg"),
  7: require("../assets/icons/7.jpg"),
  8: require("../assets/icons/8.jpg"),
  9: require("../assets/icons/9.jpg"),
  10: require("../assets/icons/10.jpg"),
  11: require("../assets/icons/11.jpg"),
  12: require("../assets/icons/12.jpg"),
  13: require("../assets/icons/13.jpg"),
  14: require("../assets/icons/14.jpg"),
  15: require("../assets/icons/15.jpg"),
  16: require("../assets/icons/16.jpg"),
  17: require("../assets/icons/17.jpg"),
  18: require("../assets/icons/18.jpg"),
};

const GameImage = (props) => {
  return <Image style={styles.icon} source={IMAGES[props.name]} />;
};

const styles = StyleSheet.create({
  icon: {
    width: 75,
    height: 75,
  },
});

export default GameImage;
