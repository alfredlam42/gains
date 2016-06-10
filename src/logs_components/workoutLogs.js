var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;
var realm = require('../class');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handlePress} underlayColor="black">
          <Text>Back</Text>
        </TouchableHighlight>
        <View>
          <Text>This is the workout Logs</Text>
        </View>
      </View>
    )
  },
  handlePress: function() {
    { this.props.navigator.pop(); }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});