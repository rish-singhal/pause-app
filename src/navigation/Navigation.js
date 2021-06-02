import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {
    HomeScreen,
    LoadingScreen,
    LoginScreen,
    WelcomeScreen,
    RegisterScreen,
    InformationScreen,
    DashboardScreen,
    JournalHomeScreen,
    JournalWriteScreen
  } from '../screens'
const Stack = createStackNavigator();

export default function Navigation(props) {
  return <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen 
            options={{
                headerShown: false
            }}
            name="LoadingScreen" component={LoadingScreen} />
          
          {/* Home Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="HomeScreen" component={HomeScreen} />
          
          {/* Login Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="LoginScreen" component={LoginScreen} />

          {/* Welcom Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="WelcomeScreen" component={WelcomeScreen} />
        
          {/* Register Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="RegisterScreen" component={RegisterScreen} />
        
          {/* Information Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="InformationScreen" component={InformationScreen} />
          
          {/* Dashboard Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="DashboardScreen" component={DashboardScreen} />

          {/*Journal Home Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="JournalHomeScreen" component={JournalHomeScreen} />

          {/*Journal Write Screen */}
          <Stack.Screen 
            options={{
              headerShown: false
            }}
            name="JournalWriteScreen" component={JournalWriteScreen} />

    </Stack.Navigator>;
}
