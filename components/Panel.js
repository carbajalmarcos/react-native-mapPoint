import React from 'react';
import { StyleSheet, View, Button } from "react-native";

export default ({ onPressLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title="List" />
      <Button title="Show/Hide" onPress={togglePointsFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
