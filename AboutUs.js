import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView
} from "react-native";

import {Icon, Button, Container, Header, Content, Left, Right, Body, Title} from 'native-base'

class AboutUs extends Component {
    
    static navigationOptions = {
        drawerIcon: (
           // <Image source={require('./pblogo.png')} style={{height:24, width:24}} />
           <Icon name="paper" />
        )
    }

    // render() {
    //     return (           
    //       <WebView
    //     source={{uri: 'http://personalbanker.ca/about-us.html'}}
    //     style={{marginTop: 20}}
    //   />
    //     );
    //   }

      

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
                        <Title>About Us</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
                <WebView
                    source={{uri: 'http://personalbanker.ca/about-us.html'}}
                    style={{marginTop: 20}}
                />
            </Container>
        );
    }
}

export default AboutUs;
