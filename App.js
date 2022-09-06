import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity,Image, SafeAreaView,Text, View} from "react-native";
import { Avatar, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/home/Home';
import About from './screens/about/About';
import Contact from './screens/contact/Contact';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Tab = createMaterialBottomTabNavigator();



  SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <SafeAreaView 
       onLayout={onLayoutRootView}>
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