import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

var GridView = require('rn-grid-view');


var GridViewSample = React.createClass({

  getInitialState: function() {
    return {
             books : {
                      "Finished Reading": [
                                           {
                                            id: 1,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 2,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 3,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 4,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                              {
                                            id: 5,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 6,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 7,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                           {
                                            id: 8,
                                            image: "http://i.imgur.com/4KfXDqX.png"
                                           },
                                          ],
                     }
           }
  },


  _renderBook: function(item) {
    return (
            <View style={styles.gridViewItem} key={item.id}>
              <Image
                style={styles.thumb}
                source={{uri: item.image}} />
            </View>
           )
  },


  _renderHeader: function(data, id) {
    return (<View style={styles.header}>
              <Text style={styles.headerText}>{id}</Text>
            </View>);
  },


  render: function() {

    // All available props
    return (
            <GridView
              itemsPerRow={4}
              renderFooter={null}
              onEndReached={null}
              scrollEnabled={true}
              renderSeparator={null}
              style={{marginTop: 10}}
              items={this.state.books}
              fillIncompleteRow={false}
              renderItem={this._renderBook}
              renderSectionHeader={this._renderHeader}
              automaticallyAdjustContentInsets={false} />
           )
  },

});


var styles = StyleSheet.create({
  gridViewItem:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ff0000',
  },
  thumb: {
    width: 60,
    height: 70,
    resizeMode: 'cover',
    margin: 1,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop:10,
  },
  header: {
    backgroundColor: '#1CC839',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
    marginBottom: 5,
    marginTop: 5,
    color: "white",
  },
});

module.exports = GridViewSample;