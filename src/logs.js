//this page is a dummy home page. Someone will be the one creating the real Logs page. After someone creates said page, require that file on tabbar.js

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
         This is the logs page
        </Text>
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
  }
});