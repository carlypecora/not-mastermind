import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartButton from './components/StartButton'
import GameContainer from './containers/GameContainer'

export default class App extends React.Component {

  state = {
    start: false
  }

  handleStartClick = () => {
    this.setState({
      start: true
    })
  }

  render(){
  return (
    <View style={styles.container}>
      {!this.state.start ? <StartButton handleStartClick={this.handleStartClick} /> : 
        <GameContainer />}
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
