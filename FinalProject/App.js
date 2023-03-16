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
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import HomeScreen from './screens/HomeScreen';
import TipsScreen from './screens/TipsScreen';
import CalendarScreen from './screens/CalendarScreen';

/*
const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);
s
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
*/

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator style={styles.container}>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="TipsScreen" component={TipsScreen} style={styles.text} options={{
        title:'Skin Care Tips',
        headerStyle: {
          backgroundColor: "#F5CAC3",
        },
        headerTintColor: "white",
      }} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} style={styles.text} options={{
        title:'My Calendar',
        headerStyle: {
          backgroundColor: "#F5CAC3",
        },
        headerTintColor: "white",
      }} />
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

/*
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
*/
