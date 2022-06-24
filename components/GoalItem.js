import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDelete }) {
  //   console.log(itemData.item.text);
  return (
    <View style={styles.itemGoal}>
      <Pressable android_ripple={{ color: "#210644" }} onPress={onDelete.bind(this, itemData.item.id)} style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.itemGoalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  itemGoalText: {
    color: "#fff",
    fontSize: 16,
    padding: 10,
  },
  itemGoal: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
