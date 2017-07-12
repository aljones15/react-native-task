import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/';
import History from '../History/';
import Cards from '../../Containers/Cards/';
import { View, Text } from 'react-native';
import { SECTIONS } from '../../redux/actions.js';

const Section = (props) => <View><Text>Switcher</Text></View>

class Switcher extends Component {
  componentDidMount(){
    console.log('Switcher -> Props');
    console.log(this.props);
  }
  render(){
    const {section} = this.props;
    switch(section){
      case SECTIONS.LOGIN:
        return <Login />
      case SECTIONS.CARDS:
        return <Cards />
      case SECTIONS.HISTORY:
        return <History />
      default:
        return <Login />
    }
  }
}

const mapStateToProps = (state, props) => {
  const { display, session } = state;
  return { ...session, ...display };
}

const mapDispatch = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatch)(Switcher);
