import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme'

export default class WelcomeScreen extends React.Component {
  
   render() { 
       return (
        <View style={styles.container}>
            
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Welcome to</Text>
            </View>
            
            {/* Welcome Image */}
            <View style={styles.welcomeImageWrapper}>
                <Image source={require('../../assets/images/Welcome.png')} style={styles.welcomeImage}/>
            </View>

            {/* Description */}
            <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>It's about time to take it slow</Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButtonWrapper} onPress={() => this.props.navigation.navigate('InformationScreen')}>
                    <Text style={styles.continueButton}>Let's get started !</Text>
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
  },
  titleWrapper: {
      marginTop: 144
  },
  titleText: {
      fontFamily: 'DMSansBold',
      fontSize: 30
  },
  welcomeImageWrapper: {
      marginTop: 33
  },
  welcomeImage: {
      height: 264,
      width: 280
  },
  descriptionWrapper: {
      marginTop: 49,
      width: '50%',
  },
  descriptionText: {
      fontWeight: "500",
      fontSize: 30,
      textAlign: 'center'
  },
  continueButtonWrapper: {
    marginTop: 54,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 110,
    paddingVertical: 18.8,
    borderRadius: 38
  },
  continueButton: {
    fontFamily: 'DMSansRegular',
    color: theme.colors.white,
    fontSize: 14
  }
});
