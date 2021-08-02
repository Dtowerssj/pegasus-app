import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PaymentView from "../../components/PaymentView";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const PaymentScreen = () => {
  const [response, setResponse] = useState();

  const [makePayment, setMakePayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  <Ionicons
    name="arrow-back"
    size={24}
    color="white"
    style={styles.arrow}
    onPress={() => navigation.navigate("ShoppingCart")}
  />;
  const cartInfo = {
    id: "5eruyt35eggr76476236523t3",
    description: "T Shirt - With react Native Logo",
    amount: 1,
  };

  const onCheckStatus = async (paymentResponse) => {
    setPaymentStatus("Please wait while confirming your payment!");
    setResponse(paymentResponse);

    var jsonResponse = JSON.parse(paymentResponse);
    // perform operation to check payment status

    try {
      const stripeResponse = await axios.post("http://localhost:8000/payment", {
        email: "leoch1000@gmail.com",
        product: cartInfo,
        authToken: jsonResponse,
      });

      if (stripeResponse) {
        const { paid } = stripeResponse.data;
        if (paid === true) {
          setPaymentStatus("Payment Success");
        } else {
          setPaymentStatus("Payment failed due to some issue");
        }
      } else {
        setPaymentStatus(" Payment failed due to some issue");
      }
    } catch (error) {
      console.log(error);
      setPaymentStatus(" Payment failed due to some issue");
    }
  };

  const paymentUI = () => {
    if (!makePayment) {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 25, margin: 10 }}> Realizar Pago </Text>
          <Text style={{ fontSize: 16, margin: 10 }}>
            {" "}
            Product Description: {cartInfo.description}{" "}
          </Text>
          <Text style={{ fontSize: 16, margin: 10 }}>
            {" "}
            Payable Amount: {cartInfo.amount}{" "}
          </Text>

          <TouchableOpacity
            style={{
              height: 60,
              width: 300,
              backgroundColor: "#FF5733",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setMakePayment(true);
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20 }}>Procede a Pagar</Text>
          </TouchableOpacity>
        </View>
      );

      // show to make payment
    } else {
      if (response !== undefined) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 25, margin: 10 }}> {paymentStatus} </Text>
            <Text style={{ fontSize: 16, margin: 10 }}> {response} </Text>
          </View>
        );
      } else {
        return (
          <PaymentView
            onCheckStatus={onCheckStatus}
            product={cartInfo.description}
            amount={cartInfo.amount}
          ></PaymentView>
        );
      }
    }
  };

  return <View style={styles.container}>{paymentUI()}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100 },
  navigation: { flex: 2, backgroundColor: "red" },
  arrow: {
    position: "absolute",
    height: 60,
    width: 60,
    top: 60,
    left: 25,
    zIndex: 100,
  },
});

export default PaymentScreen;
