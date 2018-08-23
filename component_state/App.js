import React, { Component } from 'react'
import { StyleSheet, AppRegistry, View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 11111111,
      todos: [
        {key: 1, text: 'View'},
        {key: 2, text: 'Text'},
        {key: 3, text: 'Image'},
        {key: 4, text: 'Click to remove'}
      ]
    }
  }
  // todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App']

  onAddTodo = (data) => {
    const {todos} = this.state

    this.setState({
      todos: [{key: 5, text: data}, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }


  render() {
    const {key, todos} = this.state
    return (
      <View>
        <Title>To-do List</Title>
        <Input 
          placeholder = {'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddToDo}
        />
        <List
          list = {todos}
          onPressItem = {this.onRemoveTodo}
        />
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
  },
});
