import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme'

export default class RegisterScreen extends React.Component {
  
   render() { 
       return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoWrapper}>
                <Image source={require('../../assets/images/Logo.png')} style={styles.logo}/>
            </View>
            
            {/* Login Title */}
            <View style={styles.loginTextWrapper}>
                <Text style={styles.loginText}>Sign Up to Pause</Text>
            </View>
            
            {/* Login TextFields */}
            <View style={styles.loginFormWrapper}>
                <TextInput style={styles.loginFields} placeholder="Username" returnKeyType="next"></TextInput>
                <TextInput style={styles.loginFields} placeholder="Email" returnKeyType="next"></TextInput>
                <TextInput style={styles.loginFields} placeholder="Password" returnKeyType="done" secureTextEntry></TextInput>
                <TextInput style={styles.loginFields} placeholder="Confirm Password" returnKeyType="done" secureTextEntry></TextInput>
            </View>
            
            {/* Login Button */}
            <TouchableOpacity style={styles.loginButtonWrapper} onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <Text style={styles.loginButton}>SIGN UP</Text>
            </TouchableOpacity>
        
            {/* Sign Up */}
            <View style={styles.signUpWrapper}>
                    <Text style={styles.signUpText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.signUpLink}>Sign In</Text>
                    </TouchableOpacity>
            </View>
        </View>
        );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  logoWrapper:{
      marginTop: 70,
  },
  logo: {
    width: 101.52,
    height: 101.52
  },
  loginTextWrapper: {
      marginTop: 97.89
  },
  loginText: {
      fontSize: 23,
      fontFamily: 'DMSansBold'
  },
  loginFormWrapper: {
    marginTop: 30.33
  },
  loginFields: {
      height: 48.34,
      width: 287,
      fontSize: 16,
      marginBottom: 13.66,
      backgroundColor: theme.colors.white,
      borderRadius: 5,
      paddingLeft: 15,
      fontFamily: 'HelveticaNeue'
  },
  loginButtonWrapper: {
      marginTop: 30.33,
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 119,
      paddingVertical: 18.8,
      borderRadius: 38
  },
  loginButton: {
      fontFamily: 'DMSansRegular',
      color: theme.colors.white,
      fontSize: 14,
  },
  signUpWrapper: {
    flexDirection: 'row',
    marginTop: 78.66
  },
  signUpText: {
    fontFamily: 'DMSansRegular',
    fontSize: 12,
    color: theme.colors.grey
  },
  signUpLink: {
    fontFamily: 'DMSansRegular',
    fontSize: 12,
    color: theme.colors.text
  }
});
