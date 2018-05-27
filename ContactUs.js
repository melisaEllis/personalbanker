import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    WebView
  } from 'react-native';

import {Icon, Button, Container, Header, Content, Left, Card, CardItem, Body, Form, Item, Input, Label} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

  
class Contact extends Component{

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./pblogo.png')} style={{height:24, width:24}} />
        )
    }

    render() {
      return (           
        <WebView
      source={{uri: 'http://personalbanker.ca/contact-us.html'}}
      style={{marginTop: 20}}
    />
      );
    }
/*
    render(){
        return(
            <Container>
            <View>
                <Text style={styles.welcome}>
                        Contact Us
                </Text>
                <Text style={styles.instructions}>
                            Come Visit Us
                </Text>
                <Text style={styles.paragraph}>
                      We’re here to help get you debt free sooner!
                      Fill out the contact form and one of our professional
                      staff members will get back to you shortly.
                      If you live in the area, come
                      visit our service center.
                </Text>
                </View>
                <Content padder>
                <Grid>
            <Col >
            <Card>
            <CardItem bordered>
              <Text>Headquarters</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                3100 STEELES AVENUE WEST, CONCORD,ON, L4K 3R1
                Telephone +1 647-558-0558
                Fax +1 647-946-6634
                E-mail info@personalbanker.ca
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text></Text>
            </CardItem>
         </Card></Col>
            <Col>
            <Card>
            <CardItem bordered>
              <Text>Support Center</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                500 NORFINCH DR, NORTH YORK, ON M3N 1Y4,
                Toronto, Canada.
                </Text>
                <Text>
                Telephone +1647-558-0558
                </Text>
                <Text>
                Fax +1 647-946-6634
                </Text>
                <Text>
                E-mail info@personalbanker.ca
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text></Text>
            </CardItem>
         </Card>
            </Col>          
         </Grid>
          <Text style={styles.instructions}>
            Get in Touch with Personal Banker
          </Text>
          <Form>
                <Item stackedLabel>
                <Label>Name</Label>
                <Input />

                </Item>

                <Item stackedLabel last>
                <Label>Email</Label>
                <Input />

                </Item>

                <Item stackedLabel last>
                <Label>Message</Label>
                <Input />
                </Item>
          </Form>
          <Grid>
              <Col>
                    <Button large success style={{width:150}}>
                    <Text style={{marginLeft:50}}>Send</Text>
                    </Button>
              </Col>
              <Col>
                    <Button large bordered dark style={{width:150}}>
                    <Text style={{marginLeft:50}}>Reset</Text>
                    </Button>
              </Col>
          </Grid>
          </Content>
      </Container>
            
        );
    }*/
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
    },
    instructions: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 5,
      margin: 13,
    },
    input:{
        width: 3,
    },
    paragraph: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    }
  });

export default Contact;