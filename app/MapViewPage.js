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

import MapView from 'react-native-baidumap';
import KKLocation from 'react-native-baidumap/KKLocation';

export default class MapViewPage extends Component {

  componentDidMount() {
      //this.refs["mapView"].zoomToLocs([[39.918541, 116.4835]]);
      KKLocation.getCurrentPosition((position) => {
          console.log("location get current position: ", position);
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          console.log(lat, long);
          this.refs["mapView"].zoomToLocs([[lat, long]]);
      }, (error) => {
          console.log("location get current position error: ", error);
      });
      this.watchID = KKLocation.watchPosition((position) => {
          console.log("watch position: ", position);
      });
  }

  render() {

    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <MapView
          style={{flex: 1, width: 300}}
          ref="mapView"
          showsUserLocation={true}
          userLocationViewParams={{accuracyCircleFillColor: 'red', image: require('./img/start_icon.png')}}
          annotations={[{latitude: 39.832136, longitude: 116.34095, title: "start", subtile: "hello", image: require('./img/amap_start.png')}, {latitude: 39.902136, longitude: 116.44095, title: "end", subtile: "hello", image: require('./img/amap_end.png')}]}
          overlays={[{coordinates: [{latitude: 39.832136, longitude: 116.34095}, {latitude: 39.832136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.44095}], strokeColor: '#ff0000', lineWidth: 3}]}
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
});
