import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, Button, ListView, ActivityIndicator } from 'react-native';
import styles from '../../Style/';
import GoCards from './thunk.js';

const { container, column, center, inputStyle, spacerStyle } = styles;

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class History extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: ds.cloneWithRows(this.props.cards)
    }
  }
  render(){
    return(
      <View style={container}>
        <View style={[spacerStyle, {flex: 3}]}>
          <Text>
            {this.props.username ? this.props.username : 'not_logged_in'} | 
          </Text>
          <Button onPress={() => this.props.goToCards()} title='Cards' />
        </View>
        <View style={[spacerStyle, column, {flex:25}]}>
        <Text>History</Text>
        <ListView
          dataSource={this.state.cards}
          renderRow={(card) => <Text style={{flex: 1}}>card {card.yes} {card.data.url}</Text>}
          style={{marginTop: 5}}
        />
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
