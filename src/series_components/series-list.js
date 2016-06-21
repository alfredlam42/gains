var ReactNative = require('react-native');
var React = require('react');
var {
  ListView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

var realm = require('../database/class');
var SeriesCell = require('./series-cell');

var allSeries = realm.objects('Series');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(allSeries)
    };
  },
  buildList: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(allSeries)
    });
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSeries}
        style={styles.listView}/>
    );
  },
  renderSeries: function(series) {
    return (
      <SeriesCell series={series} />
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
  listView: {
    backgroundColor: '#F5FCFF'
  }
});