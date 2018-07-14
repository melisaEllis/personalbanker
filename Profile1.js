import React, { Component } from 'react';
import { Container, Header, Left, Icon, Body, Right, Title, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { Platform, Picker, CheckBox, TextInput, Text} from 'react-native';

export default class Profile1 extends Component {
  static navigationOptions = {
    drawerIcon: (
        <Icon name="phone-landscape" />
    )
  }
  constructor(props) {
    super(props);
    this.state = { 
      retiredYes: false,
      retiredNo: false,
      genderMale: false,  
      genderFemale: false,
      nameText: '',
      addressText: '',
      cityText: '',
      provinceText: '',
      postalCodeText: '',
      retiredValue: '',
      genderValue: '',
      maritalStatus: 'None'
    }
  }
  retiredValue()
  {
    if(this.state.retiredYes == false){
      this.setState({retiredYes: true, retiredNo: false , retiredValue: 'Yes'})
    }
    else{
      this.setState({retiredYes: false, retiredNo: true, retiredValue: 'No'})
    }

    if(this.state.retiredNo == false){
      this.setState({retiredYes: false, retiredNo: true, retiredValue: 'No'})
    }
    else{
      this.setState({retiredYes: true, retiredNo: false, retiredValue: 'Yes'})
    }

  }
  genderValue(){
    if(this.state.genderMale == false){
      this.setState({genderMale: true, genderFemale: false, genderValue: 'Male'})
    }
    else{
      this.setState({genderMale: false, genderFemale: true, genderValue: 'Female'})
    }

    if(this.state.genderFemale == false){
      this.setState({genderMale: false, genderFemale: true, genderValue: 'Female'})
    }
    else{
      this.setState({genderMale: true, genderFemale: false , genderValue: 'Male' })
    }
    
  }
  render() {
    return (
      <Container>
      <Content>
        <Form>
          <Item stackedLabel last>
              <Label>Name</Label>
              <Input onChangeText={(nameText) => this.setState({nameText})} value={this.state.nameText} />
          </Item>
          <Item stackedLabel last>
              <Label>Address</Label>
              <Input onChangeText={(addressText) => this.setState({addressText})} value={this.state.addressText} />
          </Item>
          <Item stackedLabel last>
              <Label>City</Label>
              <Input onChangeText={(cityText) => this.setState({cityText})} value={this.state.cityText} />
          </Item>
          <Item stackedLabel last>
              <Label>Province</Label>
              <Input onChangeText={(provinceText) => this.setState({provinceText})} value={this.state.provinceText} />
          </Item>
          <Item stackedLabel last>
              <Label>Postal Code</Label>
              <Input onChangeText={(postalCodeText) => this.setState({postalCodeText})} value={this.state.postalCodeText} />
          </Item>

          <Item last>
            <Text>Retired</Text>
            <CheckBox onValueChange={() => this.retiredValue()}  value={this.state.retiredYes}/>
            <Text>Yes</Text>
            <CheckBox onValueChange={() => this.retiredValue()} value={this.state.retiredNo}/>
            <Text>No</Text>       
          </Item>
          <Item last>
            <Text>Gender</Text>
            <CheckBox onValueChange={() => this.genderValue()}  value={this.state.genderMale}/>
            <Text>Male</Text>
            <CheckBox onValueChange={() => this.genderValue()} value={this.state.genderFemale}/>
            <Text>Female</Text> 
          </Item>
          <Item picker last>
          <Text>Marital status:</Text>
          <Picker selectedValue={this.state.maritalStatus} style={{ height: 50, width: '70%' }} onValueChange={(itemValue, itemIndex) => this.setState({maritalStatus: itemValue})}>
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Common-Law" value="common-law" />
            <Picker.Item label="Widowed" value="widowed" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Divorced" value="divorced" />
          </Picker>
          </Item>
          <Button title='Next' onPress={() => alert(this.state.nameText + " " + this.state.addressText + " " + this.state.cityText + " " + this.state.provinceText + " " + this.state.postalCodeText + " " + this.state.maritalStatus + " " + this.state.retiredValue + " " + this.state.genderValue )} />
      </Form>
    </Content>
   </Container>
    );
  }
}