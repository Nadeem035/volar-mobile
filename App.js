import React from 'react';
import { TouchableOpacity,Image, SafeAreaView} from "react-native";
import { Avatar, Appbar, View } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/home/Home';
import About from './screens/about/About';
import Contact from './screens/contact/Contact';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={{
            justifyContent: 'center',
            height: 50, 
            backgroundColor: "#fff"
          }}>
          <TouchableOpacity>
            <Image
              style={{ backgroundColor: "#fff", width: 120, height: 40 }}
              source={require('./assets/images/logo.png')}            
              />
          </TouchableOpacity>
        </Appbar.Header>
      </SafeAreaView>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="information" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarLabel: 'Contact',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="contacts" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}