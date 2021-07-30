import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import MenuButton from "../components/MenuButton";

const BusinessHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MenuButton
        text="Mi Catálogo"
        onPress={() => navigation.navigate("BusinessCatalogue")}
      ></MenuButton>
      <MenuButton
        text="Mi cuenta"
        onPress={() => console.log("Crud de cuenta de establecimientos")}
      ></MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BusinessHomeScreen;
