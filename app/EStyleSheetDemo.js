import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

// component.js
import EStyleSheet from 'react-native-extended-stylesheet';

// app entry
import theme from './style/theme';
EStyleSheet.build(theme);


// // calc styles
// let {height,width} = Dimensions.get('window');
// EStyleSheet.build({
//   rem: width > 340 ? 18 : 16
// });

const styles = EStyleSheet.create({
  $columnWidth: '80%',
  column: {
    width: '$columnWidth',
    flexDirection: 'row'
  },
  subColumnLeft: {
    width: '0.3 * $columnWidth'
  },
  subColumnRight: {
    width: '0.7 * $columnWidth'
  },
  text: {
    color: '$textColor',
    fontSize: '1.5rem'
  },
  btn:{
    color: '$button.color',
    fontSize: '$button.size',
  },
  header:{
    fontSize:18,
    '@media ios':{
      color:'green',
    },
    '@media android':{
      color:'blue',
    },
  }
});

export default class EStyleSheetDemo extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.column}>
          <Text style={styles.text}>Hello</Text>
          <Text style={styles.btn}>Button</Text>
          <Text style={styles.header}>I should be blue</Text>
        </View>
        <View style={styles.column}>
            <View style={styles.subColumnLeft}><Text>fasd</Text></View>
            <View style={styles.subColumnRight}><Text>fasd</Text></View>
          </View>
      </View>
    );
  }
}
