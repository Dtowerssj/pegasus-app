import React from 'react';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
   } catch (error) {
     console.log("Something went wrong", error);
   }
  }

  export const getToken = async () => {
    let userData;
    try {
      userData = await AsyncStorage.getItem("user");
      const data = JSON.parse(userData);
      console.log("Data del token del user: "+data.nombre);
      return data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return userData;
  }

  export const getIsBusiness = async () => {
    let isBusiness;
    let data;
    try {
      data = await AsyncStorage.getItem("isBusiness");
      isBusiness = JSON.parse(data);
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
    return isBusiness;
  }

  export const storeIsBusiness = async (isBusiness) => {
    try {
      await AsyncStorage.setItem("isBusiness", JSON.stringify(isBusiness) );
   } catch (error) {
     console.log("Something went wrong", error);
   }
  }

export const doLogin = async (credentials) => {
  
    
    let userData;
    const url = "https://p3-rn-back.herokuapp.com/api/login";
    
    axios
      .post(url, credentials)
      .then((response) => {
        //const { dataa, business } = result;
        
        if(response.data[0].status == 404) {
          Alert.alert("Login fallido", "revise sus credenciales")
        } else if(response.data[0].business == true) {
          try {
            userData = response.data[1];
            storeToken(userData); 
            storeIsBusiness(response.data[0].business); 
            //navigation.navigate("BusinessHome")
          } catch (error) {
            console.log(error)
          }
          
        } else if (response.data[0].business == false) {
          storeToken(response.data[1]); 
          //navigation.navigate("UserHome")
        }
      })
      return data;
  };
