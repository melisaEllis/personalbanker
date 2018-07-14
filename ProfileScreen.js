import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './Profile1'
import Tab2 from './Profile2'
import Tab3 from './Profile3'
import Tab4 from './Profile4'
import Tab5 from './Profile5'
export default class ProfileScreen extends Component{
  render() {
    return (
        <Container>
        <Header hasTabs />
        <Tabs initialPage={0}>
        <Tab heading="Part 1">
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