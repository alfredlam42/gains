var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet
} = ReactNative;
var realm = require('../class');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.current}>
          <Text>This is the workout Logs</Text>
        </View>
      </View>
    )
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});