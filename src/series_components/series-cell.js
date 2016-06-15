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
        underlayColor={'white'}
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
    backgroundColor: 'lightblue',
    marginBottom: 2
  },
  seriesName: {
    fontSize: 24
  }
});