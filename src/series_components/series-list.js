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
var Button = require('../common/button');

var mockedData = [{name: "Series 1"},{name: "Series 2"},{name: "Series 3"},{name: "Series 4"},{name: "Series 5"},{name: "Series 6"},{name: "Series 7"},{name: "Series 8"},{name: "Series 9"},{name: "Series 10"},{name: "Series 11"},{name: "Series 12"},{name: "Series 13"},{name: "Series 14"},{name: "Series 15"},{name: "Series 16"},{name: "Series 17"},{name: "Series 18"},{name: "Series 19"}];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mockedData)
    };
  },
  buildList: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockedData)
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