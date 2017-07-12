import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import Submit from './thunk.js';

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
    console.log('Login -> Props');
    console.log(this.props);
    console.log('Login -> state');
    console.log(this.state);
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
      <View style={container}>
        <View style={[spacerStyle, {flex: 3}]} />
        <Text style={[center]}>
          Login
        </Text>
        <TextInput 
          onChangeText={(text) => this.handleChange('username', text)}
          clearTextOnFocus={true} 
          style={[center,inputStyle]} 
          value={this.state.username} 
        />
        <TextInput
          onChangeText={(text) => this.handleChange('password', text)} 
          clearTextOnFocus={true} 
          style={[center,inputStyle]} 
          value={this.state.password}
        />
        <Button
          onPress={() => this.login() }
          style={center}
           title='Submit'
         />
        <View style={spacerStyle}>
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
