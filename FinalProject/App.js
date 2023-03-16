//import React from 'react';
import {StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, 
  IconRegistry, 
  BottomNavigation, 
  BottomNavigationTab, 
  Layout, 
   } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { default as theme } from './custom-theme.json';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const { Navigator, Screen } = createBottomTabNavigator();


=======
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
>>>>>>> 0eccbeb3 (Abbie 3/15 homescreen_edit)

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style = {styles.container}>
      <Image style= {styles.image} source = {require("/Users/abbiemaemoto/Documents/GitHub/cs47_finalproject/FinalProject/assets/derma.jpeg")}/>
      
      <StatusBar style = "auto" />
      <View style = {styles.inputView}>
        <TextInput
          style= {styles.TextInput}
          placeholder="Email."
          placeholderTextColor="$003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

    <View style={styles.inputView}>
      <TextInput 
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor = "#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    </View>
  </Layout>
);

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS'/>
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Users' component={UsersScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

const AppNavigator = () => {
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
<<<<<<< HEAD
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <Text>HOME</Text>
=======
    <ApplicationProvider {...eva} theme={eva.light}>
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
>>>>>>> 0eccbeb3 (Abbie 3/15 homescreen_edit)
      <HomeScreen />
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image :{
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginButton: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});