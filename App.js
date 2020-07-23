import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [tempPoint, setTempPoint] = useState({});
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisivilityFilter] = useState("new_point");
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({ nativeEvent }) => {
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
    setVisivilityFilter("new_point");
  };

  const handleChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: tempPoint, name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };

  const handleList = () => {
    setVisivilityFilter("all_points");
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsFilter={pointsFilter}
      />
      <Panel onPressLeft={handleList} togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Name"
              placeholder="Point name"
              onChangeText={handleChangeText}
            />
            <Button onPress={handleSubmit} title="Assign" />
          </View>
        ) : (
          <List points={points} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    padding: 20,
  },
});
