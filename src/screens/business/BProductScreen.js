import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "../../constants";
import globalStyles from "../../styles/global";
//import { createTask, getTask, updateTask } from "../api/api.tasks";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
//import AsyncStorage from "@react-native-community/async-storage";

const BProductScreen = ({ navigation, route }) => {
  const [task, setTask] = useState();

  const productid = route.params.id;
  const productname = route.params.nombre;
  const productdescription = route.params.descripcion;
  const productprice = route.params.precio;

  const isFocused = useIsFocused();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.TituloPagina}>{productname}</Text>
        <View style={styles.div}></View>
        <Text style={styles.SubTituloPrecio}>{productprice}</Text>
        <Text style={styles.SubTitulo}>{productdescription}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Update", {
                id: productid,
                nombre: productname,
                descripcion: productdescription,
                precio: productprice,
              });
            }}
          >
            <AntDesign name="edit" size={26} style={styles.icon}></AntDesign>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.EnlaceTexto}>
            <Text
              style={globalStyles.ContenidoEnlaceTexto}
              onPress={() => navigation.navigate("Map")}
            >
              Ver Ubicación
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

/*const onClickAddCart = async (data) => {
  const itemcart = {
    food: data,
    quantity: 1,
    price: data.price,
  };

  await AsyncStorage.getItem("cart")
    .then((datacart) => {
      if (datacart !== null) {
        // We have data!!
        const cart = JSON.parse(datacart);
        cart.push(itemcart);
        AsyncStorage.setItem("cart", JSON.stringify(cart));
      } else {
        const cart = [];
        cart.push(itemcart);
        AsyncStorage.setItem("cart", JSON.stringify(cart));
      }
      alert("Añadido Exitosamente");
    })
    .catch((err) => {
      alert(err);
    });

  return (
    <TouchableOpacity
      onPress={() => this.onClickAddCart(item)}
      style={{
        width: width / 2 - 40,
        backgroundColor: "#33c37d",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        padding: 4,
      }}
    >
      <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
        Add Cart
      </Text>
      <View style={{ width: 10 }} />
      <Icon name="md-add-circle" size={30} color={"white"} />
    </TouchableOpacity>
  );
};*/

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },
  div: {
    borderTopWidth: 1,
  },
  TituloPagina: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: Colors[1],
  },
  SubTitulo: {
    fontFamily: "RobotoCondensed-Medium",
    textAlign: "center",
    fontSize: 18,
    margin: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#3d414a",
  },
  SubTituloPrecio: {
    fontFamily: "RobotoCondensed-Bold",
    textAlign: "center",
    marginTop: 15,
    fontSize: 25,
    letterSpacing: 1,
    fontWeight: "bold",
    color: Colors.terciario,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: Colors.luzoscuro,
  },
});

export default BProductScreen;
