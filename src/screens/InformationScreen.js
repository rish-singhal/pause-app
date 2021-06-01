import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme',
import Unorderedlist from 'react-native-unordered-list';

export default class InformationScreen extends React.Component {
  
   render() { 
       return (
        <View style={styles.container}>
            
            {/*Navigation */}
            <View style={styles.navWrapper}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <Image source={require('../../assets/images/Back.png')} style={styles.backImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipButtonWrapper} onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <Text style={styles.skipButton}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>We Provide</Text>
            </View>

            {/* Description */}
            <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>It's about time to take it slow</Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButtonWrapper} onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <Text style={styles.continueButton}>Next</Text>
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
  navWrapper: {
      flexDirection: 'row',
      marginLeft: 0,
      marginTop: 34,
      justifyContent: 'space-between'
  },
  backImage: {
      height: 100,
      width: 100,
      marginLeft: -30,
      marginRight: 250,
      alignItems: 'center'
  },
  skipButtonWrapper: {
      marginTop: 40,
      marginRight: 0 
  },
  titleWrapper: {
      marginTop: 104,
      alignItems: 'center'
  },
  titleText: {
      fontFamily: 'DMSansBold',
      fontSize: 30
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
