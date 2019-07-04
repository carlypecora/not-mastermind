import React from 'react'
import { Text, View } from 'react-native'
import Score from '../components/Score'
import ColorSlots from '../components/ColorSlots'
import ColorPicker from '../components/ColorPicker'

export default class GameContainer extends React.Component {

	renderColorSlots = () => {
		return [...Array(8).keys()].map(x => <ColorSlots key={x} />)
	}

	render(){
		return(
			<View>
				<Score score={this.props.score} />
				{this.renderColorSlots()}
				<ColorPicker />
			</View>
		)
	}
}