import React, { Component } from 'react';

import {
  PanResponder,
  StyleSheet,
  View,
} from 'react-native';

const CIRCLE_SIZE = 80;
this.panResponder = {};
this.previousLeft = 0;
this.previousTop = 0;
this.circleStyles = {};

export default class PanResponderExample extends Component {

  statics: {
    title: 'PanResponder Sample',
    description: 'Shows the use of PanResponder to provide basic gesture handling.',
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
    });
    this.previousLeft = 20;
    this.previousTop = 84;
    this.circleStyles = {
      style: {
        left: this.previousLeft,
        top: this.previousTop,
        backgroundColor: 'green',
      },
    };
  }

  componentDidMount() {
    this.updateNativeStyles();
  }

  highlight() {
    this.circleStyles.style.backgroundColor = 'blue';
    this.updateNativeStyles();
  }

  unHighlight() {
    this.circleStyles.style.backgroundColor = 'green';
    this.updateNativeStyles();
  }

  updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this.circleStyles);
  }

  handleStartShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  handleMoveShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  handlePanResponderGrant(e, gestureState) {
    this.highlight();
  }

  handlePanResponderMove(e, gestureState) {
    this.circleStyles.style.left = this.previousLeft + gestureState.dx;
    this.circleStyles.style.top = this.previousTop + gestureState.dy;
    this.updateNativeStyles();
  }

  handlePanResponderEnd(e, gestureState) {
    this.unHighlight();
    this.previousLeft += gestureState.dx;
    this.previousTop += gestureState.dy;
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this.panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});
