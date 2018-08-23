import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <Text> Marion is the somalian king </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  box: {
  	width: 200,
  	height: 200,
  	backgroundColor: 'skyblue',
  	borderWidth: 2,
  	borderColor: 'darkblue',
  	borderRadius: 10,
  	margin: 30
  },
})

AppRegistry.registerComponent('App', () => App)

