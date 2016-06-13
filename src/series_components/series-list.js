var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

var realm = require('../class');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Series list</Text>
      <View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});