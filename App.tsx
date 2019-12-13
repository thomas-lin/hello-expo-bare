import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNToast from 'react-native-rn-toast';
import * as ExpoToast from 'expo-toast';

export default class App extends React.Component{
  async componentDidMount(){
    RNToast.show("Hello RN");
    await ExpoToast.toastAsync({message:'Hello Expo'});
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
