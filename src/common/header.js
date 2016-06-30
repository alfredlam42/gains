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
          <Text style={styles.gains}>GAINS</Text>
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
  },
  gains: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#E0DFE4',
  }
});
