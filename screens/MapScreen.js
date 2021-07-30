import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Constantes
import { Colors } from "../constants";

//Estilos
import global from "../styles/global";

//Mapas
import MapView from "react-native-maps";

const MapScreen = () => {
  const [restaurant, setRestaurant] = React.useState(null);

  console.log();

  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  /* React.useEffect(() => {
     let (restaurant, currentLocation) = route.params;

    console.log(restaurant)

    let fromLoc = currentLocation.gps
    let toLoc = restaurant.location
    let street = currentLocation.streetName

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    }

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);*/

  function renderMap() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }}></MapView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
      <Text></Text>
    </View>
  );
};

export default MapScreen;
