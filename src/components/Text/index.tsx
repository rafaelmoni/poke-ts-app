import { StyleProp, StyleSheet, Text as RText, TextStyle } from "react-native";

const styles = StyleSheet.create({
  text: {
    //color: "#fff",
    flex: 1,
  },
});

const Text = ({ text, style = {} }: { text: string; style?: object }) => (
  <RText style={{ ...styles.text, ...style }}>{text}</RText>
);

export default Text;
