import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { RedditThunk, ChangeCards, GoToHistory } from './thunk.js';
import { View, Text, Button, Image } from 'react-native';
import styles from '../../Style/';

const { column, container, center, inputStyle, spacerStyle } = styles;

const NoCards = (props) => {
  return(
    <View style={spacerStyle}>
      <Text>No More Cards</Text>
    </View>
  )
}

const Card = ({data}) => {
  console.log('Card -> props');
  const unsafe = /^https?/;
  const gifv = /\.gifv$/;
  const url = data.url.replace(unsafe, 'https').replace(gifv, '.gif');
  console.log(url);
  return(
    <View style={spacerStyle, {flexDirection: 'column'}}>
      <Image
        style={{width: 200, height: 200}} 
        source={{uri: url}}
      />
      <Text style={{textAlign: 'center'}}>Card</Text>
    </View>
  )
}

class Cards extends Component {
  componentWillMount(){
    let url = 'https://www.reddit.com/r/aww.json';
    const limit = 10;
    url = url + '?limit=' + limit;
    this.props.getCards(url);
  }
  componentDidUpdate(){
  }
  yes(card){
    card.yes = true;
    card.no = false;
  }
  no(card){
    card.yes = false;
    card.no = true;
  }
  maybe(card){
    card.maybe = true;
    card.no = false,
    card.yes = false;
  }
  render(){
    return(
      <View style={column}>
        <View style={[spacerStyle,{flex: 3}]}>
          <Text>
            {this.props.username ? this.props.username : 'not_logged_id'} | 
          </Text>
          <Button onPress={() => this.props.switchView()} title='History' />
        </View>
        <View style={[container,{flex: 25}]}>
          <SwipeCards
            cards={this.props.cards}
            renderCard={(card) => <Card {...card} /> }
            renderNoMoreCards = {() => <NoCards /> }
            handleYup={this.yes}
            handleNope={this.no}
            handleMaybe={this.maybe}
          />
        </View>
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
  getCards: (url) => { console.log('getCards -> Url ' + url); dispatch(RedditThunk(url)) } 
})

export default connect(mapStateToProps, mapDispatch)(Cards);
