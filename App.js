import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from "react-native";

import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import HomeScreen from './HomeScreen'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'
import BLOG from './BLOG'
import SettingsScreen from './SettingsScreen'
import FAQ from './FAQ'

import {Container, Content, Header, Body, Icon} from 'native-base'

import { YellowBox } from 'react-native'
import QuestionsScreen from './test';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

class App extends Component{
  render() {
    return(
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height: 150, backgroundColor: '#330066'}}>
      <Body>
        <Image source={require('./pblogo.png')}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyApp = createDrawerNavigator({

  Home: {
    screen: HomeScreen
  },
  AboutUs: {
    screen: AboutUs
  },
  Services:{
   screen: Services
  },
  ContactUs: {
    screen: ContactUs
  },
  BLOG: {
    screen: BLOG
  },
  Settings: {
    screen: SettingsScreen
  },
  FAQ: {
    screen: FAQ
  }
},{
  initialRouteName:'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerImage:{
  
  }
})