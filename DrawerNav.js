import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Linking
  } from 'react-native';
  import {Container, Content, Header, Body, Icon} from 'native-base'


import HomeScreen from './HomeScreen'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'
import BLOG from './BLOG'
import SettingsScreen from './SettingsScreen'
import FAQ from './FAQ'
import ProfileScreen from './ProfileScreen'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

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

const DrawerNav = createDrawerNavigator({

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
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName:'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  })

  export default DrawerNav;

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawerImage:{
    
    }
  })