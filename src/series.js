var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  View,
  Text,
  Navigator
} = ReactNative;

var SeriesList = require('./series_components/series-list');
var Series = require('./series_components/seriesdetails');

var ROUTES = {
  seriesList: SeriesList,
  seriesDetails: Series
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'seriesList'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});