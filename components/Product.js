import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants";

const DeleteButton = ({onPress}) => {
  
  return(
        <View>
          <TouchableOpacity onPress={onPress}>
            <MaterialIcons  name="delete" size={27} color="#c7190c" />
          </TouchableOpacity>
        </View>
  );
};

const Product = ({ text, onPress, price, onPressDelete }) => {


  return (
    <View style={styles.container}>
      <View style={globalStyles.listContainer}>
        <TouchableOpacity style={globalStyles.listItem} onPress={onPress}>
          
          <Text style={styles.itemText}>{text}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>{price}</Text>
          </View>

            <TouchableOpacity onPress={onPressDelete}>
              <MaterialIcons  name="delete" size={27} color="#c7190c" />
            </TouchableOpacity>
        
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  itemText: {
    maxWidth: "90%",
    width: "70%",
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    color: "#000",
    justifyContent: 'center'
  },
  priceText: {
    marginRight: 5,
    
    fontFamily: "Ubuntu-Bold",
    fontSize: 16,
    color: "#000",
  },
});

export default Product;
