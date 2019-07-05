import React from 'react'
import { View, Text } from 'react-native'


export default class ColorSlots extends React.Component {

	render(){
		console.log(this.props)
		return(
			<View style={{flex: 2, marginTop: 20, marginBottom: 20}}>
				{this.props.currentSlot === this.props.id 
				?
				<button title="OK"></button>
				:
					<View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 15, width: 15, marginLeft: 10, marginTop: 15}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 150, display: 'inline', position: 'absolute', height: 15, width: 15, marginLeft: 30, marginTop: 15}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 150, display: 'inline', position: 'absolute', height: 15, width: 15, marginLeft: 50, marginTop: 15}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 150, display: 'inline', position: 'absolute', height: 15, width: 15, marginLeft: 70, marginTop: 15}}></View>
				}
					<View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 120, marginTop: 5}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 170, marginTop: 5}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 220, marginTop: 5}}></View>
					<View style={{backgroundColor: 'grey', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 270, marginTop: 5}}></View>
		

			</View>
		)
	}
}