import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Picker,
    CheckBox
  } from 'react-native';
  import CollapseView from "react-native-collapse-view";
  import { Container, Header, Left, Icon, Body, Right, Title, Content, Form, Item, Input, Label } from 'native-base';


class Profile2 extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      realEstateYes: false,
      realEstateNo: false,
      vehicleYes: false,
      vehicleNo: false,
      debtLoansYes: false,
      debtLoansNo: false,
      savingsInvestmentsYes: false,
      savingsInvestmentsNo: false,
    }
  }

  realEstateValue()
  {
    if(this.state.realEstateYes == false){
      this.setState({realEstateYes: true, realEstateNo: false , realEstateValue: 'Yes'})
    }
    else{
      this.setState({realEstateYes: false, realEstateNo: true, realEstateValue: 'No'})
    }

    if(this.state.realEstateNo == false){
      this.setState({realEstateYes: false, realEstateNo: true, realEstateValue: 'No'})
    }
    else{
      this.setState({realEstateYes: true, realEstateNo: false, realEstateValue: 'Yes'})
    }
  }

  vehicleValue()
  {
    if(this.state.vehicleYes == false){
      this.setState({vehicleYes: true, vehicleNo: false , vehicleValue: 'Yes'})
    }
    else{
      this.setState({vehicleYes: false, vehicleNo: true, vehicleValue: 'No'})
    }

    if(this.state.vehicleNo == false){
      this.setState({vehicleYes: false, vehicleNo: true, vehicleValue: 'No'})
    }
    else{
      this.setState({vehicleYes: true, vehicleNo: false, vehicleValue: 'Yes'})
    }
  }

  debtLoansValue()
  {
    if(this.state.debtLoansYes == false){
      this.setState({debtLoansYes: true, debtLoansNo: false , debtLoansValue: 'Yes'})
    }
    else{
      this.setState({debtLoansYes: false, debtLoansNo: true, debtLoansValue: 'No'})
    }

    if(this.state.debtLoansNo == false){
      this.setState({debtLoansYes: false, debtLoansNo: true, debtLoansValue: 'No'})
    }
    else{
      this.setState({debtLoansYes: true, debtLoansNo: false, debtLoansValue: 'Yes'})
    }
  }

  savingsInvestmentsValue()
  {
    if(this.state.savingsInvestmentsYes == false){
      this.setState({savingsInvestmentsYes: true, savingsInvestmentsNo: false , savingsInvestmentsValue: 'Yes'})
    }
    else{
      this.setState({savingsInvestmentsYes: false, savingsInvestmentsNo: true, savingsInvestmentsValue: 'No'})
    }

    if(this.state.savingsInvestmentsNo == false){
      this.setState({savingsInvestmentsYes: false, savingsInvestmentsNo: true, savingsInvestmentsValue: 'No'})
    }
    else{
      this.setState({savingsInvestmentsYes: true, savingsInvestmentsNo: false, savingsInvestmentsValue: 'Yes'})
    }
  }

  _realEstate = (collapse) => {
    return(
      <View style={styles.view}>
        <Item last>
          <Text>Real Estate</Text>
          <CheckBox onValueChange={() => this.realEstateValue()}  value={this.state.realEstateYes}/>
          <Text>Yes</Text>
          <CheckBox onValueChange={() => this.realEstateValue()} value={this.state.realEstateNo}/>
          <Text>No</Text> 
        </Item>
      </View>
    )
  }

  _vehicle = (collapse) => {
    return(
      <View style={styles.view}>
        <Item last>
          <Text>Vehicles</Text>
          <CheckBox onValueChange={() => this.vehicleValue()}  value={this.state.vehicleYes}/>
          <Text>Yes</Text>
          <CheckBox onValueChange={() => this.vehicleValue()} value={this.state.vehicleNo}/>
          <Text>No</Text> 
        </Item>
      </View>
    )
  }

  _debtLoans = (collapse) => {
    return(
      <View style={styles.view}>
        <Item last>
          <Text>Debt/Loans</Text>
          <CheckBox onValueChange={() => this.debtLoansValue()}  value={this.state.debtLoansYes}/>
          <Text>Yes</Text>
          <CheckBox onValueChange={() => this.debtLoansValue()} value={this.state.debtLoansNo}/>
          <Text>No</Text> 
        </Item>
      </View>
    )
  }

  _savingsInvestments = (collapse) => {
    return(
      <View style={styles.view}>
        <Item last>
        <Text>Savings/Investments</Text>
          <CheckBox onValueChange={() => this.savingsInvestmentsValue()}  value={this.state.savingsInvestmentsYes}/>
          <Text>Yes</Text>
          <CheckBox onValueChange={() => this.savingsInvestmentsValue()} value={this.state.savingsInvestmentsNo}/>
          <Text>No</Text> 
        </Item>
      </View>
    )
  }

  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    )
  }

  render() {
    return (
    <View style={styles.container}>
      <CollapseView 
        renderView={this._realEstate}
        renderCollapseView={this._renderCollapseView}
      />
      <CollapseView 
        renderView={this._vehicle}
        renderCollapseView={this._renderCollapseView}
      />
      <CollapseView 
        renderView={this._debtLoans}
        renderCollapseView={this._renderCollapseView}
      />
      <CollapseView 
        renderView={this._savingsInvestments}
        renderCollapseView={this._renderCollapseView}
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
  },
  view: {
    height:50,
    padding: 20,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  collapseView: {
    padding: 20
  }
});

export default Profile2;