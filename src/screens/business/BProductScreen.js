import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Colors } from "../../constants";
import globalStyles from "../../styles/global";
//import { createTask, getTask, updateTask } from "../api/api.tasks";
import CustomButton from "../../components/CustomButton";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';



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
            <TouchableOpacity onPress={() => {
                navigation.navigate("Update", {id: productid, nombre: productname, descripcion: productdescription, precio: productprice})
            }}>
                <AntDesign name="edit" size={26} style={styles.icon}></AntDesign>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },
  div: {
      borderTopWidth: 1
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
    justifyContent: 'center',
      alignItems: 'center'
  },
  icon: {
      color: Colors.luzoscuro,
      
  } 
});

export default BProductScreen;
