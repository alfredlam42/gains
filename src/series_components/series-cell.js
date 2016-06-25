var ReactNative = require('react-native');
var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

var realm = require('../database/class');

// add category and experience level to cell information
module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.seriesWrapper}
        underlayColor={'#56A2F5'}
        onPress={this.onSeriesSelect}>
        <View>
          <Text style={styles.seriesName}>{this.props.series.name}</Text>
        </View>
      </TouchableHighlight>
    );
  },
  onSeriesSelect: function() {
    { this.props.navigator.push({name: 'seriesDetail', seriesDetail: this.props.series})}
  }
});

var styles = StyleSheet.create({
  seriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#29292B',
    marginBottom: 2
  },
  seriesName: {
    fontSize: 24,
    color: '#E0DFE4'
  }
});