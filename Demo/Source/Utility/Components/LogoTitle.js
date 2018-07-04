import React, { Component } from "react"
import PropTypes from "prop-types"
import {Image} from "react-native"

//Custom Component with proptype
export default class LogoTitle extends React.Component {
    static propTypes = {
      name : PropTypes.string
    }
   render() {
     return (
       <Image
         source= {(this.props.name == 'Home') ? require("../../Assets/boy.png") : {uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
         style={{ width: 30, height: 30,margin: 10 }}
       />
     );
   }
 }
 
 