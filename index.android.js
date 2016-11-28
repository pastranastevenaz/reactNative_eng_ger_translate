import React, { Component } from 'react';
import { AppRegistry,
        StyleSheet,
        Text,
        View,
        Image,
        TextInput
        } from 'react-native';
import Register from './register.js'
import EStyleSheet from 'react-native-extended-stylesheet'
import Button from 'react-native-button'


var english_german = require('./english_german.json')

EStyleSheet.build();

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.showMeaning = this.showMeaning.bind(this);
    this.state = {
      input: '',
      output: ''
    };
  }
  showMeaning = function() {
    var meaning = this.state.input in english_german ?
                    english_german[this.state.input] :
                    "Not found";
    this.setState({ output: meaning });
  console.log(meaning)
  }

  render = function () {
    return (
      <View style = { styles.parent }>
        <Text>
          Type something in English:
        </Text>
        <TextInput
          text={ this.state.input }
          style={ styles.textIn }
          onChangeText={ (e) => this.setState({input: e})}
          onSubmitEditing={ this.showMeaning }
          />
        <Button style={ styles.myButton }
          onPress={ this.showMeaning }
          >
          Translate
        </Button>
        <Text
        style={ styles.germanLabel }
        onPress={ (f) =>  this}
        >
          It's German equivalant is:
        </Text>
        <Text
        style={ styles.germanWord }>
          { this.state.output }
        </Text>
      </View>
    );
  }
}



const styles = EStyleSheet.create({
  //container View
  parent: {
    padding: 16,
    backgroundColor: '#e6feff',
    height: '100%'
  },
  textIn: {
    color: '#3C3D3D',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '90%',
    fontSize: 20

    //backgroundColor: '#aaa'
  },

  //text label
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },

  //text meaning
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  },
  //button
  myButton: {
    backgroundColor: '#003E40',
    color: '#e6feff',
    height: 60,
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
    elevation: 8
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
