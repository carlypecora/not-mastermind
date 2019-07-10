import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartButton from './components/StartButton'
import GameContainer from './containers/GameContainer'

export default class App extends React.Component {

  state = {
    start: false,
    score: 0
  }

  handleStartClick = () => {
    this.setState({
      start: true
    })
  }

  render(){
  return (
    <View style={styles.container}>
      {!this.state.start ? <StartButton  handleStartClick={this.handleStartClick} /> : 
        <GameContainer style={{flex: 1}} score={this.state.score} />}
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7d0b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
