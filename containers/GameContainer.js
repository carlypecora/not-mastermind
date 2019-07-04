import React from 'react'
import { Text, View } from 'react-native'
import Score from '../components/Score'

export default class GameContainer extends React.Component {
	render(){
		return(
			<View>
				<Score score={this.props.score} />
			</View>
		)
	}
}