import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import { Alert, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

// Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index";
import logo from "../assets/plogo-b.png"

//
import { loginUser } from "../api/api.users";

// Cliente de axios
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleLogin = (credentials) => {
    handleMessage(null);
    const url = "https://p3-rn-back.herokuapp.com/api/login";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        
        console.log(response.data[0].message)
        console.log("Response business: "+response.data[0].business)
        console.log("Response id?: "+response.data[1].id)

        if(response.data[0].status == 404) {
          Alert.alert("Login fallido", "revise sus credenciales")
        } else if(response.data[0].business == true) {
          navigation.navigate("BusinessHome")
        } else if (response.data[0].business == false) {
          navigation.navigate("UserHome")
        }
      })
  }; 

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <View style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Image source={ logo } style={{ width: 280, height: 150 }} />
        <Text style={styles.TituloPagina}>Food Delivery</Text>
        <Text style={styles.SubTitulo}>Inicio de sesión</Text>
        

        <Formik
          initialValues={{ correo: "", clave: "" }}
          onSubmit={(values) => {
            if (values.correo == "" || values.clave == "") {
              handleMessage("Por favor llenar todos los campos");
              setSubmitting(false);
            } else {
              
             handleLogin(values);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.AreaFormularioEstilizado}>
              <MiTextoEntrada
                label="Correo Electrónico"
                icon="mail"
                placeholder="AcureroTeacher@gmail.com"
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
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={styles.CajaMensaje} type={messageType}>
                {message}
              </Text>
              <TouchableOpacity
                style={styles.BotonEstilizado}
                onPress={handleSubmit}
              >
                <Text style={styles.BotonTexto}>Iniciar Sesión</Text>
              </TouchableOpacity>

              <View style={styles.VistaExtra}>
                <Text style={styles.TextoExtra}>
                  ¿Aún no tienes una cuenta?{" "}
                </Text>

                <TouchableOpacity style={styles.EnlaceTexto}>
                  <Text
                    style={styles.ContenidoEnlaceTexto}
                    onPress={() => navigation.navigate("UserRegister")}
                  >
                    Regístra tu Usuario
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const MiTextoEntrada = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <View style={styles.IconoIzquierdo}>
        <Octicons name={icon} size={30} color={Colors.marca} />
      </View>
      <Text style={styles.EtiquetaEntradaEstilizado}>{label}</Text>
      <TextInput style={styles.TextoEntradaEstilizado} {...props} />
      {isPassword && (
        <TouchableOpacity
          style={styles.IconoDerecho}
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

export default LoginScreen;
