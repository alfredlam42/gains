var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet
} = ReactNative;
var realm = require('../class');

module.exports = React.createClass({
  currentUser: realm.objects('User')[0],

  render: function(){
    return(
      <View style={styles.container}>
        <Text>Name: {this.currentUser.name}</Text>
        <Text>Password: {this.currentUser.password}</Text>
        <Text>Id: {this.currentUser.id}</Text>
        <Text>Series: {this.currentUser.series.length}</Text>
      </View>
    )
  }
})

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