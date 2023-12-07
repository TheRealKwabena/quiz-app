import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
export default function App() {

  return (
 <SafeAreaView>

        <View style={styles.entireColumn}>
        <View style={styles.topContainer}>
      <View>
        <Text style={styles.introText} >Hi, Welcome</Text>
        <Text style={styles.introText1} >Great to see you again!</Text>
      </View>
      <View style={styles.emptyBox}>
      </View>
        
        <AntDesign name="arrowright" size={24} color="black" />
        
       
        
        
     
      </View>


      <View style={styles.joinBlock}>
        <Text style={styles.wordInBlock}>You want to join for quizz?</Text>
        <View style={styles.joinToQuizz}>
        <Button
        title="Press me"
        onPress={() => Alert.prompt('Write code')}
        color="black"
      />
      </View>


      <View style={styles.emptyHBox}></View>
      <Text>
        Real exams
      </Text>

      <View style={styles.realExams}>
        <View style={styles.examRow}>
          <View>
          <Text style={styles.textStyleExam}>Your available exams</Text>
        <Text style={styles.textStyleExaM}>3 exams</Text>
          </View>
          <View style={styles.emptyBox1}>
        
      </View>
         
         <TouchableOpacity style={styles.arrowIcon} ><AntDesign name="arrowright" size={24} color="black" /></TouchableOpacity>
      
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
    marginTo: 20,
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
    width: 150,
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
  joinBlock: {
    backgroundColor: "#DF8E52",
    width: 338,
    height: 100,
    marginLeft: 'auto',
    marginRight: "auto",
    borderRadius: 20,
    marginTop: 50,
  },
  wordInBlock: {
    marginLeft: 'auto',
    marginRight: "auto",
    fontSize: 20,
    color: "white",
    marginTop: 10,
  },
  joinToQuizz: {
    backgroundColor: "white",
    width: '40%',
    marginLeft: 'auto',
    marginRight: "auto",
    borderRadius: 20,
    marginTop: 10,
  },
  textStyleExaM: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  arrowIcon: {
    marginTop: 'auto',
    marginEnd: 'auto'
  }
})