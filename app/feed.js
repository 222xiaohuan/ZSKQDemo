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
import moment from 'moment';
import queryString from 'query-string';
import * as Animatable from 'react-native-animatable';
import Button from 'react-native-button';
// var DeviceInfo = require('react-native-device-info');
import DeviceInfo from 'react-native-device-info';

var I18n = require('react-native-i18n');
const USER_MODELS = {
  1: {name: 'mot', age: 23},
  2: {name: 'hchchc', age:25}
}

I18n.fallbacks = true;
I18n.translations = {
  en:{
    greeting: 'Hi!'
  },
  fr:{
    greeting:'Bonjour!'
  }
}


export default class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      fontSize: 9,
      id: null,
    };
  }

  componentWillMount(){
    DeviceEventEmitter.addListener("SEND_EMITTER_TEST",(eventBody)=>{
      console.log(eventBody['arg1']+"--------");
      
      this.setState({
        id:this.props.id
      });
    });

    console.log("-------------------------device info start---------------------------"); 

    console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9  '1f737c940d33aaa5'
    // * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled

    console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple  'nubia'

    console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6  'NX512J'

    console.log("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish 'msm8916'

    console.log("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS 'Android'

    console.log("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0 '5.1.1'

    console.log("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile 'com.awesomeproject'

    console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89 1

    console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0  '1.0'

    console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89  '1.0.1'

    console.log("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6  'NX512J'

    console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)   'Dalvik/2.1.0 (Linux; U; Android 5.1.1; NX512J Build/LMY47V)'

    console.log("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US

    console.log("Device Country", DeviceInfo.getDeviceCountry()); // e.g US

     console.log("-------------------------device info end---------------------------"); 

  }

  _pressButton(){
    const {navigator} = this.props;

    if(this.props.getUser){
      let u = USER_MODELS[this.props.id];
      this.props.getUser(u);
    }

    if(navigator){
      navigator.pop();
    }
  }

  componentDidMount(){
    const now = moment();
    console.log("now----",now);
    console.log("a.format()" + moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("parse----" + queryString.stringify({color: ['taupe', 'chartreuse'], id: '515'}));

    Storage.load({
        key: 'user',
        id: '1001'
    }).then(ret => {
        // found data goes to then()
        console.log("name===="+ret.name);
    }).catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn(err);
    });

  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this._pressButton.bind(this)}>
          feed page!
        </Text>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">上下跳5秒</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount="infinite"  direction="alternate">无限上下跳</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>

        <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
          <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() =>
            this.refs.view.bounce(800).
            then((endState) =>
            console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'))
        }>
         <Animatable.View ref="view">
           <Text>Bounce me!</Text>
         </Animatable.View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={() => this.refs.text.transitionTo({opacity: 0.2})}>
        <Animatable.Text ref="text" style={styles.text}>Fade me!</Animatable.Text>
      </TouchableWithoutFeedback>

        <Button
           style={{fontSize: 20, color: 'green'}}
           styleDisabled={{color: 'red'}}
           onPress={this._handlePress} >
           Press Me!
         </Button>

         <Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                  style={{fontSize: 20, color: 'green'}} >
           Press me!
         </Button>

         <Text>{I18n.t('greeting')}</Text>

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
  }
});
