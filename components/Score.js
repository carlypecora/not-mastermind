import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Score extends React.Component {

	render(){
		return(
			<View style={styles.wrapper}>
				<Text>Score: {this.props.score}</Text>
				<Text>Not Mastermind</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 20,
		backgroundColor: 'gray'
	}
})
