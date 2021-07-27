import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants";


const MenuButton = ({ text, onPress }) => {


  return (
    <View style={styles.container}>
      <View style={styles.listBusinessContainer}>
        <TouchableOpacity style={styles.listBusinessItem} onPress={onPress}>
          
          <Text style={styles.itemText}>{text}</Text>
        
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  itemText: {
    maxWidth: "90%",
    width: "70%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
    justifyContent: 'center',
  },
  listBusinessContainer: {
    paddingHorizontal: 10,
  },
  listBusinessItem: {
    backgroundColor: "#fff",
    borderRadius: 1,
    padding: 20,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: Colors.luzoscuro,
  },
});

export default MenuButton;
