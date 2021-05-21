/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

export default class sleepyfollow extends Component {
  render() {
    var _this = this;
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageSleepyFollow}
          source={require('./img/sleepy-follow-logo.png')}>
        </Image>
        <FBLogin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageSleepyFollow: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
    marginBottom: 10,
  },
});

AppRegistry.registerComponent('sleepyfollow', () => sleepyfollow);
