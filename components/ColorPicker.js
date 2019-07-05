import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';


export default class ColorPicker extends React.Component {

	render(){
		return(
				<View style={{backgroundColor: 'gray', marginTop: 0, flex: 4, width: 375, flexDirection: 'row'}}>
					<View style={{backgroundColor: 'white', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'hotpink', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'yellow', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'green', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'red', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'blue', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
				</View>
		)
	}
}

 