import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
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
                <TouchableOpacity style={styles.skipButtonWrapper} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                    <Text style={styles.skipButton}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>We Provide</Text>
            </View>

            {/* Description */}
            <View style={styles.descriptionWrapper}>
                <Unorderedlist style={styles.descriptionText}>
                    <Text style={styles.descriptionText}>App blockage</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.descriptionText}>
                    <Text style={styles.descriptionText}>Meditation space</Text>
                </Unorderedlist>
                <Unorderedlist style={styles.descriptionText}>
                    <Text style={styles.descriptionText}>Personal journal writing space</Text>
                </Unorderedlist>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButtonWrapper} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
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
      marginTop: 60,
      width: '65%',
  },
  descriptionText: {
      fontFamily: 'DMSansRegular',
      fontWeight: "500",
      fontSize: 20,
      textAlign: 'left',
      color: theme.colors.text
  },
  continueButtonWrapper: {
    marginTop: 70,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 127,
    paddingVertical: 16,
    borderRadius: 38
  },
  continueButton: {
    fontFamily: 'DMSansRegular',
    color: theme.colors.white,
    fontSize: 14
  }
});
