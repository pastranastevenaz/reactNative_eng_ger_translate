/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  TouchableHighLight,
  Text,
  View
} from 'react-native';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    }
  }
  render() {
    return (

      <View style={styles.container}>
        <TextInput
        onChangeText={(val) => this.setState({email: val})}
        style={styles.input} placeholder="Email"
        />
        <Text>
          Hello
        </Text>
      </View>
    );
  }
};

//const Errors = (props) => {
  //return (
    //<View>
    //{props.errors.map((error, i) => <Text key={i} style={styles.error}</Text>)}
  //  </View>
//  )
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'blue',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

module.exports = Register;
