import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
  INCREMENTALL: 'INCREMENTALL'
}

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count1: state.count1 + 1, count2: state.count2};
  }
  else if (action.type === types.INCREMENTALL) {
    return {count1: state.count1 + 1, count2: state.count2 + 1};
  }
  return state;
}

// Define the initial state of our store
const initialState = {count1: 0, count2: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)

//  using redux
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENTALL})

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{fontSize: 100}}>
          {store.getState().count1}, {store.getState().count2}
        </Text>
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
