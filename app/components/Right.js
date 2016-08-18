import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Bulbazavr extends Component {

  onPressScan(){
    alert("go to scan");
  }

  render() {
    const bulbazavr = 'http://vignette3.wikia.nocookie.net/pokemon/images/1/16/025Pikachu_OS_anime_10.png/revision/20150102074354';
    return (    

      <View style={{ flexDirection: 'row',flex:1,alignItems:'center',}}>
        <TouchableOpacity style={{ flexDirection: 'row',flex:1,alignItems:'center',}} onPress={this.props.onPress}>
          <Text style={{ paddingTop: 3, color: '#FFAA00', }}>right</Text>
          <Image
            source={{ uri: bulbazavr }}
            style={[{ width: 20, height: 20, }, this.props.style]}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row',flex:1,alignItems:'center',}} onPress={this.onPressScan.bind(this)}>
          <Text style={{ paddingTop: 3, color: '#FFAA00', }}>right</Text>
          <Image
            source={{ uri: bulbazavr }}
            style={[{ width: 20, height: 20, }, this.props.style]}/>
        </TouchableOpacity>
      </View>

    );
  }
}
