import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,  
} from "react-native";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./../assets/icon.png")} />

      
      <View style={styles.badgeContainer}>
        <Image style={styles.icon} source={ {uri:"https://cdn-icons-png.flaticon.com/512/124/124010.png" }}/>
        <Text style={styles.whiteText}>Connect with Facebook</Text>
      </View>
      <View style={styles.badgeContainer}>
        <Image style={styles.icon} source={ {uri:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" }}/>
        <Text style={styles.whiteText}>Connect with Google</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    marginBottom: 20,
    padding: 10,
    
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  whiteText: {
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width: 64,
    height: 64,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "green",
  },
 
  inputView: {
    backgroundColor: "black",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    marginBottom: 20,
    padding: 10,
    alignItems: "start",
  },
 
  textInput: {
    height: 50,
    // flex: 1,
    // padding: 10,
    marginLeft: 20,
    color: "red"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
  },

  loginText:{
    color: "white",
  }
});