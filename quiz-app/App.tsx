import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.entireColumn}>
        <View style={styles.topContainer}>
      <View>
        <Text style={styles.introText} >Hi, Welcome</Text>
        
        <Text style={styles.introText1} >Great to see you again!</Text>
      </View>
      <View style={styles.emptyBox}>
        
      </View>
        
        <Ionicons name="person-circle" size ={50}  ></Ionicons>
        
       
        
        
     
      </View>

      <View style={styles.emptyHBox}>

      </View>
      
      <Text>
        Real exams
      </Text>

      <View style={styles.realExams}>
        <View style={styles.examRow}>
          <View>
          <Text style={styles.textStyleExam}>Your available exams</Text>
        <Text style={styles.textStyleExam2}>3 exams</Text>
          </View>
          <View style={styles.emptyBox1}>
        
      </View>
         
         <TouchableOpacity ><Ionicons name="md-arrow-forward" size={32}></Ionicons></TouchableOpacity>
          
          
       
        </View>
        

      </View>
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
  
    flexDirection:'row',
    alignContent: "space-between",
    width: '100%',
    height: 60
  },
  entireColumn: {
    marginTop: 20,
    flexDirection:"column",
    marginLeft: 25,
    marginRight: 25,
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
  emptyHBox: {
    width: '100%',
    height: 50,

  },
  emptyBox1: {
    width: 100
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "#FF0000",
    alignContent: "center"
  },
  realExams: {
    height: 100,
    backgroundColor: "#509870",
    borderRadius: 20,
    marginTop: 10
  
  }, 
  examRow: {
    flexDirection: "row",
    padding: 20,
    alignContent: 'space-between'

  },
  textStyleExam: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: '800'

  },
  textStyleExam2: {
    fontSize: 14,
    color: "#FFFFFF"
  }
});
