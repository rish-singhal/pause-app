import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme'

export default class HomeScreen extends React.Component {
  
   render() { 
       return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Image source={require('../../assets/images/Logo.png')} style={styles.logo}/>
            </TouchableOpacity>
        </View>
        );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 193.96,
    height: 193.96
  }
});
