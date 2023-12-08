import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

type QuizCardProps = {
    numberOfTests: number,
    subjectName: string
}
const QuizCard = (props: QuizCardProps) => {
 return (
  <TouchableOpacity>
    <View style={styles.quizCardContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.testDescription}>
            <Text style={styles.textColor}>{props.numberOfTests}</Text>
            <Text style={styles.textColor}>tests</Text>
          </View>
      
        </View>
        <Text style={styles.subjectName}>{props.subjectName}</Text>
       
        <View style={styles.iconContainer}> 
          <AntDesign name="arrowright" style={styles.arrowIcon} size={24} color="black" />
        </View>
      </View>
  </TouchableOpacity>
    
 );
};

const styles = StyleSheet.create({
 container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
 },
 question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 answer: {
    fontSize: 18,
    color: 'grey',
 },
 quizCardContainer: {
    backgroundColor: "#F6E6D0",
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10
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
  arrowIcon: {
    marginTop: 'auto',
    marginEnd: 'auto'
  },
  emptyBox: {
    width: 180,
  },


});

export default QuizCard;