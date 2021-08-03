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
import { AuthScreens } from "./AppScreens";

// Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doLogin, getIsBusiness } from "../api/api.auth";

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


const AppNavigator = () => {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isBusiness: action.isBusiness,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            isBusiness: action.isBusiness,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            isBusiness: null,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      isBusiness: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let isBusinessValue;
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage (AsyncStorage en mi caso)
        data = await AsyncStorage.getItem('user');
        userToken = JSON.parse(data);
        console.log("Nombre: " + userToken.nombre);
        
        isBusinessValue = await getIsBusiness();
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }
      
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken, isBusiness: isBusinessValue });
    };

    bootstrapAsync();
  }, []);

  

  const authContext = React.useMemo(
  () => ({
    signIn: (credentials) => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
      // In the example, we'll use a dummy token
      
    const userData = doLogin(credentials);

      dispatch({ type: 'SIGN_IN', token: userData });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' , isBusiness: null }),
    signUp: async (data) => {
      // In a production app, we need to send user data to server and get a token
      // We will also need to handle errors if sign up failed
      // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
  }),
  []
  );


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        
      <StackNavigator.Navigator>

      { state.userToken == null ? (
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
         
      ) : state.isBusiness == true ? (
        <>
        <StackNavigator.Screen
          name="Mi catálogo"
          component={BusinessDrawerRoutes}
        />
        </>
      ) : (
      <>
        <StackNavigator.Screen
          name="Restaurantes disponibles"
          component={UserDrawerRoutes}
        />
        </>
        )}


        
      </StackNavigator.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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

export default AppNavigator;
