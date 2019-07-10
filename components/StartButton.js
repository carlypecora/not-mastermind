import React from 'react';
import { Button } from 'react-native'

export default class StartButton extends React.Component{
	render(){
	return <Button onPress={this.props.handleStartClick} title="start" color='#213960'></Button>
	}
}