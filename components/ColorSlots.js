import React from 'react'
import { View, Text, Button } from 'react-native'



export default class ColorSlots extends React.Component {

	render(){
		console.log(this.props)
		return(
		// <View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 270, marginTop: 5}}></View>
		

			<View style={{flex: 2, marginTop: 5, marginBottom: 20, flexDirection: 'row'}}>

				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				{this.props.currentSlot === this.props.id 
				? 
				<>
				<Button title="OK!"></Button>
				</>
				: 
				<>
				<View style={{backgroundColor: 'grey', borderRadius: 150, height: 15, width: 15, marginLeft: 15, marginTop: 15 , float: 'right'}}></View>
				<View style={{backgroundColor: 'grey', borderRadius: 150, height: 15, width: 15, marginLeft: 15, marginTop: 15 , float: 'right'}}></View>
				<View style={{backgroundColor: 'grey', borderRadius: 150, height: 15, width: 15, marginLeft: 15, marginTop: 15 , float: 'right'}}></View>
				<View style={{backgroundColor: 'grey', borderRadius: 150, height: 15, width: 15, marginLeft: 15, marginTop: 15 , float: 'right'}}></View>
				</>
				}
			</View>
		)
	}
}