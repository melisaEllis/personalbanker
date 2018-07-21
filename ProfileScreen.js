import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Body, Button, Title, Segment } from 'native-base';
import Tab1 from './Profile1'
import Tab2 from './Profile2'
import Tab3 from './Profile3'
import Tab4 from './Profile4'
import Tab5 from './Profile5'
export default class ProfileScreen extends Component{
  render() {
    return (
        <Container>
        <Header hasSegment hasTabs style={{backgroundColor: '#3A1F64', borderBottomColor: 'white', borderBottomWidth : 1}}>
          <Left>
            <Button transparent>
              <Icon name="ios-menu"  onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Image
                  style={{width: 25, height: 23 , borderRadius: 15, marginRight: 20}}
                  source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
              <Text style={{color: 'white'}}>
                  {"Username"}
              </Text>
          </View>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-calendar' />
            </Button>
            <Button transparent>
              <Icon name='ios-notifications' />
            </Button>
            <Button transparent>
              <Icon name='ios-mail-open' />
            </Button>
          </Right>
        </Header>
        <Tabs initialPage={0} style={{backgroundColor: '#3A1F64'}}>
        <Tab heading="Profile">
            <Tab1 />
          </Tab>
          <Tab heading="Part 2">
            <Tab2 />
          </Tab>
          <Tab heading="Part 3">
            <Tab3 />
          </Tab>
          <Tab heading="Part 4">
            <Tab4 />
          </Tab>
          <Tab heading="Part 5">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}