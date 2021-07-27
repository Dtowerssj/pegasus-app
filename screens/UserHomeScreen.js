import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Business from "../components/Business";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { getBusiness } from "../api/api.business";

const UserHomeScreen = ({ navigation }) => {
  const [business, setBusiness] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadBusiness = async () => {
    const data = await getBusiness();
    setBusiness(data);
    console.log(data);
  };

  useEffect(() => {
    setRefreshing(true);
    loadBusiness();
    setRefreshing(false);
  }, [isFocused]);

  

  const renderItem = ({ item }) => {
    return <Business onPressDelete={() => handleDelete(item.id)} text={item.nombre} price={item.precio} onPress={() => {
      navigation.navigate("BProductScreen", {id: item.id, nombre: item.nombre, descripcion: item.descripcion, precio: item.precio})
    }}></Business>;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    loadBusiness();
    setRefreshing(false);
  })

  /* Upcoming feat
  const handleSearch = () => {

  }
  */

  return (
    <View style={styles.container}>
      {/*<SearchBar></SearchBar>*/}
        <FlatList
          contentContainerStyle={globalStyles.listContainer}
          data={business}
          keyExtractor={(item) => item.id + ""}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              colors={[Colors[1]]}
              onRefresh={onRefresh}
            />
          }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserHomeScreen;
