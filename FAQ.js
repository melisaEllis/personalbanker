import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Linking
} from "react-native";

import { Button, Icon, Right, Left, Body, Title, Container, Header  } from "native-base";

class FAQ extends Component {

    static navigationOptions = {
        drawerIcon: (
            //<Image source={require('./pblogo.png')} style={{height:24, width:24}} />
            <Icon name="text" />
        )
    }

    // render() {
    //   return (           
    //     <WebView
    //   source={{uri: 'http://personalbanker.ca/faq.html'}}
    //   style={{marginTop: 20}}
    // />
    //   );
    // }
    render() {
      return (
          <Container>
              <Header>
                  <Left>
                      <Button transparent>
                      <Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
                      </Button>
                  </Left>
                  <Body>
                      <Title>FAQ</Title>
                  </Body>
                  <Right>
                      <Button transparent>
                      </Button>
                  </Right>
              </Header>
              <WebView
                  source={{uri: 'http://personalbanker.ca/faq.html'}}
                  style={{marginTop: 20}}
              />
          </Container>
      );
  }
}

export default FAQ;