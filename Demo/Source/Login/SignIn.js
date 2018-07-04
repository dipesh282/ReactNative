import React, { Component } from "react"
import {
    View, 
    Colors, 
    Text, 
    TextInput, 
    TextArea, 
    Typography, 
    Modal, 
    Button
  } from 'react-native-ui-lib'

//2.Navigation with passing data & setting buttons
export default class SignInC extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "Sign In",
      }
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sign In Screen</Text>
          <Button
            style={{marginVertical: 10}}
            label="Sign Up"
            onPress={() => {this.props.navigation.navigate("SignUp")}}
          />
          <Button
            style={{marginVertical: 10}}
            label="Forgot Password"
            //onPress={() => this.props.navigation.goBack()}
            onPress={() => {this.props.navigation.navigate("ForgetPass")}}
          />
          <Button
            style={{marginVertical: 10}}
            label="Home"
            onPress={() => {this.props.navigation.navigate("App")}}
          />
        </View>
      )
    }
  }