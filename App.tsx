import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from './screens/LandingScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ClubsScreen from './screens/ClubsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventsScreen from './screens/EventScreen';
import DepartmentsScreen from './screens/DepartmentScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Departments" component={DepartmentsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Clubs" component={ClubsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
