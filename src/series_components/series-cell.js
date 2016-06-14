var ReactNative = require('react-native');
var React = require('react');
var {
  View,
  Text,
  StyleSheet
} = ReactNative;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.seriesWrapper}>
        <Text style={styles.seriesName}>{this.props.series.name}</Text>
      </View>
    );
  }
})

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