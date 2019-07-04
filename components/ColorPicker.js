import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';


export default class ColorSlots extends React.Component {

	render(){
		return(
			<View style={{backgroundColor: 'gray'}} >
				<Text className="picker">Here go the colors</Text>
			</View>
		)
	}
}

