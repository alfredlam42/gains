var React = require('react');
var ReactNative = require('react-native');
var Home = require('./home');
var Log = require('./logs');
var Workouts = require('./workouts');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TabBarIOS
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <Text>This is the Tabbar page</Text>
    </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})