import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewCenter: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  center: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row'
  },
  inputStyle: {
    flexGrow: 3,
    flexShrink: 1,
    borderColor: 'rgba(200,200,200,0.7)', 
    borderWidth: 1,
    padding: 1,
    margin: 2
  },
  spacerStyle: {
    flex: 10,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});

export default styles
