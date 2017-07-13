import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, Button} from 'react-native';
import styles from '../../Style/';
import GoCards from './thunk.js';

const { container, center, inputStyle, spacerStyle } = styles;

class History extends Component {
  render(){
    return(
      <View style={container}>
        <View style={[spacerStyle, {flex: 3}]}>
          <Text>
            {this.props.username ? this.props.username : 'not_logged_in'} | 
          </Text>
          <Button onPress={() => this.props.goToCards()} title='Cards' />
        </View>
        <View style={[spacerStyle, {flex:25}]}>
        <Text style={center}>History</Text>
        </View>
      </View>
   )
  }
}

const mapStateToProps = (state, props) => {
  const { cards, session } = state;
  return { ...session, ...cards };
};

const mapDispatch = (dispatch) => ({
  goToCards: () => dispatch(GoCards)
});

export default connect(mapStateToProps, mapDispatch)(History);
