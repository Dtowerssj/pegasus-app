import React from 'react';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from '../navigation/AppNavigator';

const storeToken = async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
   } catch (error) {
     console.log("Something went wrong", error);
   }
  }

export const doLogin = async (credentials) => {
  const { signIn } = React.useContext(AuthContext);
    
    let data;
    const url = "https://p3-rn-back.herokuapp.com/api/login";
    
    axios
      .post(url, credentials)
      .then((response) => {
        //const { dataa, business } = result;
        
        if(response.data[0].status == 404) {
          Alert.alert("Login fallido", "revise sus credenciales")
        } else if(response.data[0].business == true) {
          try {
            data = response.data[1];
            //business = response.data[0].business;
            storeToken(response.data[1]); 
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

  export default AuthContext;