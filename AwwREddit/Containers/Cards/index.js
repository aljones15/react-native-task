import React, { Component } from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { RedditThunk, ChangeCards, GoToHistory } from './thunk.js';
import { View, ActivityIndicator } from 'react-native';
import styles from '../../Style/';
import { NoCards, Card } from '../../Components/Card/';
import { SocialIcon, Button, Text, Icon } from 'react-native-elements'
const { 
  column, container, center, 
  viewCenter, inputStyle, spacerStyle 
} = styles;

class Cards extends Component {
  componentWillMount(){
    let url = 'https://www.reddit.com/r/aww.json';
    const limit = 10;
    url = url + '?limit=' + limit;
    this.props.getCards(url);
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){
    console.log('Cards -> Will Unmount -> update cards');
    this.props.updateCards(this.props.cards);
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
    if(this.props.loading){
      return(
        <View style={column}>
          <View style={[spacerStyle, {flex: 5}]} />
          <ActivityIndicator style={spacerStyle} />
          <Text h4 style={{flex: 3, textAlign: 'center'}}>
            Fetching Cute Pics
          </Text>
        </View>
      )
    }
    return(
      <View style={column}>
        <View 
          style={[viewCenter, {flexDirection: 'row', marginTop: 15}]}>
          <SocialIcon
            iconSize={35}
            type='reddit'
            backgroundColor='#1F1F1F'
          />
          <Text> 
            r/aww
          </Text>
          <Icon 
            name='person'
            type='fontawesome'
          />
          <Text> 
            { this.props.username ?
              this.props.username : ' not_logged_id'}   
          </Text>
          <Button
            small 
            onPress={() => this.props.switchView()} 
            title='History' />
        </View>
        <View style={[container,{flex: 25}]}>
          <SwipeCards
            cards={this.props.cards}
            renderCard={(card) => <Card {...card} /> }
            renderNoMoreCards = {() => <NoCards /> }
            handleYup={this.yes}
            handleNope={this.no}
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
  getCards: (url) => dispatch(RedditThunk(url)) 
})

export default connect(mapStateToProps, mapDispatch)(Cards);
