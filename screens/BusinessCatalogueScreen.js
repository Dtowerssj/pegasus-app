import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { Colors } from "../constants/index";

import globalStyles from "../styles/global";
import CustomButton from "../components/CustomButton";
import Product from "../components/Product";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { getProducts, deleteProduct } from "../api/api.product";

//Mapas
import MapsView from "react-native-maps";

const BusinessCatalogueScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    setRefreshing(true);
    loadProducts();
    setRefreshing(false);
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    await loadProducts();
  };

  const renderItem = ({ item }) => {
    return (
      <Product
        onPressDelete={() => handleDelete(item.id)}
        text={item.nombre}
        price={item.precio}
        onPress={() => {
          navigation.navigate("BProductScreen", {
            id: item.id,
            nombre: item.nombre,
            descripcion: item.descripcion,
            precio: item.precio,
          });
        }}
      ></Product>
    );
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    loadProducts();
    setRefreshing(false);
  });

  /* Upcoming feat
  const handleSearch = () => {

  }
  */

  return (
    <View style={styles.container}>
      {/*<SearchBar></SearchBar>*/}
      <FlatList
        contentContainerStyle={globalStyles.listContainer}
        data={products}
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
      <CustomButton
        text="Agregar nuevo producto"
        icon="plus"
        iconColor="#fff"
        onPress={() => navigation.navigate("NewProduct")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BusinessCatalogueScreen;