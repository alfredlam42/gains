var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

var realm = require('../class');
var Button = require('../common/button')

module.exports = React.createClass({
  render: function() {
    var seriesList = realm.objects('Series');

    return (
      <View style={styles.container}>
        <View style={styles.seriesWrapper}>
          <Text style={styles.seriesDetails}>Name</Text>
          <Text style={styles.seriesDetails}>Description</Text>
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
    fontSize: 18
  }
});