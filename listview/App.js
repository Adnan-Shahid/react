import React, { Component } from 'react';
import { StyleSheet, Alert, TouchableHighlight, FlatList, Text, View } from 'react-native';

const rows = [
  {id: '0', text: 'This'},
  {id: '1', text: 'IS'},
  {id: '2', text: 'A'},
  {id: '3', text: 'FKN'},
  {id: '4', text: 'FLATLIST'},
  {id: '5', text: 'BITCH'}
]

// NOTE: keyextractor basically tells you to use the value: id 
//  for the react keys instead of the default "key" property as shown in the basic example
const extractKey = ({id}) => id

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  _onLongPressButton() {
    Alert.alert('You held the button!')
  }

  renderItem = ({item}) => {
    return (
      <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor='white'>
        <Text style={styles.row}>
          {item.text}
        </Text>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        style = {styles.container}
        data = {rows}
        renderItem = {this.renderItem}
        keyExtractor={extractKey}
      />
    )
  }
  // render() {
  //   --------------------------------------
  //   BASIC FLATLIST
  //   return (
  //     <View style={styles.container}>
  //       <FlatList
  //         data = {[
  //           {key: 'Devin'},
  //           {key: 'Jackson'},
  //           {key: 'weeb'},
  //           {key: 'sneep'}
  //         ]}
  //         renderItem= {({item}) => <Text style={styles.item}>{item.key}</Text>}
  //       />
  //     </View>
  //   );
  //   -------------------------------------

  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
