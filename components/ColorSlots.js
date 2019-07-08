import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'



export default class ColorSlots extends React.Component {

	render(){
		
		return(
		// <View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 270, marginTop: 5}}></View>
		

			<View style={{flex: 2, marginTop: 5, marginBottom: 20, flexDirection: 'row'}}>
				
				{this.props.currentSlot === this.props.id 
				? 
				<>
				{this.props.currentBoard[this.props.id].map((slot, index)=> {
				return(
				<TouchableHighlight  onPress={()=>this.props.updateColorsOnSlot(index)}>
					<View  style={{backgroundColor: slot , borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
			 	 </TouchableHighlight>
					)
				})}
					<Button onPress={this.props.updateCurrentSlot} title="OK!"></Button>
				</>
				: 
				<>
				{this.props.currentBoard[this.props.id].map(slot => {
					return	<View  style={{backgroundColor: slot , borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				})}
				{this.props.feedbackBoard[this.props.id].map(slot => {
					return	<View style={{backgroundColor: slot, borderRadius: 150, height: 15, width: 15, marginLeft: 15, marginTop: 15 , float: 'right'}}></View>
				})}
				</>
				}
			</View>
		)
	}
}

