var ReactNative = require('react-native');
var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.seriesWrapper}
        underlayColor={'#56A2F5'}
        onPress={this.onSeriesSelect}>
        <Text style={styles.seriesName}>{this.props.series.name}</Text>
      </TouchableHighlight>
    );
  },
  onSeriesSelect: function() {

  }
})

var styles = StyleSheet.create({
  seriesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#B3C4CC',
    marginBottom: 2
  },
  seriesName: {
    fontSize: 24
  }
});