import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        minimumZoomScale={1} // ios only
        maximumZoomScale={5}
        >
        <Text style = {{fontSize: 80}}>Some stuff bruh</Text>
        <Image source = {require('./foo.png')}/>
        <Text style = {{fontSize: 80}}>More things</Text>
        <Image source = {require('./foo.png')}/>
        <Text style = {{fontSize: 80}}>Pinch test?</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
