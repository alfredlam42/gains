var React = require("react");
var ReactNative = require("react-native");
var Button = require('../common/button');
var {
  View,
  Text,
  StyleSheet
} = ReactNative;
var realm = require('../class');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      password: '',
      series: ''
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Text>
          HOME SCREEN
        </Text>
        <Button text = {'Profile'} onPress = {this.onPress} />
      </View>
    )
  },
  onPress: function(){
    this.props.navigator.push({name: 'profile'});
  },
})

var styles = StyleSheet.create({
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
});