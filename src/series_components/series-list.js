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
      <SeriesCell series={series} route={this.props.route} navigator={this.props.navigator} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  listView: {
    backgroundColor: '#F0D23C',
    paddingTop: 20
  },
});