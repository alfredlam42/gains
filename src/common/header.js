var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  StyleSheet,
  View
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>Header / logo goes here</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
      flex: 1,
      alignSelf: 'stretch'
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
});
