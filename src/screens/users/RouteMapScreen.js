/*import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "";

const MapViewScreen = (props) => {
  const origin = {
    latitude: 10.7217,
    longitude: -71.6207,
  };

  const destination = {
    latitude: 10.6667,
    longitude: -71.6261,
  };

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#a0abff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 10.721794,
          longitude: -71.620774,
          longitudeDelta: 0.0922,
          latitudeDelta: 0.0421,
        }}
      />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </View>
  );
};

export default MapViewScreen;*/
