var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

var Button = require('../common/button');
var realm = require('../class');
var profile = require('../profile');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});