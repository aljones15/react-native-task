import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, Button} from 'react-native';
import styles from '../../Style/';

const { container, center, inputStyle, spacerStyle } = styles;

class History extends Component {
  render(){
    return(
      <View style={container}>
        <View style={spacerStyle}>
          <Text>{this.props.username} | </Text>
          <Button onPress={() => console.log('switch')} title='Cards' />
        </View>
        <Text style={center}>History</Text>
      </View>
   )
  }
}

const mapStateToProps = (state, props) => {
  const { cards, session } = state;
  return { ...session, ...cards };
};

const mapDispatch = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatch)(History);
