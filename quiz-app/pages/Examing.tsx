import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Examing() {
    return (
        <SafeAreaView>
            <Text style={styles.mainWord}>Math Quiz</Text>
            <ScrollView style={{ height: "100%", }}>
                <View style={{flex: 1,padding: 10, flexDirection: "column", backgroundColor: "blue"}}>
                {/* block 1 */} 
                    <View style={styles.progressBlock}>
                        <View style={styles.progressBlockChildren}>
                        </View>
                    </View>
                    {/* block 2 */}
                <Text style={styles.questionNumber}>12/20</Text>
                {/* block 3 */}
                <View style={styles.questionBlock}>
                </View>  
                </View>
          </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    progressBlock: {
        backgroundColor: "#DF8E52",
        height: 17,
        borderRadius: 10,
        flex: 1
    },
    mainWord: {
        fontSize: 25,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10
    },
    questionNumber: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        flex: 1
    },
    progressBlockChildren: {
        backgroundColor: "#509870",
        width: "20%",
        height: 16,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    questionBlock: {
        backgroundColor: "red",
        // marginLeft: "auto",
        // marginRight: "auto",
        width: 100,
        height: 100,

    }
})