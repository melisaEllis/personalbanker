import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView
} from "react-native";

import {Icon, Button, Container, Header, Content, Left} from 'native-base'

class Services extends Component {
    
    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./pblogo.png')} style={{height:24, width:24}} />
        )
    }

    render() {
        return (           
          <WebView
        source={{uri: 'http://personalbanker.ca/services.html'}}
        style={{marginTop: 20}}
      />
        );
      }

      /*
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Home Screen</Text>
                </Content>
            </Container>
        );
    }*/
}

export default Services;