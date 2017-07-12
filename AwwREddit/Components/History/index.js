import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, Button} from 'react-native';

const container = {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
};

const center = {
  flex: 3,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'row'
};

const inputStyle = {
  flex: 5, 
  borderColor: 'gray', 
  borderWidth: 1
};

const spacerStyle = {
  flex: 10,
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
};

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
