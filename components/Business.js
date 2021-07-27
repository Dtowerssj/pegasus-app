import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants";


const Business = ({ text, onPress, price, onPressDelete }) => {


  return (
    <View style={styles.container}>
      <View style={globalStyles.listBusinessContainer}>
        <TouchableOpacity style={globalStyles.listBusinessItem} onPress={onPress}>
          
          <Text style={styles.itemText}>{text}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  itemText: {
    maxWidth: "90%",
    width: "70%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
    justifyContent: 'center'
  }
});

export default Business;
