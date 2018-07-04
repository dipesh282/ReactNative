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
export default class ForgetPassC extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: "Forgot Password",
      }
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Forgot Password Screen</Text>
          <Button
            style={{marginVertical: 10}}
            label="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      )
    }
  }