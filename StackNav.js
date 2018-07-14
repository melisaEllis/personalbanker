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
import { StackNavigator } from 'react-navigation';
import Screen from "./app/components/Screen";
import Swiper from "./app/components/Swiper";
import DrawerNav from "./DrawerNav";

class Home extends Component<{}> {
    static navigationOptions = {
      headerStyle: {
        backgroundColor: "#16a085",
        elevation: null
      },
      header: null
    };
    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#16a085" />
          <Screen navigation={this.props.navigation} />
        </View>
      );
    }
  }

const StackNav = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    Screen: {
      screen: Screen,
      navigationOptions: {
        title: "Screen"
      }
    },
    Swiper: {
      screen: Swiper,
      navigationOptions: {
        title: "Swiper"
      }
    },
    HomeScreen: {
      screen: DrawerNav,
      navigationOptions: {
        title: "",
        elevation: null,
        header: null
      }
    }
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    }
  });

export default StackNav;