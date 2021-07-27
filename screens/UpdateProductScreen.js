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
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants";
import globalStyles from "../styles/global";
import { createProduct, getProduct, updateProduct } from "../api/api.product";

const DescriptionTextInput = (props) => {
  return <TextInput {...props} editable maxLength={200} />;
};

const UpdateProductScreen = ({ navigation, route }) => {

  console.log("Parámetros de BProductScreen "+route.params)

  const [product, setProduct] = useState({ nombre: "", descripcion: "", precio: "" });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setProduct({ ...product, [name]: value });

  const handleSubmit = async () => {
    console.log(product)
    try {
      if (!editing) {
        await createProduct(product);
      } else {
        console.log(product)
        await updateProduct(route.params.id, product);
      }
      navigation.navigate("BusinessHome");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(route.params)

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Editar Producto" });
      setEditing(true);
      (async () => {
        const product = await getProduct(route.params.id);
        setProduct({ nombre: product.nombre, descripcion: product.descripcion, precio: product.precio });
      })();
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => handleChange("nombre", text)}
          placeholder={route.params.nombre}
          placeholderTextColor={Colors[3]}
          value={product.nombre}
        />

        <DescriptionTextInput
          style={globalStyles.input}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleChange("descripcion", text)}
          placeholder={route.params.descripcion}
          placeholderTextColor={Colors[3]}
          value={product.descripcion}
        />

        <View  style={styles.priceContainer}>
          <Text style={globalStyles.SubTitulo}>$</Text>
          <TextInput
            style={globalStyles.input}
            value={product.precio}
            onChangeText={(text) => handleChange("precio", text)}
            placeholder={route.params.precio}
            placeholderTextColor={Colors[3]}
          />
        </View>

        {!editing ? (
          <TouchableOpacity style={globalStyles.buttonSave} onPress={handleSubmit}>
            <Text style={globalStyles.BotonTexto}>Guardar Tarea</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={globalStyles.ButtonUpdate} onPress={handleSubmit}>
            <Text style={globalStyles.BotonTexto}>Editar Tarea</Text>
          </TouchableOpacity>
        )}

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
  priceContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UpdateProductScreen;
