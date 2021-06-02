import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';


export default class JournalWriteScreen extends React.Component {
   render() { 
       return (
        <View style={styles.container}>
            
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>Journal</Text>
            </View>

            {/*Navigation */}
            <View style={styles.navWrapper}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('JournalHomeScreen')}>
                    <Image source={require('../../assets/images/Back.png')} style={styles.backImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calendarButtonWrapper} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                    <Image source={require('../../assets/images/Calendar.png')} style={styles.calendarImage}/>
                </TouchableOpacity>
            </View>
            
            {/* Lower Container */}
            <View style={styles.lowerContainerWrapper}>
                {/* Description */}
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionText}>What are you greatful for today?</Text>
                </View>

                <TextInput
                    style={styles.TextInputStyleClass}
                    placeholder={"Put down your thoughts and reflections..."}
                    placeholderTextColor={"#9E9E9E"}
                    numberOfLines={10}
                    multiline={true}
                />
                
                {/* Continue Button */}
                <TouchableOpacity style={styles.continueButtonWrapper} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                        <Text style={styles.continueButton}>Save</Text>
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
      width: '100%',
      marginTop: 25,
  },
  descriptionText: {
      fontFamily: 'DMSansBold',
      fontWeight: "500",
      fontSize: 20,
      color: theme.colors.text,
      textAlign: 'center',
  },
  continueButtonWrapper: {
    marginTop: 38,
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
  lowerContainerWrapper: {
    marginTop: 15,
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    alignItems: 'center'
  },    
  homeImage: {
    height: 120,
    width: 120,
    marginTop: 12
  },
  TextInputStyleClass: {
      marginTop: 30,
      backgroundColor: '#ECF1F4',
      height: 378,
      width: 283,
      borderRadius: 8,
      paddingTop: 13,
      paddingHorizontal: 16,
  }
});
