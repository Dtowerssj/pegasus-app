import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";

import { Colors } from "../constants";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AddProductScreen from "../screens/AddProductScreen";
import UpdateProductScreen from "../screens/UpdateProductScreen";
import BProductScreen from "../screens/BProductScreen";
import BusinessHomeScreen from "../screens/BusinessHomeScreen";

const TasksStackNavigator = createStackNavigator();

const defautlStyles = {
  headerStyle: {
    backgroundColor: Colors[1],
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Ubuntu-Medium",
  },
};

const styles = StyleSheet.create({
  headerRightSpace: {
    marginRight: 10,
  },
});

const TaskNavigator = () => {
  return (
    <TasksStackNavigator.Navigator>
      <TasksStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...defautlStyles,
          title: "Inicia sesión",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="BusinessHome"
        component={BusinessHomeScreen}
        options={{
          ...defautlStyles,
          title: "Tu catálogo",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="NewProduct"
        component={AddProductScreen}
        options={{ ...defautlStyles, title: "Agregar nueva tarea" }}
      />

      <TasksStackNavigator.Screen
        name="Update"
        component={UpdateProductScreen}
        options={{
          ...defautlStyles,
          title: "Editar Tareas",
          headerTitleAlign: "center",
        }}
      />

      <TasksStackNavigator.Screen
        name="BProductScreen"
        component={BProductScreen}
        options={{
          ...defautlStyles,
          title: "Tarea",
          headerTitleAlign: "center",
        }}
      />
    </TasksStackNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TaskNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
