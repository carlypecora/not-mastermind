import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Score extends React.Component {

	render(){
		return(
			<View style={styles.wrapper}>
				<Text style={styles2.textWrap} >Score: {this.props.score}</Text>
				<Text style={styles2.textWrap} >Not Mastermind</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 0,
		backgroundColor: 'gray',
		width: 400,
		flexDirection: 'row',
		alignItems: 'center',
    	justifyContent: 'center'
	}
})


const styles2 = StyleSheet.create({
	textWrap: { 
		color: 'white', 
		fontWeight: 'bold', 
		fontSize: 20,
		paddingTop: 25,
		paddingLeft: 10,
		paddingRight: 10
	}
})