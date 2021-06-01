import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import * as Font from 'expo-font';

export default class LoadingScreen extends React.Component {
  
   async componentDidMount() {
    await Font.loadAsync({
        DMSansRegular: require('../../assets/fonts/DMSans-Regular.ttf'),
        DMSansMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
        DMSansBold: require('../../assets/fonts/DMSans-Bold.ttf')
    })

    this.props.navigation.navigate("HomeScreen")
  };

  render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
