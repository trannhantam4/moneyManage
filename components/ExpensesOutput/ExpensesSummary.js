import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/styles";
import { Picker } from "@react-native-picker/picker";

export default function ExpensesSummary({ expenses, selectDate, fromScreen }) {
  const [selectedDate, setSelectedDate] = React.useState("");
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.price;
  }, 0);
  const formattedSum = expensesSum.toLocaleString(); // Format sum with dots

  return (
    <View style={styles.container}>
      {fromScreen === "recent" ? (
        <Picker
          style={{ width: "50%" }}
          selectedValue={selectedDate}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedDate(itemValue);
            selectDate(itemValue);
          }}
        >
          <Picker.Item label="7 days" value="7" />
          <Picker.Item label="14 days" value="14" />
          <Picker.Item label="30 days" value="30" />
          <Picker.Item label="year" value="365" />
        </Picker>
      ) : (
        <Text style={styles.period}>Total</Text>
      )}

      <Text style={styles.sum}>{formattedSum} VND</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 8,
    marginHorizontal: 8,
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
    padding: 8,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    paddingRight: 12,
  },
});
