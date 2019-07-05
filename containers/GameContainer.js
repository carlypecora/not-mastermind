import React from 'react'
import { Text, View } from 'react-native'
import Score from '../components/Score'
import ColorSlots from '../components/ColorSlots'
import ColorPicker from '../components/ColorPicker'

export default class GameContainer extends React.Component {
	state={
		currentSlot: 8,
		selectedColor: "white"

	}

	updateSelectedColor = (color) => {
		this.setState({
			selectedColor: color
		})
	}

	updateCurrentSlot = () => {
		oldSlot = this.state.currentSlot
		this.setState({
			currentSlot: oldSlot - 1
		})
	}

	renderColorSlots = () => {
		return [1, 2, 3, 4, 5, 6, 7, 8].map(x => <ColorSlots currentSlot={this.state.currentSlot} id={x} key={x}/>)
	}

	render(){
		console.log(this.state.selectedColor)
		return(
			<View>
				<Score score={this.props.score} />
				{this.renderColorSlots()}
				<ColorPicker updateSelectedColor={this.updateSelectedColor}/>
			</View>
		)
	}
}