import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import Submit from './thunk.js';
import styles from '../../Style/';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'UserName',
      password: 'Password',
      error: ''
    };
  }
  componentDidMount(){ 
  }
  handleChange(section, text){
      this.state[section] = text;
      this.state.error = '';
      this.setState(Object.assign({}, this.state));
  }
  login(){
    if(this.state.password === 'password'){
      this.props.login(this.state);
    } else {
      this.state.error = "Incorrect Password";
      this.setState(this.state);
    }
  }
  render(){
    return(
      <View style={styles.column}>
        <View style={[styles.spacerStyle, {flex: 3}]} />
        <Text style={[styles.center]}>
          Login
        </Text>
        <TextInput 
          onChangeText={(text) => this.handleChange('username', text)}
          clearTextOnFocus={true} 
          style={[styles.center,styles.inputStyle]} 
          value={this.state.username} 
        />
        <TextInput
          onChangeText={(text) => this.handleChange('password', text)} 
          clearTextOnFocus={true}
          secureTextEntry={true} 
          style={[styles.center, styles.inputStyle]} 
          value={this.state.password}
        />
        <Button
          onPress={() => this.login() }
          style={styles.center}
           title='Submit'
         />
        <View style={styles.spacerStyle}>
          <Text style={{color: 'red'}}>{this.state.error}</Text>
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
