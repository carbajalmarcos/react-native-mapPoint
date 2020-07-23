import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
});
