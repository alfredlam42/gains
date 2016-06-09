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
          <Text>Your current workout plan</Text>
        </View>
        <View style={styles.previous}>
          <Text>Your previous workout plan</Text>
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
    backgroundColor: '#F5FCFF',
  },
  current: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    alignSelf: 'stretch',
    marginTop: 20
  },
  previous: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});