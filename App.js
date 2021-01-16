import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';



export default class App extends React.Component {

  speakWord(word) {
    Speech.speak(word)
  }

  constructor() {
    super();
    this.state = { text: '' }
  }
  render() {
    return (
      <View>
        <Header centerComponent={{
          text: "Text To Speech",
          style: { fontSize: 30 }
        }} />
        <TextInput style={styles.inputBox} placeholder="Type your word here" onChangeText={(text) => {
          this.setState({ text: text })
        }} />
        <TouchableOpacity onPress={() => {
          Speech.speak(this.state.text)
          console.log(this.state.text)
        }} style={styles.speakButton}>
          <Text style={styles.buttonText}>
            Speak
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Well this is a simple app It says what you type in the text box and that is all !</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  speakButton: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    borderWidth: 2,
    marginLeft: 130,
    marginRight: 130,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 60
  },
  inputBox: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    paddingRight: 60,
    paddingLeft: 60
  },
  text: { textAlign: 'center', marginTop: 30 }
})