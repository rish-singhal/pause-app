import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme'

export default class DashboardScreen extends React.Component {
  
   render() { 
       return (
        <View style={styles.container}>        
            
            <View style={styles.upperContainerWrapper}>
                <View style={styles.leftUpperContainerWrapper}>
                    <Text style={styles.nameText}>Hello Rishabh!</Text>
                    <Text style={styles.welcomeBackText}>Good to have you back here!</Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/Dashboard.png')} style={styles.rightUpperContainerWrapper}/>
                </View>
            </View>
            
            <View style={styles.lowerContainerWrapper}>
                {/* Daily Prompt */}
                <View style={styles.welcomeTextWrapper}>
                        <Text style={styles.welcomeText}>Congrats! You have lowered your stress</Text>
                </View>
                
                {/* Pauss App Usage */}
                <TouchableOpacity style={styles.pauseUsageTextWrapper}>
                        <Text style={styles.pauseUsageText}>Pause App Usage</Text>
                </TouchableOpacity>
                
                <View style={styles.lowerGridWrapper}>
                    {/* Meditation */}
                    <TouchableOpacity style={styles.meditationTextWrapper}>
                            <Text style={styles.meditationUsageText}>Meditate</Text>
                    </TouchableOpacity>

                    {/* Journal */}
                    <TouchableOpacity style={styles.journalUsageTextWrapper}>
                            <Text style={styles.journalUsageText}>Journal</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Image source={require('../../assets/images/HomeButton.png')} style={styles.homeImage}/>
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
  },
  upperContainerWrapper: {
      height: 318,
      backgroundColor: '#FFFFFF',
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  leftUpperContainerWrapper: {
    marginTop: 141,
    width: '40%'
  },
  nameText: {
      fontFamily: 'DMSansBold',
      fontSize: 30,
      textAlign: 'right',
      color: theme.colors.text
  },
  welcomeBackText: {
    fontFamily: 'DMSansRegular',
    fontSize: 16,
    textAlign: 'right',
    color: '#070417'
  },
  rightUpperContainerWrapper: {
      width: 150,
      height: 250,
      marginTop: 60
    },
  welcomeTextWrapper: {
    flexDirection: 'row',
    marginTop: 59,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 38
  },
  welcomeText: {
    fontFamily: 'DMSansRegular',
    fontSize: 10,
    fontWeight: "500",
    color: theme.colors.white,
    letterSpacing: 0.05
  },
  lowerContainerWrapper: {
    alignItems: 'center',
  },
  pauseUsageTextWrapper: {
      marginTop: 37,
      backgroundColor: '#F19D89',
      borderRadius: 7,
      paddingVertical: 43,
      paddingHorizontal: 72,
  },
  pauseUsageText: {
    fontFamily: 'DMSansRegular',
    fontSize: 18,
    fontWeight: "500",
    color: theme.colors.white,
    letterSpacing: 0.05
  },
  lowerGridWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 27
  },
  meditationTextWrapper: {
      height: 133.94,
      width: 132,
      backgroundColor: '#6DA6F8',
      marginRight: 27,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center'
  },
  meditationUsageText: {
    fontFamily: 'DMSansRegular',
    fontSize: 18,
    fontWeight: "500",
    color: theme.colors.white,
    letterSpacing: 0.05
  },
  journalUsageTextWrapper: {
    height: 133.94,
    width: 132,
    backgroundColor: '#0A0B31',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  journalUsageText: {
    fontFamily: 'DMSansRegular',
    fontSize: 18,
    fontWeight: "500",
    color: theme.colors.white,
    letterSpacing: 0.05
  },
  homeImage: {
    height: 120,
    width: 120,
    marginTop: 30
  }
});
