import React, { useState } from "react";

//formik
import { Formik } from "formik";

//Iconos
import { Octicons, Ionicons } from "@expo/vector-icons";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

// Estilos
import styles from "./../styles/global";
import { Colors } from "./../constants/index";

//
import { loginUser } from "../api/api.users";

// Cliente de axios
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleLogin = async () => {
    const user = await loginUser();
  };

  /*const handleLoginScreen = (credentials, setSubmitting) => {
    handleMessage(null);

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("BusinessHome", { ...data[0] });
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
  };*/

  return (
    <View style={styles.ContenedorEstilizado}>
      <View style={styles.ContenedorInterno}>
        <Text style={styles.TituloPagina}>Uber Eats</Text>
        <Text style={styles.SubTitulo}>Cuenta de Ingreso</Text>
        <View style={styles.VistaExtra}>
          <Text
            style={styles.ContenidoEnlaceTexto}
            onPress={() => navigation.navigate("BusinessHome")}
          >
            click here if login not working
          </Text>
        </View>

        <Formik
          initialValues={{ correo: "", clave: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.correo == "" || values.clave == "") {
              handleMessage("Por favor llenar todos los campos");
              setSubmitting(false);
            } else {
              handleLoginScreen(values, setSubmitting);
              try {
                console.log(values);
                loginUser(values);
                navigation.navigate("BusinessHome");
                console.log("Login exitoso");
              } catch (error) {
                console.log(error);
              }
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
                    onPress={() => navigation.navigate("Register")}
                  >
                    Regístra tu Usuario
                  </Text>
                  <Text
                    style={styles.ContenidoEnlaceTexto}
                    onPress={() =>
                      navigation.navigate("RegisterEstablecimiento")
                    }
                  >
                    Regístra tu Establecimiento
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
