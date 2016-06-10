//this page is a dummy home page. Alfred will be the one creating the real workouts page. After Alfred creates said page, require that file on tabbar.js

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