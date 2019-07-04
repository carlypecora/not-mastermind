import React from 'react'
import { View, Text } from 'react-native'

export default class Score extends React.Component {

	render(){
		return(
			<View>
				<Text>Score: {this.props.score}</Text>
				<Text>Not Mastermind</Text>
			</View>
		)
	}
}