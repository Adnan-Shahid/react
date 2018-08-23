import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 2};

    setInterval(() => {
      this.setState(previousState => {
        this.setState({
          num: previousState.num + 2
        });
      });
    }, 1000);
  }

  render() {
    const {num} = this.state
    return (
      <Text> {num} </Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true, num: 0};

    // toggle state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return ( 
      <Text> {display} </Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
        <Text> SUP {this.props.name} </Text>
    );
  }
}

class Bananas extends Component {
  render() {
    return (
      <Image source={this.props.pic} style={{width: 200, height: 150}}/>
    );
  }
}

export default class App extends Component {
  render() {
    // ------------------------------------------
    // PROPS
    // let foo = {
    //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    // }
    // return (
    //   <View style={{alignItems: 'center'}}>
    //     <Greeting name='fkr'/>
    //     <Greeting name='wang'/>
    //     <Greeting name='schlong'/>
    //     <Bananas pic = {foo}/> 
    //   </View>
    // );
    //------------------------------------------
    // STATE
    return (
      <View> 
        <Blink text = 'I LOVE TO BLINK' />
        <Blink text = 'FUUUUDGE YEAAA' />
        <Blink text = 'FUUUUDGE YEAAA' />
        <Blink text = 'FUUUUDGE YEAAA' />
        <Count size={32}/>
      </View>
    );
  }
}