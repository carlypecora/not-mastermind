import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { StyleSheet } from 'react-native';
const colors =["#F5EEEA", "#890D96", "#FC8012", "#0B9797", "#ec1037", "#1C47A8"]


export default class ColorPicker extends React.Component {


	render(){
		return(
				<View style={{backgroundColor: '#165B50', marginTop: 0, marginLeft: 0, flex: 4, width: 400, flexDirection: 'row', alignItems: 'center',
    	justifyContent: 'center'}}>
				<>
				{colors.map(color => {
					return (
					<TouchableHighlight key={color} onPress={()=>this.props.updateSelectedColor(color)}>
						<View style={{borderWidth: 1, borderColor: '#0E3C34' ,backgroundColor: color, borderRadius: 100, height: 50, width: 50, marginLeft: 10, marginTop: 5}}></View>
					 </TouchableHighlight>
					)
				})}
				</>
				</View>
		)
	}
}