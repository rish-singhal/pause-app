import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Keyboard } from 'react-native';
import { theme } from '../core/theme';
import Unorderedlist from 'react-native-unordered-list';

export default class JournalHomeScreen extends React.Component {

    getCurrentDate() {

        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];

        return monthNames[month] + ' ' + date + ', ' + year;
    }

   render() { 
       return (
        <View style={styles.container}>
            
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Journal</Text>
            </View>

            {/*Navigation */}
            <View style={styles.navWrapper}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                    <Image source={require('../../assets/images/Back.png')} style={styles.backImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calendarButtonWrapper} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                    <Image source={require('../../assets/images/Calendar.png')} style={styles.calendarImage}/>
                </TouchableOpacity>
            </View>
            
            {/* Main Image */}
            <View style={styles.mainImageWrapper}>
                <Image source={require('../../assets/images/JournalHome.png')} style={styles.mainImage}/>
            </View>

            {/* Date Today*/}
            <View style={styles.dateWrapper}>
                <Text style={styles.dateText}>{this.getCurrentDate()}</Text>
            </View>


            {/* Description */}
            <View style={styles.descriptionWrapper}>
                <Text style={styles.descriptionText}>What are you greatful for today?</Text>
            </View>

            {/* Down Swirly Image */}
            <View style={styles.downImageWrapper}>
                <Image source={require('../../assets/images/DownSwirly.png')} style={styles.downImage}/>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButtonWrapper} onPress={() => this.props.navigation.navigate('JournalWriteScreen')}>
                    <Text style={styles.continueButton}>Start writing</Text>
            </TouchableOpacity>

            {/* Home Button */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Image source={require('../../assets/images/HomeButton.png')} style={styles.homeImage}/>
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
      marginTop: -30,
      justifyContent: 'space-between'
  },
  backImage: {
      height: 100,
      width: 100,
      marginLeft: -30,
      marginRight: 250,
      alignItems: 'center'
  },
  calendarImage: {
      marginTop: -15,
      alignItems: 'center',
      height: 29,
      width: 26.81
  },
  calendarButtonWrapper: {
      marginTop: 40,
      marginRight: 0 
  },
  titleWrapper: {
      marginTop: 40,
      alignItems: 'center'
  },
  titleText: {
      fontFamily: 'DMSansBold',
      fontSize: 25
  },
  dateWrapper: {
      marginTop: 30
  },
  dateText: {
    fontFamily: 'DMSansRegular',
    fontSize: 16
  },
  mainImageWrapper: {
      marginTop: -20,
  },
  mainImage:{
      height: 258.11,
      width: 258.11
  },
  descriptionWrapper: {
      marginTop: 15,
      width: '65%',
      
  },
  descriptionText: {
      fontFamily: 'DMSansBold',
      fontWeight: "500",
      fontSize: 25,
      color: theme.colors.text,
      textAlign: 'center',
  },
  continueButtonWrapper: {
    marginTop: 25,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 127,
    paddingVertical: 16,
    borderRadius: 38
  },
  continueButton: {
    fontFamily: 'DMSansRegular',
    color: theme.colors.white,
    fontSize: 14
  },
  downImageWrapper: {
    marginTop: 5,
  },
  downImage: {
      height: 85,
      width: 24
  },
  homeImage: {
    height: 120,
    width: 120,
    marginTop: 12
  }
});
