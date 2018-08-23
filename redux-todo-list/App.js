import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'

import { actionCreators } from './todoListRedux'
// Import the reducer and create a store
import { reducer } from './todoListRedux'

import List from './List'
import Input from './Input'
import Title from './Title'
const store = createStore(reducer)
const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <Provider store={store}>
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
      </Provider>
    )
  }
}