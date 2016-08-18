/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class NavBar extends Component {


  onPressFeed(){
    this.props.navigator.push({name: 'welcome'});
  }

  render() {

    const rightButtonConfig = {
       title: 'Next',
      //  handler: () => alert('hello!'),
        handler:() => {
          this.props.navigator.push({name: 'welcome'});
        }
     };

     const titleConfig = {
       title: 'Hello, world',
     };

     const leftButtonConfig = {
        title: 'previous',
        handler: () => alert('hhh!'),
      };

    return (
      <View style={{flex:1}}>

      <NavigationBar
       title={titleConfig}
       rightButton={rightButtonConfig}
       leftButton={leftButtonConfig} />
         <View style={styles.container}>
          <Text style={styles.welcome} onPress={this.onPressFeed.bind(this)}>
            NavBar page!

            </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
