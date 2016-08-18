import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Camera from 'react-native-camera-android';

export default class BarcoderReader extends Component {


_takePicture() {
    this.refs.cam.takePicture();
  }

  _barcodeReceived(event) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }

  _onPictureTaken(event) {
    if(event.type !== 'error') {
      console.log("file://" + event.message)
    }
  }

  render() {
    return(
      <Camera
        ref="cam" // the reference of your camera view
        type={"back"} // the type of your camera
        autoFocus={true}
        torchMode={"off"} // flashlight settings of your camera
        viewFinderDisplay={true} // set it to true if you want to scan barcodes
        onBarCodeRead={this._barcodeReceived}
        onPictureTaken={this._onPictureTaken}
        style={{ flex: 1 }}
      />
    );
  }
}


