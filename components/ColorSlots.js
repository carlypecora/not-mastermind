import React from 'react'
import { View, Text } from 'react-native'

export default class ColorSlots extends React.Component {

	render(){
		return(
			<View style={{flex: 2, marginTop: 5, marginBottom: 20, flexDirection: 'row'}}>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'white', borderRadius: 100, height: 40, width: 40, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
				<View style={{backgroundColor: 'lightgrey', borderRadius: 10, height: 50, width: 80, marginLeft: 20, marginTop: 5, float: 'right'}}></View>
			</View>
		)
	}
}