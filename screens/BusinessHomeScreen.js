import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Product from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { getProducts, deleteProduct } from "../api/api.product";
import MenuButton from "../components/MenuButton";

const BusinessHomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <MenuButton text="Mi Catálogo" onPress={() => navigation.navigate("BusinessCatalogue")} ></MenuButton>
        <MenuButton text="Mi cuenta" onPress={() => console.log("Crud de cuenta de establecimientos")}></MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BusinessHomeScreen;
