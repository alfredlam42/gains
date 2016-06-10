//this page is a dummy home page. Bison will be the one creating the real home page. After bison creates said page, require that file on tabbar.js

var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  Navigator,
} = ReactNative;
var Button = require('./common/button');
var realm = require('./class');

module.exports = React.createClass({
  render: function(){
    var currentUser = realm.objects('User')[0]
    return (
      <View style={styles.container}>
        <Text>
          hey {currentUser.name}
        </Text>
        <Text style = {styles.welcome}>
          User: {currentUser.name}
          {'\n'} Password: {currentUser.password}
          {'\n'} Series: {currentUser.series.length}
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