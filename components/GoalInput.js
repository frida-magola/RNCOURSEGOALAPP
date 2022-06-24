import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function enteredCourseGoalHandler(enteredGoal) {
    setEnteredGoal(enteredGoal);
    // console.log(enteredGoal);
  }

  function addCourseGoalHandler() {
    props.onAddGoal(enteredGoal);
    // console.log(props.onAddGoal);
    props.onCloseModal();
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/images/objectiveIcon.png")} />
        <TextInput placeholder="Enter your course goal" style={styles.inputGoal} value={enteredGoal} onChangeText={enteredCourseGoalHandler} />
        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCloseModal} color="#f31282" />
          </View>

          <View style={styles.button}>
            <Button title="Add Goal" onPress={addCourseGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#311bcb",
  },
  inputGoal: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  actionContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  button: {
    width: "30%",
    margin: 8,
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
