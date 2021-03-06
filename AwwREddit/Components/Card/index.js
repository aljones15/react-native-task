import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import styles from '../../Style/';
import Image from 'react-native-image-progress';

const { column, container, center, inputStyle, spacerStyle } = styles;

export const NoCards = (props) => {
  return(
    <View style={spacerStyle}>
      <Text>No More Cards</Text>
    </View>
  )
}

export class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      loading: false
    };
  }
  componentDidMount(){
    console.log('Card -> props');
    console.log(this.props);
  }
  render(){
   const {data} = this.props;
   const unsafe = /^https?/;
   const gifv = /\.gifv$/;
   const url = data.url.replace(unsafe, 'https').replace(gifv, '.gif');
   return(
    <View style={spacerStyle, 
      {
        flexDirection: 'column',
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 5,
        margin: 3,
        alignItems: 'center'
      }
    }>
      <Image
        style={{width: 300, height: 300}} 
        source={{uri: url}}
        indicator={ActivityIndicator}         
      />
      <View style={
        {
          flexDirection: 'column',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#555555',
          padding: 5,
          marginTop: 5
        }
      }>
        <Text 
          style={{alignSelf: 'center', textAlign: 'center'}}>
          {data.title}
        </Text>
      </View>
    </View>
   )
  }
}
