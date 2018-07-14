import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView
} from "react-native";

import {Icon, Button, Container, Header, Content, Left, Title, Body, Right} from 'native-base'

class HomeScreen extends Component {
    
    static navigationOptions = {
        drawerIcon: (
            //<Image source={require('./pblogo.png')} style={{height:24, width:24}} />
            <Icon name="home"/>
        )
    }

   /* render() {
        return (           
          <WebView
        source={{uri: 'http://personalbanker.ca/'}}
        style={{marginTop: 20}}
      />
        );
      }*/

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
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
                {/* <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Home Screen</Text>
                </Content> */}
                <WebView
                    source={{uri: 'http://personalbanker.ca/'}}
                    style={{marginTop: 20}}
                />
            </Container>
        );
    }
}

export default HomeScreen;
