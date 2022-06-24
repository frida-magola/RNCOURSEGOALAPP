import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addCourseGoalHandler(enteredGoal) {
    // console.log(enteredGoal);
    setCourseGoal((prevState) => [...prevState, { text: enteredGoal, id: Math.random().toString(36) }]);
  }

  // OnDelete Goal Handler
  function onDeleteGoalHandler(id) {
    // console.log("onDelete Goal Handler");
    setCourseGoal((prevState) => prevState.filter((courseGoal) => courseGoal.id !== id));
  }

  function startAddCourseGoalHandler() {
    setModalIsVisible(true);
  }

  function onCloseModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appGoalcontainer}>
        <View style={styles.button}>
          <Button title="Add new Goal" onPress={startAddCourseGoalHandler} color="#5e0acc" />
        </View>
        <GoalInput visible={modalIsVisible} onCloseModal={onCloseModalHandler} onAddGoal={addCourseGoalHandler} />
        <View style={styles.listGoalContainer}>
          <FlatList
            data={courseGoal}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return <GoalItem itemData={itemData} onDelete={onDeleteGoalHandler} />;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appGoalcontainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#1e085a",
  },

  listGoalContainer: {
    flex: 5,
  },

  button: {
    // marginTop: 16,
    marginBottom: 16,
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingVertical: 25,
    alignItems: "center",
  },
});
