import React, { useCallback, useEffect, useState, useReducer, useContext, useMemo } from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import axios from "axios";
import {login} from "../api/api.auth";

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

// Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doLogin } from "../api/api.auth";

export const AuthContext = React.createContext();

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


export const AuthScreens = () => {

  return (
      <>
      <StackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            ...defautlStyles,
            title: "Inicia sesión",
            headerTitleAlign: "center",
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
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
        </>
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
