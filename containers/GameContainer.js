import React from 'react'
import { Text, View, Button } from 'react-native'
import Score from '../components/Score'
import ColorSlots from '../components/ColorSlots'
import ColorPicker from '../components/ColorPicker'
let colors =["white", "white", "white", "white", "hotpink", "hotpink", "hotpink", "hotpink", "yellow", "yellow", "yellow", "yellow","green", "green", "green", "green","red", "red", "red", "red", "blue", "blue", "blue", "blue"]
let empty =['grey', 'grey', 'grey', 'grey']
let emptyBoard = [[...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty]]

export default class GameContainer extends React.Component {

	state={
		currentSlot: 7,
		selectedColor: null,
		currentBoard: emptyBoard,
		feedbackBoard: emptyBoard,
		winningBoard: null,
		win: false,
		score: 0

	}
	createEmptyBoard = () =>{
		let empty =['grey', 'grey', 'grey', 'grey']
		return  [[...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty], [...empty]]
		 
	}
	updateSelectedColor = (color) => {
		this.setState({
			selectedColor: color
		})
	}

	updateCurrentSlot = () => {
		this.checkGuess();
		if(this.state.currentSlot>0){

			oldSlot = this.state.currentSlot
			this.setState({
				currentSlot: oldSlot - 1
			})
		}else{
			
		}
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
		fetch("https://fc4e63af.ngrok.io/total"	)
		.then(r => r.json())
		.then(score =>{
			this.setState({
				score: score
			})
		})
		this.setState({
			currentBoard: this.createEmptyBoard(),
			feedbackBoard: this.createEmptyBoard(),
			winningBoard: this.generateWinningColors()
		})

	}

	componentDidUpdate(prevProps, prevState){
		
		if(prevState.win !== this.state.win){
			console.log("component did update AND passed conditional")
			fetch("https://fc4e63af.ngrok.io/scores", {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				  },
				body: JSON.stringify({score: 20})
			}).catch(error => console.error('Post request Error', error))

			this.setState({
				score: this.state.score + 20
			})
		}

	}

	checkGuess = () => {
		let guess = [...this.state.currentBoard[this.state.currentSlot]]
		let win = [...this.state.winningBoard]
		console.log("WINNING BOARD", win)
		console.log("current guess", guess)
		let feedback = [...this.state.feedbackBoard[this.state.currentSlot]]
		let j=0;
		for (let i= 0; i<4; i++) {
			
			if(guess[i] === win[i]){
				guess[i] = null;
				win[i]=null;
				feedback[j] = "black";
				j++;
			}
		}
		console.log("Current guess after black feedback", guess)
		if(!feedback.includes("grey")){
			this.gameover();
		}
		for(let i=0; i<4; i++){
			if(guess[i]){
				console.log("uncheck index", i)
				for(let k = 0; k<4; k++){
					if(i !== k && guess[i]===win[k]){
						console.log("current slot index", k, "matched for white")
						guess[i] = null;
						win[k]=null;
						feedback[j] = "white";
						j++;
						break;
					}
				}
				console.log("GUESS arr after index",i , guess)

				console.log("WIN arr after index",i , win)
			}
		}
		newFeedback = this.state.feedbackBoard.map((slot, index) => {
			if(index === this.state.currentSlot){
				return feedback
			} else{
				return slot
			}

		})
		this.setState({
			feedbackBoard: newFeedback
		})
	}
	gameover = () => {
		this.setState({
			win: true
		})
	}

	restartGame = () => {
	
		this.setState({
			currentSlot: 7,
			selectedColor: "white",
			currentBoard: this.createEmptyBoard(),
			feedbackBoard: this.createEmptyBoard(),
			winningBoard: this.generateWinningColors(),
			win: false,
		})
	}
	updateColorsOnSlot = (index) => {
		let updatedBoard = [...this.state.currentBoard]
		updatedBoard[this.state.currentSlot][index] = this.state.selectedColor
		this.setState({
			currentBoard: updatedBoard
		})
	}

	renderColorSlots = () => {
		return [0, 1, 2, 3, 4, 5, 6, 7].map(x => <ColorSlots selectedColor={this.state.selectedColor} updateCurrentSlot={this.updateCurrentSlot} updateColorsOnSlot={this.updateColorsOnSlot} feedbackBoard={this.state.feedbackBoard} currentBoard={this.state.currentBoard} currentSlot={this.state.currentSlot} id={x} key={x}/>)
	}

	render(){
		console.log(this.state.score)
		return(
			<View>
				<Score score={this.state.score} />
				{this.state.win 
				?
				<>
				<Button onPress={this.restartGame} title="You Win! Play Another Game?"></Button>
				<View style={{flexDirection: 'row'}}>
					{this.state.winningBoard.map(color=><View key={Math.random()} style={{backgroundColor: color, borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5}}></View>)}
				</View>
				</>
				:
				<>
					{this.renderColorSlots()}
					<ColorPicker updateSelectedColor={this.updateSelectedColor}/>
				</>
				}
			</View>
		)
	}
}