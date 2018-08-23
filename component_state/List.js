import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class List extends Component {

  renderItem = (todos, i) => {
    const {onPressItem} = this.props;

    return (
      <TouchableOpacity
        style = {styles.item}
        onPress = {() => onPressItem(i)}
      >
        <Text>{todos.text}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
});
