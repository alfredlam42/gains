var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

var realm = require('../class');
var Button = require('../common/button');

module.exports = React.createClass({
  render: function() {
    var seriesList = realm.objects('Series');
    return (
      <View style={styles.container}>
        {this.series()}
        {this.fakeData()}
      </View>
    );
  },
  series: function() {
    var seriesList = realm.objects('Series');
    var seriesItems = [];
    for (var i = 0; i < seriesList.length; i++) {
      seriesItems.push(
        <View key={seriesList[i].id} style={styles.seriesWrapper}>
          <Text style={styles.seriesName}>{seriesList[i].name}</Text>
          <Button text="View series" onPress={this.onViewSeriesPress()} />
        </View>
      );
    }
    return seriesItems;
  },
  // renders to view for scrolling effect but data does not exist as realm objects
  fakeData: function() {
    fakeObjects = []
    for (var i = 0; i < 50; i++) {
      fakeObjects.push(
        <View style={styles.seriesWrapper}>
          <Text style={styles.seriesName}>Fake Series</Text>
          <Button text="View series" onPress={this.onViewSeriesPress()} />
        </View>
        );
    }
    return fakeObjects
  },
  onViewSeriesPress: function() {
    // move to series detailed view
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 3,
    borderColor: 'orange'
  },
  seriesName: {
    fontSize: 18
  }
});