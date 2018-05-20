import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Linking
} from "react-native";
import { Button, Icon } from "native-base";

class AboutUS extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Icon name="paper" style={{color: 'black'}}/>
        )
    }

    render() {
        const uri = 'http://personalbanker.ca/about-us.html';
        return (           
          <WebView
            ref={(ref) => { this.webview = ref; }}
            source={{ uri }}
            onNavigationStateChange={(event) => {
              if (event.url !== uri) {
                this.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          />
        );
      }
}

export default AboutUS;