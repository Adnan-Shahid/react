import React, { Component } from 'react';
import { StyleSheet, Button, Alert, Text, View } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.buttonContainer}>
            <Button
              onPress = {this._onPressButton}
              title = "Press Me"
            />
        </View>
        <View style = {styles.buttonContainer}>
            <Button
              onPress = {this._onPressButton}
              title = "Press Me"
              color = "#841584"
            />
        </View>
        <View style = {styles.altButtonContainer}>
          <Button
            onPress = {this._onPressButton}
            title = "This looks great!"
          />
          <Button
            onPress = {this._onPressButton}
            title = "OK!"
            color = "#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    borderRadius: 40
  },
  altButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});