import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {BarChart} from 'react-native-mp-android-chart';

class StackedBarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      description: {
        text: ''
      },
      legend: {
        enabled: true,
        textSize: 14,
        form: "SQUARE",
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        wordWrapEnabled: true,
        position: 'ABOVE_CHART_RIGHT'
      },
      xAxis: {
        position: 'BOTTOM',
        drawGridLines: false,
      },
      yAxis: {
        left: {
          spaceBottom: 0,
        },
        right: {
         enabled: false,
        },
      },
      data: {
        datasets: [{
          yValues: [[2, 8, 1], [3, 4, 2], [1, 0, 10], [0, 4, 6], [3, 4, 0], [0, 0, 0], [4, 4, 4]],
          label: '',
          config: {
            barSpacePercent: 40,
            colors: ['#C0FF8C', '#FFF78C', '#FFD08C'],
            stackLabels: ['正常上班', '加班', '请假']
          }
        }],
        xValues: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          data={this.state.data}
          legend={this.state.legend}
          drawValueAboveBar={false}
          xAxis={this.state.xAxis}
          yAxis={this.state.yAxis}
          description={this.state.description}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    height: 250,  
  }
});

AppRegistry.registerComponent('StackedBarChartScreen', () => StackedBarChartScreen);

export default StackedBarChartScreen;
