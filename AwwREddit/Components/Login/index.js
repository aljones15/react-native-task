import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View  } from 'react-native';
import Submit from './thunk.js';
import styles from '../../Style/';
import { Text, FormLabel, FormInput, 
  FormValidationMessage, Button } from 'react-native-elements';
import {loginBgColor, formBorder} from './style.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: 'Password',
      error: {username: [], password: []}
    };
  }
  componentDidMount(){ 
  }
  handleChange(section, text){
      this.state[section] = text;
      this.state.error[section] = [];
      this.setState(Object.assign({}, this.state));
  }
  login(){
    if(this.state.password === 'password'){
      this.props.login(this.state);
    } else {
      // this is just so I can support more errors in the future
      this.state.error.password = ["Incorrect Password"];
    }
    if(!this.state.username){
      this.state.error.username = ["Username Required"];
    }
    this.setState(this.state);
  }
  render(){
    return(
      <View style={[styles.column,{backgroundColor: loginBgColor}]}>
        <View style={[styles.spacerStyle, {flex: 3}]} />
        <Text h4 style={[styles.center]}>
          Login
        </Text>
        <View style={[{flex: 20}]}>
        <View style={[{flex: 2},formBorder]}>
        <FormLabel>User Name</FormLabel>
        <FormInput
          clearTextOnFocus={true} 
          onChangeText={(text) => this.handleChange('username', text)}
         />
         { this.state.error.username.map((e, index) => {
           return(
             <FormValidationMessage key={'error_username_' + index}>
                 {e}
             </FormValidationMessage>);
         })}
       <View style={{flex: 1}} />
       <FormLabel>Password</FormLabel>
       <FormInput
          onChangeText={(text) => this.handleChange('password', text)} 
          clearTextOnFocus={true}
          secureTextEntry={true} 
          value={this.state.password}
        />
         { this.state.error.password.map((e, index) => {
           return(
             <View key={'pass_view_' + index} style={{flex: 1}}>
             <FormValidationMessage 
               key={'error_password_' + index} >
                    {e}
            </FormValidationMessage>
            </View>
            );
         })}
        <View style={{flex: 1}} />
        <View style={{flex: 1}} />
        </View>
        <View style={{flex: 3}}>
        <Button
          onPress={() => this.login() }
          style={{marginTop: 20}}
          backgroundColor='#008F0F'
          title='Submit'
         />
        </View>
        </View>
     </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { session } = state;
  return { ...session };
};

const mapDispatch = (dispatch) => ({
  login: (payload) => dispatch(Submit(payload))
});

export default connect(mapStateToProps, mapDispatch)(Login);
