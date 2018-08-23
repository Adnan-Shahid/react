import React, { Component } from 'react';
import { StyleSheet, SectionList, Text, View } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      {id: 0, text: 'View'},
      {id: 1, text: 'Text'},
      {id: 1, text: 'Image'}
    ]
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      {id: 0, text: 'ListView'},
      {id: 1, text: 'ScrollView'}
    ]
  }
]

// default is key
const extractKey = ({id}) => id

export default class App extends Component {
  renderItem = ({item}) => {
    return (
      <Text style= {styles.row}>{item.text}</Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <Text style = {styles.header}>{section.title}</Text>
    )
  }

  render() {
        // --------------------
    // BASIC SECTION LIST
    // return (
    //   <View style={styles.container}>
    //     <SectionList
    //       sections = {[
    //         {title: 'D', data: ['Donk']},
    //         {title: 'A', data: ['Absolutely', 'Atrocious', 'Abomination']}
    //       ]}
    //       renderItem = {({item}) => <Text style={styles.item}>{item}</Text>}
    //       renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}>{section.title}</Text>}
    //       keyExtractor={(item, index) => item}
    //     />
    //   </View>
    // );
    return (
      <View style={styles.container}>
          <SectionList
            sections = {sections}
            renderItem = {this.renderItem}
            renderSectionHeader = {this.renderSectionHeader}
            keyExtractor = {extractKey}
          >
          </SectionList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   header: {
    padding: 15,
    marginBottom: 0,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
 });
