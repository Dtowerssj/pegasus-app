import React, { useEffect, useState } from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import { login } from "../api/api.auth";

// Vistas
import LoginScreen from "../screens/auth/LoginScreen";
import AddProductScreen from "../screens/business/AddProductScreen";
import UpdateProductScreen from "../screens/business/UpdateProductScreen";
import BProductScreen from "../screens/business/BProductScreen";
import RegisterUserScreen from "../screens/auth/RegisterUserScreen";
import RegisterBusinessScreen from "../screens/auth/RegisterBusinessScreen";
import BusinessHomeScreen from "../screens/business/BusinessHomeScreen";
import UserHomeScreen from "../screens/users/UserHomeScreen";
import BusinessCatalogueScreen from "../screens/business/BusinessCatalogueScreen";

import { isBusiness } from "../screens/auth/LoginScreen";

// Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doLogin } from "../api/api.auth";


const StackNavigator = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();


const BusinessDrawerRoutes = () => {
  return(
      <DrawerNavigator.Navigator initialRouteName="BusinessHome">
      
        <DrawerNavigator.Screen
          name="BusinessHome"
          component={BusinessHomeScreen}
          options={{
            ...defautlStyles,
            title: "Mi catálogo",
            headerTitleAlign: "center",
          }}  
        />
        <DrawerNavigator.Screen
          name="BusinessCatalogue"
          component={BusinessCatalogueScreen}
        />
        <DrawerNavigator.Screen
          name="NewProduct"
          component={AddProductScreen}
        />

        <DrawerNavigator.Screen
          name="Update"
          component={UpdateProductScreen}
        />

      </DrawerNavigator.Navigator>
  );
}

const UserDrawerRoutes = () => {
  return(
      <DrawerNavigator.Navigator initialRouteName="UserHome">
      <DrawerNavigator.Screen
          name="UserHome"
          component={UserHomeScreen}
        />

      </DrawerNavigator.Navigator>
  );
}


const AppNavigator = () => {

 


  return (
      <NavigationContainer>
        
      <StackNavigator.Navigator>

        <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...defautlStyles,
          title: "Inicia sesión",
          headerTitleAlign: "center",
        }}
        />
        <StackNavigator.Screen
        name="UserRegister"
        component={RegisterUserScreen}
        options={{
          ...defautlStyles,
          title: "¡Bienvenido!",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="BusinessRegister"
        component={RegisterBusinessScreen}
        options={{
          ...defautlStyles,
          title: "¡Trabaja con nosotros!",
          headerTitleAlign: "center",
        }}
      />
      
      <StackNavigator.Screen
        name="BusinessHome"
        component={BusinessHomeScreen}
        options={{
          ...defautlStyles,
          title: "Selecciona una opción",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="BusinessCatalogue"
        component={BusinessCatalogueScreen}
        options={{
          ...defautlStyles,
          title: "Tu catálogo",
          headerTitleAlign: "center",
        }}
      />
      <StackNavigator.Screen
        name="NewProduct"
        component={AddProductScreen}
        options={{ ...defautlStyles, title: "Agregar nueva tarea" }}
      />

      <StackNavigator.Screen
        name="Update"
        component={UpdateProductScreen}
        options={{
          ...defautlStyles,
          title: "Editar Tareas",
          headerTitleAlign: "center",
        }}
      />

      <StackNavigator.Screen
        name="BProductScreen"
        component={BProductScreen}
        options={{
          ...defautlStyles,
          title: "Tarea",
          headerTitleAlign: "center",
        }}
      />


        
      </StackNavigator.Navigator>
      </NavigationContainer>
  );
};

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
        component={MapScreen}
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
