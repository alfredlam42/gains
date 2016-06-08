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
    var currentUser = realm.objects('User')[0]
    return (
      <View style={styles.container}>
        <Text>
          hey {currentUser.name}
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