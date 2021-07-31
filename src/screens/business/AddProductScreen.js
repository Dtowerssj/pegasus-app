import React, { useState, useRef, ForwardedRef } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, TextInput,
  Keyboard, Alert, Picker, Text, Button, Switch, SwitchComponent } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../constants";
import globalStyles from "../../styles/global";
import { createProduct } from "../../api/api.product";

// Input de descripción
const DescriptionTextInput = (props) => {
  return <TextInput {...props} editable maxLength={200} />;
};


const AddProductScreen = ({ navigation }) => {

  const [product, setProduct] = useState({ nombre: '', descripcion: '', precio: '' });
  const handleChange = (name, value) => setProduct({...product, [name]: value  });

  const handleSubmit = () => {
    if (product.nombre.trim() === "") {
      return Alert.alert(
        "Error de Validación",
        "El nombre del producto es requerido"
      );
    } else if (product.precio.trim() === "") {
      return Alert.alert(
        "Error de Validación",
        "El precio del producto es requerido"
      );
    } else {
      try {
        console.log(product);
        createProduct(product);
        navigation.navigate("Business")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <TextInput
          style={globalStyles.input}
          value={product.nombre}
          onChangeText={(text) => handleChange("nombre", text)}
          placeholder="Nombre del producto o plato"
          placeholderTextColor={Colors[3]}
        />

        
        <DescriptionTextInput 
          style={globalStyles.input}
          multiline
          numberOfLines={4}
          value={product.descripcion}
          onChangeText={(text) => handleChange("descripcion", text)}
          placeholder="Descripción del producto"
          placeholderTextColor={Colors[3]}
        />

        <View  style={styles.priceContainer}>
          <Text style={globalStyles.SubTitulo}>$</Text>
          <TextInput
            style={globalStyles.input}
            value={product.precio}
            onChangeText={(text) => handleChange("precio", text)}
            placeholder="Precio (ej. 40)"
            placeholderTextColor={Colors[3]}
          />
        </View>

        <CustomButton text="Crear producto" onPress={() => handleSubmit()} round />

        <View></View>
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
    justifyContent: 'flex-start',
  },
  container2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 10,
  },
  notifications: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 15,
    fontFamily: 'RobotoCondensed-Regular',
  },
  noNotificationText: {
    fontSize: 12.5,
    fontFamily: 'RobotoCondensed-Light',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

},
buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 5,
    margin: 5,
},
notifications: {
  flexDirection: 'row',
  alignItems: 'center',
},
notificationText2: {
  fontSize: 15,
  fontFamily: 'RobotoCondensed-Regular',
  marginRight: 5,
},
littleNotificationText: {
  fontSize: 13,
  paddingTop: 10,
  fontFamily: 'RobotoCondensed-Regular',
},
priceContainer: {
  marginTop: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default AddProductScreen;
