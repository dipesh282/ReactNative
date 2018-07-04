import {StyleSheet} from "react-native";
import {Typography} from 'react-native-ui-lib'

export default StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 25,
    },
    title: {
      ...Typography.text20,
    },
    header: {
      ...Typography.text60,
      marginVertical: 20,
    },
  });