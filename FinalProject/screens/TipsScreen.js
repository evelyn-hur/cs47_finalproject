import React from "react"
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import WebView from "react-native-webview"

export default function TipsScreen() {

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'whitesmoke',
      padding: 10,
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      borderRadius: 10,
      marginBottom: 8,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  