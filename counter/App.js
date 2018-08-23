import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Count2 extends Component {
	state = {count: 100}

	componentDidMount() {
		setInterval(() => {
			this.setState({count: this.state.count - 1})
		}, 1000)
	}

	render () {
		const {count} = this.state
		const {color, size} = this.props

		return (
			<Text style = {{color, fontSize: size}}>
				{count}
			</Text>
		)
	}
}

class Counter extends Component {
	state = {count: 0}

	componentDidMount() {
		setInterval(() => {
			this.setState({count: this.state.count + 1})
		}, 1000)
	}

	render() {
		const {count} = this.state
		const {color, size} = this.props

		return (
			<Text style={{color, fontSize: size}}>
				{count}
			</Text>
			
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Counter color={'black'} size={16} />
				<Count2 color={'darkblue'} size={32} />	
			</View>
    	)
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

AppRegistry.registerComponent('App', () => App)
