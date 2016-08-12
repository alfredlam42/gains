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
var Header = require('../common/header');

var allSeries = realm.objects('seriesDisplay');

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
      <View style={styles.container}>
        <Header />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderSeries}
          style={styles.listView}/>
      </View>
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
    flex: 7,
    backgroundColor: '#F0D23C',
  },
});