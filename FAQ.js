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

class FAQ extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./pblogo.png')} style={{height:24, width:24}} />
        )
    }

    render() {
      return (           
        <WebView
      source={{uri: 'http://personalbanker.ca/faq.html'}}
      style={{marginTop: 20}}
    />
      );
    }
    /*
    render() {
        const uri = 'http://personalbanker.ca/faq.html';
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
      }*/
}

export default FAQ;