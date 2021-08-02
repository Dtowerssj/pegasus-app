import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";

import { Colors } from "../constants/index";
import LoginScreen from "../screens/auth/LoginScreen";
import AddProductScreen from "../screens/business/AddProductScreen";
import UpdateProductScreen from "../screens/business/UpdateProductScreen";
import BProductScreen from "../screens/business/BProductScreen";
import RegisterUserScreen from "../screens/auth/RegisterUserScreen";
import RegisterBusinessScreen from "../screens/auth/RegisterBusinessScreen";
import BusinessHomeScreen from "../screens/business/BusinessHomeScreen";
import UserHomeScreen from "../screens/users/UserHomeScreen";
import BusinessCatalogueScreen from "../screens/business/BusinessCatalogueScreen";
import RouteMapScreen from "../screens/users/RouteMapScreen";
import PaymentScreen from "../screens/users/PaymentSceen";
import ShoppingCartScreen from "../screens/users/ShoppingCartScreen";

const TasksStackNavigator = createStackNavigator();

const defautlStyles = {
  headerStyle: {
    backgroundColor: "#0097fe",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "RobotoCondensed-Medium",
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
        name="Login"
        component={LoginScreen}
        options={{
          ...defautlStyles,
          title: "Inicia sesión",
          headerTitleAlign: "center",
        }}
      />

      <TasksStackNavigator.Screen
        name="UserRegister"
        component={RegisterUserScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="BusinessRegister"
        component={RegisterBusinessScreen}
        options={{
          ...defautlStyles,
          title: "¡Trabaja con nosotros!",
          headerTitleAlign: "center",
        }}
      />

      <TasksStackNavigator.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{
          ...defautlStyles,
          title: "Restaurantes disponibles",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="BusinessHome"
        component={BusinessHomeScreen}
        options={{
          ...defautlStyles,
          title: "Selecciona una opción",
          headerTitleAlign: "center",
        }}
      />
      <TasksStackNavigator.Screen
        name="BusinessCatalogue"
        component={BusinessCatalogueScreen}
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
      <TasksStackNavigator.Screen
        name="Map"
        component={RouteMapScreen}
        options={{
          ...defautlStyles,
        }}
      />
      <TasksStackNavigator.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          ...defautlStyles,
        }}
      />
      <TasksStackNavigator.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          ...defautlStyles,
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
