import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import QuizCard from '../components/QuizCard';
export default function Home() {

  return (
 <SafeAreaView>
   
      <View style={styles.entireColumn}>
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.introText} >Hi, Welcome</Text>
            <Text style={styles.introText1} >Great to see you again!</Text>
          </View>
          <View style={styles.emptyBox}></View>
        <Ionicons name="person-circle" size={54} color="black" />        
      
      </View>

<ScrollView style={{height: "100%"}}>
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
      <Text style={styles.sectionHeaders}>
        Real exams
      </Text>

      <TouchableOpacity>
      <View style={styles.realExams}>
        <View style={styles.examRow}>
          <View>
          <Text style={styles.textStyleExam}>Your available exams</Text>
        <Text style={styles.textStyleExaM}>3 exams</Text>
          </View>
          <View style={styles.emptyBox1}>
        
      </View>
         
         <AntDesign name="arrowright" style={styles.arrowIcon} size={24} color="black" />
      
        </View>

      </View>
      </TouchableOpacity>
      <View style={styles.quizCards}>
        <Text style={styles.sectionHeaders}>Quizzes</Text>
        
        <QuizCard numberOfTests={3} subjectName='Math'/>
      <QuizCard numberOfTests={6} subjectName='Reading'/>
        
     
      </View>
      
        </View>
        </ScrollView>
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
  },
  quizCardContainer: {
    backgroundColor: "#F6E6D0",
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20
  },
  testDescription: {
    backgroundColor: "#FFFFFF",
    height: 35,
    width: 35,
    flexDirection:"column",
    alignItems:"center",
    borderRadius: 8,


    
  },
  rowContainer: {
    margin: 20
  },
  textColor: {
    color: "#FF0000",
    fontSize: 12
    
  },
  subjectName : {
    fontSize: 20
  },
  iconContainer: {
    alignContent: 'flex-end'
  },
  quizCards: {
    marginTop: 50
  }, 
  sectionHeaders: {
   color: "#432B07",
   padding: 10,
   fontSize: 15
  }
  
})