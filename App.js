import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    name: "Yasmine"
  }
  render(){
  return (
    <View style={styles.container}>
      <Text>{this.state.name}</Text>
      <Button title="click" onPress={()=> this.setState({name: "Carly"})} >click!</Button>
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
