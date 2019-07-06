import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { StyleSheet } from 'react-native';
const colors =["white", "hotpink", "yellow", "green", "red", "blue"]


export default class ColorPicker extends React.Component {


	render(){
		return(
				<View style={{backgroundColor: 'gray', marginTop: 0, flex: 4, width: 375, flexDirection: 'row'}}>
				<>
				{colors.map(color => {
					return (
						<TouchableHighlight key={color} onPress={()=>this.props.updateSelectedColor(color)}>
						<View style={{backgroundColor: color, borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					  </TouchableHighlight>
					)
				})}
				</>
				</View>
		)
	}
}

// <TouchableHighlight onPress={()=>this.props.updateSelectedColor("white")}>
// <View style={{backgroundColor: 'white', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
// </TouchableHighlight>
// <TouchableHighlight onPress={()=>this.props.updateSelectedColor("hotpink")}>
// <View  style={{backgroundColor: 'hotpink', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
// </TouchableHighlight>
// <View onPress={()=>this.props.updateSelectedColor("yellow")} style={{backgroundColor: 'yellow', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
// <View onPress={()=>this.props.updateSelectedColor("green")} style={{backgroundColor: 'green', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
// <View onPress={()=>this.props.updateSelectedColor("red")} style={{backgroundColor: 'red', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
// <View onPress={()=>this.props.updateSelectedColor("blue")} style={{backgroundColor: 'blue', borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>