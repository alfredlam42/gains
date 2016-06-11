var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  View,
  Text
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.seriesWrapper}>
          <Text style={styles.seriesDetails}>Name: </Text>
          <Text style={styles.seriesDetails}>Category: </Text>
          <Text style={styles.seriesDetails}>Details: </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  seriesWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'orange'
  },
  seriesDetails: {

  }
});