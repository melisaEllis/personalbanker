import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import {Icon, Button, Container, Header, Content, Left} from 'native-base'
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const one = 'No. We are strictly a consulting firm with a focus on helping our clients build wealth and eliminate debt and achieve the D.R.E.A.M';
const two = 'No. that is not what we do. Most Debt Reduction services affect your credit in a negative way. If you are “successful” in a debt proposal your Credit rating is affected negatively for three years after you make the last payment. You Are left with an R7 rating.';
const three = 'No, we are not credit counseling, we help people who wish to help themselves.';
const four = 'No, it is about low interest paid. Most people who have a “low rate” mortgage do not realize that they are paying 67%- 75% of their monthly payments to interest. Our Program focuses on least amount of interest paid. This enables you to get out of debt efficiently and focus your funds on building personal wealth.';
const five = 'No, it will actually improve your rating.';
const six = 'There are really two types of optimizations in our program. One that is an optimization of time and the other that optimizes your time and provides an increase in current cash flow. The SWIFT solution is a planned optimization of time. It will help you eliminate your debts in the quickest way possible with no allowance for cash flow by using a series of math algorithms to obtain the best payoff priority method. The DREAM solution is a planned optimization strategy that saves you time and provides cash flow immediately. You must fully qualify for this program.';
const seven = 'Funding comes from major banks and trust companies. The funding network is comprised of Broker and Bank networks that provide services nationwide.';
const eight = 'The bank’s main activity is to make loans, and to sell loans. As long as you are a consumer without a plan the bank will not give you a plan, they just give loans. By having a clear, objective plan, you can get out of debt sooner and build wealth. Remember, it’s your money, your time and your future.';
const nine = 'While there is no guarantee that rates won’t rise, the PersonalBanker program enables you to focus on the important aspect of the debt – The Principal – If rates rise and your debts are smaller, then you will only pay interest on what you owe and no more. This enables you to have control of your cash flow.';
const ten = 'A SWIFT program can be set up immediately and a DREAM program can take approximately 21- 60 days to complete the process once all the requirements are met – (Document Checklist).';
const eleven = 'When you really think about it, Debts are Debts no matter if they are long term or short term debts ( The Short term debt really kills your cash flow). We include all of your debts in the analysis so you can see the overall effect of what being in debt really cost you and then provide you with the most effective plan to eliminate it.';
const twelve = 'You will review your SWIFT program with a PersonalBanker representative to get set up. If you have accepted a DREAM program then you will move on to our funding and legal team to accept your new payment schedule and sign off for completion. You have positioned yourself on the road to Debt Freedom and Wealth Building.';

const CONTENT = [
    {
        title: 'Are you a lending company?',
        content: one
    },
    {
        title: 'Are you in the Debt Reduction Business?',
        content: two
    },
    {
        title: 'Is this a form of Credit counseling?',
        content: three
    },
    {
        title: 'But isn\'t about low interest rates?',
        content: four
    },
    {
        title: 'Will this affect my credit in a negative way?',
        content: five
    },
    {
        title: 'Why does it work?',
        content: six
    },
    {
        title: 'Where does the money come from?',
        content: seven
    },
    {
        title: 'Why can\'t the bank do this for me?',
        content: eight
    },
    {
        title: 'What happens if rates go up, will I pay more?',
        content: nine
    },
    {
        title: 'How long is the process?',
        content: ten
    },
    {
        title: 'Why include all forms of debt?',
        content: eleven
    },
    {
        title: 'What happens next?',
        content: twelve
    }

];

const SELECTORS = [
  {
    title: 'First',
    value: 0
  },
  {
    title: 'Third',
    value: 2
  },
  {
    title: 'None',
    value: false
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)'
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  activeSelector: {
    fontWeight: 'bold'
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10
  }
});


class QuestionsScreen extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./pblogo.png')} style={{height:24, width:24}} />
        )
    }

    state = {
        activeSection: false,
        collapsed: true
    };

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };
    
      _setSection(section) {
        this.setState({ activeSection: section });
      }

      _renderHeader(section, i, isActive) {
        return (
          <Animatable.View
            duration={400}
            style={[styles.header, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Text style={styles.headerText}>{section.title}</Text>
          </Animatable.View>
        );
      }
    
      _renderContent(section, i, isActive) {
        return (
          <Animatable.View
            duration={400}
            style={[styles.content, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
              {section.content}
            </Animatable.Text>
          </Animatable.View>
        );
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

                    <View style={styles.container}>
        <Text style={styles.title}>Accordion Example</Text>

        <View style={styles.selectors}>
          <Text style={styles.selectTitle}>Select:</Text>
          {SELECTORS.map(selector => (
            <TouchableOpacity
              key={selector.title}
              onPress={this._setSection.bind(this, selector.value)}
            >
              <View style={styles.selector}>
                <Text
                  style={
                    selector.value === this.state.activeSection &&
                    styles.activeSelector
                  }
                >
                  {selector.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={this._toggleExpanded}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Single Collapsible</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.content}>
            <Text>
              Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
              ribs
            </Text>
          </View>
        </Collapsible>
        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />
      </View>
                </Content>
            </Container>
        );
    }
}

export default QuestionsScreen;