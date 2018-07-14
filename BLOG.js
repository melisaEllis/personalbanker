import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView
} from "react-native";

import {Icon, Button, Container, Header, Content, Left, Right, Body, Title} from 'native-base'

class BLOG extends Component {
    
    static navigationOptions = {
        drawerIcon: (
            //<Image source={require('./pblogo.png')} style={{height:24, width:24}} />
            <Icon name="people" />
        )
    }

    // render() {
    //     return (           
    //       <WebView
    //     source={{uri: 'http://personalbanker.ca/blog-masonry.html'}}
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
                        <Title>Blog</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
                <WebView
                    source={{uri: 'http://personalbanker.ca/blog-masonry.html'}}
                    style={{marginTop: 20}}
                />
            </Container>
        );
    }
}

export default BLOG;