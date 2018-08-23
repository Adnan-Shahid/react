import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const extractKey = ({id}) => id;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: '1' },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: '2' }
      ]
    };
  }
  

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
  render() {
    const {articles} = this.state;
    
    return (
      <FlatList
        styles={styles.container}
        data={articles}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
