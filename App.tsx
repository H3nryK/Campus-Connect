import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LandingScreen from './screens/LandingScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ClubsScreen from './screens/ClubsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventsScreen from './screens/EventScreen';
import DepartmentsScreen from './screens/DepartmentScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Events') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Events" component={EventsScreen} />
  </Tab.Navigator>
);

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Main" component={MainTabs} />
    <Drawer.Screen name="Departments" component={DepartmentsScreen} />
    <Drawer.Screen name="Resources" component={ResourcesScreen} />
    <Drawer.Screen name="Clubs" component={ClubsScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="MainApp"
          component={MainDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
