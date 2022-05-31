import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from './src/constants/theme';
import Login from './src/screens/Login';
import Appointment from './src/screens/Appointment';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import {icons} from './src/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Onboarding from "./src/screens/Onboarding";

const App = () => {
  const Stack = createNativeStackNavigator();

  const BottomTabs = () => {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        detachInactiveScreens
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          lazy: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            paddingHorizontal: 15,
            right: 0,
            height:
              Platform.OS === 'android' ? SIZES.font5 * 2.8 : SIZES.font5 * 3.2,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={icons.homeIcon}
                  resizeMode={'contain'}
                  style={{
                    width: SIZES.font1 - 10,
                    height: SIZES.font1 - 10,
                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                  }}
                />

                <Text
                  style={{
                    ...FONTS.body10,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={icons.searchIcon}
                  resizeMode={'contain'}
                  style={{
                    width: SIZES.font1 - 10,
                    height: SIZES.font1 - 10,
                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body10,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Search
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name={'Appointment'}
          component={Appointment}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={icons.appointment}
                  resizeMode={'contain'}
                  style={{
                    width: SIZES.font1 - 10,
                    height: SIZES.font1 - 10,
                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body10,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Appointment
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={icons.profileIcon}
                  resizeMode={'contain'}
                  style={{
                    width: SIZES.font1 - 10,
                    height: SIZES.font1 - 10,
                    tintColor: focused ? COLORS.primary : COLORS.secondary,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body10,
                    color: focused ? COLORS.primary : COLORS.secondary,
                  }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.root}>
    //   <Text style={styles.text}>REster</Text>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: COLORS.black,
  },
});
