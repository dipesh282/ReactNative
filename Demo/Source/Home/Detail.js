import React, { Component } from "react"
import styles from "../Utility/Styles"
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
import {ScrollView} from "react-native"

export default class DetailC extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam("otherParam", "A Nested Details Screen") + " " + navigation.getParam("itemId", "0"),
      };
    };
  
    constructor(props) {
      super(props);
      this.state = {
        error: '',
        customExpandableValue: 'Custom Expandable',
      };
    }
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      const LONG_TEXT =
      'Concept, edition and design direction for the editorial piece “La Forma Bruta” by the photographer' +
      'Martín Bollati. In this piece';
      const INPUT_SPACING = 10;
    
      const transformPrice = (value) => {
        let cleanValue;
        let priceText = '';
        if (value) {
          [cleanValue] = value.match(/^(?:(?:-?(?:0|\d{1,9}))(?:\.\d{0,2})?)|-/) || [''];
          priceText = cleanValue;
        }
        return priceText;
      };
  
      return (
        /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
              })}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>*/
        <View flex>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="always"
            getTextInputRefs={() => [this.noUnderline, this.hugeText]}
          >
            <Text style={{marginBottom: 20}} text40>
              Inputs
            </Text>
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="floatingPlaceholder & helperText"
              helperText="this is an helper text"
              onChangeText={text => this.setState({error: text ? '' : 'This field is required'})}
              error={this.state.error}
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="multiline & helperText"
              multiline
              helperText="this is an helper text"
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              title="title"
              placeholder="character counter & error"
              maxLength={3}
              showCharacterCounter
              onChangeText={text => this.setState({error: text ? '' : 'This field is required'})}
              error={this.state.error}
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              title="Title"
              placeholder="character counter & error & multiline"
              multiline
              maxLength={32}
              showCharacterCounter
              onChangeText={text => this.setState({error: text ? '' : 'This field is required'})}
              error={this.state.error}
              autoCapitalize="words"
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="character counter & expandable"
              expandable
              containerStyle={{marginBottom: INPUT_SPACING}}
              maxLength={20}
              showCharacterCounter
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholderTextColor={Colors.cyan30}
              floatingPlaceholderColor={Colors.cyan30}
              placeholder="underline colors & error"
              onChangeText={text => this.setState({error: text ? '' : 'This field is required'})}
              error={this.state.error}
              underlineColor={{focus: Colors.purple50, error: Colors.yellow60}}
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="multiline & numberOfLines = 3"
              multiline
              numberOfLines={3}
            />
  
            <TextInput
              text40
              containerStyle={{marginBottom: INPUT_SPACING}}
              placeholder="write something.."
              hideUnderline
            />
  
            <TextInput
              text30
              containerStyle={{marginBottom: INPUT_SPACING}}
              placeholder="write something.."
              centered
              hideUnderline
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              placeholder="Share your story"
              value={
                "Share Your Story exists to provide spaces to hear people's stories, in order to inspire us to" +
                'live better ones ourselves.'
              }
              multiline
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="Tell us about yourself"
              value={LONG_TEXT}
              expandable
            />
  
            <TextInput
              containerStyle={{marginBottom: INPUT_SPACING}}
              ref={r => (this.input = r)}
              placeholder="placeholder"
              expandable
              value={this.state.customExpandableValue}
              renderExpandable={() => {
                return (
                  <Modal visible animationType={'slide'}>
                    <View flex bg-orange70 center>
                      <Text marginB-20 text50>
                        Do Whatever you want here
                      </Text>
                      <Button
                        label="Close Me"
                        onPress={() => {
                          this.setState({customExpandableValue: 'New Value'}, () => {
                            this.input.toggleExpandableModal(false);
                          });
                        }}
                      />
                    </View>
                  </Modal>
                );
              }}
            />
  
            <TextInput
              text70
              containerStyle={{marginBottom: INPUT_SPACING}}
              floatingPlaceholder
              placeholder="with price transformer"
              value={this.state.value}
              transformer={transformPrice}
            />
  
            <Text dark40>Text Area</Text>
            <View
              style={{
                height: 150,
                borderWidth: 1,
                marginBottom: INPUT_SPACING,
                padding: 10,
                borderColor: Colors.dark60,
              }}
            >
              <TextArea placeholder="write something.." />
            </View>
  
            <TextInput
              text50
              floatingPlaceholder
              placeholder="Big Title Text"
              containerStyle={{marginBottom: INPUT_SPACING}}
              helperText="this is an helper text"
            />
            <TextInput
              text20
              placeholder="Huge Text"
              containerStyle={{marginBottom: INPUT_SPACING}}
              ref={input => (this.hugeText = input)}
            />
  
            <TextInput
              text70
              placeholder="No Underline"
              containerStyle={{marginBottom: INPUT_SPACING}}
              ref={input => (this.noUnderline = input)}
              hideUnderline
            />
  
            <TextInput
              text10
              placeholder="Centered"
              centered
              containerStyle={{marginBottom: INPUT_SPACING}}
              hideUnderline
            />
          </ScrollView>
          {/* <KeyboardAwareInsetsView /> */}
        </View>
  
      );
    }
  }