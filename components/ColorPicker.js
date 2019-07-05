import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';


export default class ColorPicker extends React.Component {

	render(){
		return(
				<View style={{backgroundColor: 'gray', marginTop: 0, flex: 4, width: 375}}>
					<View style={{backgroundColor: 'white', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 10, marginTop: 5}}></View>
					<View style={{backgroundColor: 'pink', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 60, marginTop: 5}}></View>
					<View style={{backgroundColor: 'green', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 110, marginTop: 5}}></View>
					<View style={{backgroundColor: 'blue', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 160, marginTop: 5}}></View>
					<View style={{backgroundColor: 'red', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 210, marginTop: 5}}></View>
					<View style={{backgroundColor: 'yellow', borderRadius: 100, display: 'inline', position: 'absolute', height: 40, width: 40, marginLeft: 260, marginTop: 5}}></View>
				</View>
		)
	}
}

 