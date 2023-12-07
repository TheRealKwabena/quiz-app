import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.topContainer}>
      <View>
        <Text style={styles.introText} >Hi, Welcome</Text>
        
        <Text style={styles.introText1} >Great to see you again!</Text>
      </View>
      <View style={styles.emptyBox}>
        
      </View>
        
          <Ionicons name="person-circle" size ={50}  ></Ionicons>
        
       
        
        
     
      </View>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF5EF",
    flexDirection:"column",
    height: '100%',
    
  },
  topContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    flexDirection:'row',
    alignContent: "space-between",
    width: '100%',
    height: 60
  },
  introText: {
    fontSize: 25

  },
  introText1: {
    marginTop: 10,
    fontSize: 15

  },
  userButton: {
    color: "#FF0000"
  },
  emptyBox: {
    width: 150
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#FF0000",
    alignContent: "center"
  }
});
