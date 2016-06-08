var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet
} = ReactNative;
var realm = require('./class');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Text>
         This is the workouts page
        </Text>
      </View>
    )
  },
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});