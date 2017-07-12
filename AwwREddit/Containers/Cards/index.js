import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { RedditThink, ChangeCards, GoToHistory } from './thunk.js';
import { View, Text, Button } from 'react-native';

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

class Cards extends Component {
  compontentWillMount(){
    this.props.getCards('https://www.reddit.com/r/aww.json');
  }
  componentDidUpdate(){
    console.log('Cards -> Update');
    console.log(this.props);
  }
  yes(card){
    card.yes = true;
    card.no = false;
  }
  no(card){
    card.yes = false;
    card.no = true;
  }
  render(){
    return(
      <View style={container}>
        <View style={spacerStyle}>
          <Text>{this.props.username} | </Text>
          <Button onPress={() => this.props.switchView()} title='History' />
        </View>
        <Text style={center}>Cards</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { cards, session } = state;
  return { ...session, ...cards };
}

const mapDispatch = (dispatch) =>({
  switchView: (view) => dispatch(GoToHistory()),
  updateCards: (cards) => dispatch(ChangeCards(cards)),
  getCards: (url) => dispatch(RedditThunk(url)) 
})

export default connect(mapStateToProps, mapDispatch)(Cards);
