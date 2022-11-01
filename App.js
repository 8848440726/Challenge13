import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import { AsyncStorage } from "react-native";

export default function App() {
  const [data, setdata] = useState('')
  const [task,settask] = useState('')
  const Add = async () => {
    try {
      await AsyncStorage.setItem('note',task)
    }
    catch (e) {
      console.error(e);
    }
  }
  const get = async () => {
    try {
     const value= await AsyncStorage.getItem('note')
      if (value !== null) {
        setdata(value);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.textinput}>
        <TextInput
          placeholder="write here..."
          placeholderTextColor={'black'}
          onChangeText={(task) =>settask(task)}
        ></TextInput>
       </View>
      <Text style={styles.text}>{data}</Text>
      
      <View style={{ marginTop: 10 }}>
        <View >
          <Button title={'Add'}
            onPress={Add}></Button>
        </View>
        <View style={{ margin: 10 }}>
          <Button title={'get'}
            onPress={get}></Button>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  textinput: {
    width: '90%',
    height: 300,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 2
  }
})

