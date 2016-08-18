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

export default class Left extends Component {
  render() {
    const charmander = 'http://vignette3.wikia.nocookie.net/pokemon/images/1/16/025Pikachu_OS_anime_10.png/revision/20150102074354';
    return (
      <TouchableOpacity onPress={this.props.onPress}>

      <View style={{ flexDirection: 'row',flex:1,alignItems:'center',}}>
        <Image
          source={{ uri: charmander }}
          style={[{ width: 20, height: 20, }, this.props.style]}/>
          <Text style={{ paddingTop: 3, color: '#FFAA00', }}>left</Text>
      </View>
      </TouchableOpacity>
    );
  }
}
