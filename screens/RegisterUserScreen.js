import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";

//Estilos
import globalStyles from "./../styles/global";
import { Colors } from "./../constants/index";

//Registrar
import { createUser } from "../api/api.users";

const cuenta = "¿Ya tienes una cuenta? ";
const ini = " Inicia Sesión";

const RegisterUserScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //form handling

  const handleRegisterScreen = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = "https://p3-rn-back.herokuapp.com/api/business";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate({ ...data });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.JSON());
        setSubmitting(false);
        handleMessage(
          "Ha ocurrido un error. Revisa tu conexión e intentalo de nuevo"
        );
      });
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <ScrollView style={globalStyles.ContenedorEstilizado}>
      <View style={globalStyles.ContenedorInterno}>
        <Text style={globalStyles.TituloPagina}>Uber Eats</Text>
        <Text style={globalStyles.SubTitulo}>Registro de Usuario</Text>
        <View style={globalStyles.VistaExtra}>
          <Text
            style={globalStyles.ContenidoEnlaceTexto}
            onPress={() => navigation.navigate("BusinessHome")}
          >
            home establecimientos
          </Text>
          <Text
            style={globalStyles.ContenidoEnlaceTexto}
            onPress={() => navigation.navigate("UserHome")}
          >
            home user
          </Text>
        </View>

        <Formik
          initialValues={{
            nombre: "",
            usuario: "",
            correo: "",
            clave: "",
          }}
          onSubmit={(values) => {
            try {
              console.log(values);
              createUser(values);
              Alert.alert(
                "Registro exitoso",
                "Su usuario ha sido registrado exitosamente!!"
              );
              navigation.navigate("Login");
            } catch (error) {
              console.log(error);
              Alert.alert(
                "Registro fallido",
                "No se pudo registrar su usuario :("
              );
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={globalStyles.AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Nombre Completo"
                icon="person"
                placeholder="Luis Acurero"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("nombre")}
                onBlur={handleBlur("nombre")}
                value={values.nombre}
              />

              <MiTextoEntrada
                label="Nombre de Usuario"
                icon="person"
                placeholder="SuperAcurero2021"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("usuario")}
                onBlur={handleBlur("usuario")}
                value={values.usuario}
              />

              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="juan-admin@pizzeria.com"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("correo")}
                onBlur={handleBlur("correo")}
                value={values.correo}
                keyboardType="email-address"
              />

              <MiTextoEntrada
                label="Contraseña"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={Colors.luzoscuro}
                onChangeText={handleChange("clave")}
                onBlur={handleBlur("clave")}
                value={values.clave}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <Text style={globalStyles.CajaMensaje} type={messageType}>
                {message}
              </Text>

              <TouchableOpacity
                style={globalStyles.BotonEstilizado}
                onPress={handleSubmit}
              >
                <Text style={globalStyles.BotonTexto}>Regístrate</Text>
              </TouchableOpacity>

              <View style={globalStyles.VistaExtra}>
                <Text style={globalStyles.TextoExtra}>
                  {cuenta}
                  <Text
                    style={globalStyles.ContenidoEnlaceTexto}
                    onPress={() => navigation.navigate("Login")}
                  >
                    {ini}
                  </Text>
                </Text>
              </View>

              <View style={globalStyles.Linea} />
              <View style={globalStyles.Linea} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const MiTextoEntrada = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  ...props
}) => {
  return (
    <View>
      <View style={globalStyles.IconoIzquierdo}>
        <Octicons name={icon} size={30} color={Colors.marca} />
      </View>
      <Text style={globalStyles.EtiquetaEntradaEstilizado}>{label}</Text>
      {!isDate && (
        <TextInput style={globalStyles.TextoEntradaEstilizado} {...props} />
      )}
      {isDate && (
        <TouchableOpacity>
          <TextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <TouchableOpacity
          style={globalStyles.IconoDerecho}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={Colors.luzoscuro}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterUserScreen;
