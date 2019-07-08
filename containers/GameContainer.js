import React from 'react'
import { Text, View } from 'react-native'
import Score from '../components/Score'
import ColorSlots from '../components/ColorSlots'
import ColorPicker from '../components/ColorPicker'

let empty =['grey', 'grey', 'grey', 'grey']
let emptyBoard = [[...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty]]
let colors =["white", "hotpink", "yellow", "green", "red", "blue"]
let anotherEmptyBoard = [[...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty]]

export default class GameContainer extends React.Component {

	state={
		currentSlot: 7,
		selectedColor: "white",
		currentBoard: [...emptyBoard],
		feedbackBoard: [...anotherEmptyBoard],
		winningBoard: null

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

	shuffle = (a) => {
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	    return a;
	}

	generateWinningColors = () => {
		let randomColors = this.shuffle(colors)
		return randomColors.slice(0, 4)
	}

	componentDidMount(){
		this.setState({
			winningBoard: this.generateWinningColors()
		})
	}

	gameover = () => {
		
	}

	update
	updateColorsOnSlot = (index) => {
		let updatedBoard = [...this.state.currentBoard]
		updatedBoard[this.state.currentSlot][index] = this.state.selectedColor
		this.setState({
			currentBoard: updatedBoard
		})
	}

	renderColorSlots = () => {
		return [0, 1, 2, 3, 4, 5, 6, 7].map(x => <ColorSlots updateCurrentSlot={this.updateCurrentSlot} updateColorsOnSlot={this.updateColorsOnSlot} feedbackBoard={this.state.feedbackBoard} currentBoard={this.state.currentBoard} currentSlot={this.state.currentSlot} id={x} key={x}/>)
	}

	render(){
		console.log(this.state.winningBoard)
		return(
			<View>
				<Score score={this.props.score} />
				{this.renderColorSlots()}
				<ColorPicker updateSelectedColor={this.updateSelectedColor}/>
			</View>
		)
	}
}