import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from '../../home';
import ProfileContainer from '../../profiles';
import SettingContainer from '../../settings';
import LoginContainer from '../../login';
import WelcomeContainer from '../../welcome';
import RegisterContainer from '../../register';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabNav = () => (
    <Tab.Navigator initialRouteName="home" tabBarOptions={{ activeTintColor: '#e91e63' }}>
        <Tab.Screen
            name="home"
            component={HomeContainer}
            options={{
                tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
        <Tab.Screen
            name="profile"
            component={ProfileContainer}
            options={{
                tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
    </Tab.Navigator>
)

const AppComponent = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="tab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tab" component={TabNav} options={{ title: 'Home' }} />
            <Stack.Screen name="setting" component={SettingContainer} options={{ title: 'Setting' }} />
            <Stack.Screen name="login" component={LoginContainer} options={{ title: 'Login' }} />
            <Stack.Screen name="welcome" component={WelcomeContainer} options={{ title: 'Welcome' }} />
            <Stack.Screen name="register" component={RegisterContainer} options={{ title: 'Register' }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppComponent;