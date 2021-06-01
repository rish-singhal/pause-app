import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {
    HomeScreen,
    LoadingScreen
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
    </Stack.Navigator>;
}
