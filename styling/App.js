import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      // ----------------------------------------------
      // BASIC STYLING AND OVERWRITES
      // <View>
      //   <Text style={styles.red}>some red</Text>
      //   <Text style={styles.bigblue}>Some big fat shit</Text>
      //   <Text style={styles.red}>red again</Text>
      //   <Text style={[styles.bigblue, styles.red]}>red overwrites blue</Text>
      //   <Text style={[styles.red, styles.bigblue]}>blue overwrites red</Text>
      //   <View style={{width: 60, height:100, backgroundColor: 'skyblue'}}/>
      // </View>
      // -------------------------------------------------------
      // FLEXBOX
      // <View style = {{flex: 1}}>
      //   <View style = {{flex: 1, backgroundColor: 'powderblue'}}/>
      //   <View style = {{flex: 2, backgroundColor: 'red'}}/>
      //   <View style = {{flex: 3, backgroundColor: 'steelblue'}}/>
      // </View>
      // -------------------------------------------------------
      // COMPLETE STYLING
      // NOTE: justifyContent has: space-between...., center...
      // align has flex-start, flex-end and stretch <--- only works if no width
      <View style = {{
        flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style = {{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style = {{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style = {{width: 50, height:50, backgroundColor: 'steelblue'}}>
          <View style = {{flex: 1, backgroundColor: 'black'}}/>
          <View style = {{flex: 1, backgroundColor: 'steelblue'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    paddingLeft: 30,
  },
});