import {createStackNavigator,createSwitchNavigator} from "react-navigation";
import React, {Component} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AuthLoadingC from "../AuthLoading"

import SignInC from "../Login/SignIn"
import SignUpC from "../Login/SignUp"
import ForgetPassC from "../Login/ForgetPass"

import HomeC from "../Home/Home"
import DetailC from "../Home/Detail"
const AppStack = createStackNavigator(
  { 
    Home: HomeC, 
    Details: DetailC 
  },
  {
    initialRouteName: "Home",
    mode: "card",
    headerMode: "screen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#ffffff",
      headerBackTitle: null,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  });

const AuthStack = createStackNavigator(
  { 
    SignIn: SignInC,
    SignUp: SignUpC,
    ForgetPass: ForgetPassC 
  },
  {
    initialRouteName: "SignIn",
    mode: "card",
    headerMode: "screen",
    navigationOptions: {
      // header: null,//To hide the navigation bar
      headerBackImage: <Icon name={"arrow-left"} size= {30} />,
      headerTransparent : true,
      headerStyle: {
        borderBottomWidth: 0
      },
      headerTintColor: '#000000',
      headerBackTitle: null,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  })

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingC,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: "AuthLoading",
  }
);

/*export default createSwitchNavigator(
    {
      Home: HomeC,
      Details: DetailC,
    },
    {
      initialRouteName: 'Home',
      // The header config from HomeScreen is now here 
      mode: 'card',
      headerMode: 'float',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      //header: null,//To hide the navigation bar
        headerTintColor: '#fff',
        headerBackTitle: null,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );*/
  
  