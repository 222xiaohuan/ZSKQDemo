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
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import Chart from 'react-native-chart';

const data = [
    [0, 1],
    [0, 2],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default class RNChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          react native chart page
        </Text>
          <Chart
            style={styles.chart}
            data={data}
            verticalGridStep={5}
            type="bar"
          />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text:{
    marginTop:10,
    fontSize:20,
  },
  chart: {
      width: 200,
      height: 200,
  },
});
