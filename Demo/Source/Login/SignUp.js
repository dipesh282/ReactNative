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
export default class SignUpC extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "Sign Up",
      }
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sign Up Screen</Text>
          <Button
            style={{marginVertical: 10}}
            label="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      )
    }
  }