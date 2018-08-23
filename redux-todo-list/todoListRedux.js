import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// actions to dispatch
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (item) => {
    return {type: types.REMOVE, payload: index}
  }
}

const initialState = {
  todos: ['Click to remove', 'Learn React', 'Bubber Ducky']
}

export const reducer = (state = initialState, action) => {
  const {todos} = state;
  const {type, payload} = action;

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos]
      }
    }

    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todos, i) => i !== payload)
      }
    }
  }
  return state

}



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
