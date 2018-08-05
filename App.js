import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
    let imc = this.state.massa / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    
  }


  render() {
    return (
      <View style={styles.container}>
        <View styles={styles.entrada}>
          <TextInput></TextInput>
          <TextInput></TextInput>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entrada: {
    flexDirection: 'row',
  },
  input: {
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  }
});
