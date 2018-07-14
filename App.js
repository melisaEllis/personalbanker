
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Linking
} from 'react-native';

import StackNav from './StackNav';

export default class App extends Component {
  render() {
    return (
      <StackNav />
    );
  }
}

/*
class App extends Component{
  render() {
    return(
      <MyApp />
    );
  }
}
*/
