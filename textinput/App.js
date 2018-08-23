import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style = {{flex: 1, flexDirection: 'column'}}>
        <TextInput
          style = {{flex: 1, padding: 10, fontSize: 20}}
          placeholder = "Type here to translate"
          onChangeText = {(text) => this.setState({text})}
        />
        <Text style = {{flex: 8, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕')}
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({

// })


