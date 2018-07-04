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
export default class HomeC extends React.Component {
  
    static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state
      return {
        title: "Home",
        //headerTitle: <LogoTitle name="Home" />,
        headerRight: (
          <View style = {{flexDirection: 'row'}}>
              <Button onPress={() => params.handleClick()} 
                label= "Edit"
                //backgroundColor= "#00000000"
                color= "white"
                labelStyle={{fontWeight: "bold",fontSize: 17,}}
                size= {0}
                style={{marginBottom: 0,marginLeft: 10,backgroundColor: "#00000000"}}
                />
              <Button onPress={() => params.handleClick()} 
                label= "Right"
                backgroundColor= "#00000000"
                color= "white"
                labelStyle={{fontWeight: "bold",fontSize: 17,}}
                size= {0}
                style={{marginBottom: 0,marginLeft: 10,marginRight: 10}}
                />
          </View>
        ),
        /*headerLeft: (
          <View style = {{flexDirection: 'row'}}>
              <Button onPress={() => params.handleClick("Left Button Clicked")} 
                label= "Left"
                iconSource= {require("../Assets/boy.png")}
                backgroundColor= "blue"
                color= "white"
                iconOnRight= "true"
                labelStyle={{fontWeight: "bold",fontSize: 17,}}
                 size= {0}
                iconStyle={{width: 20,height:20,tintColor: "none"}}
                style={{marginBottom: 0,marginLeft: 10,marginRight: 10,width: 100,height: 30,alignItems: 'center',}}
                />
          </View>
        ),*/
      };
    };
  
    myAlert = (text = "Right Button Clicked") => { 
      alert(text)
      this.props.navigation.navigate("Auth")
    }
  
    componentDidMount () {
      this.props.navigation.setParams({ handleClick: this.myAlert })
    }
  
    render() {  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            label="Go to Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'Detail of',
              });
            }}
          />
        </View>
      );
    }
  }