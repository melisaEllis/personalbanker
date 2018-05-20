import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import {Icon, Button, Container, Header, Content, Left} from 'native-base'

class SettingsScreen extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name="home"/>
        )
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                         <Icon name="ios-menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')} style={{color: 'white'}}/>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        );
    }
}

export default SettingsScreen;