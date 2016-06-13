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
          <Text style={styles.seriesDetails}>{seriesList[0].name}</Text>
          <Text style={styles.seriesDetails}>Short description</Text>
        </View>
      </View>
    );
  },
  series: function() {
    var seriesList = realm.objects('Series');
    var seriesItems = [];
    for (var i = 0; i < 7; i++) {
      var series = seriesList[i];
      seriesItems.push(
        <Text key={i}>{series.name}</Text>
      )
    }
    return seriesItems;
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