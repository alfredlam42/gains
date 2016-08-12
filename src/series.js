var ReactNative = require('react-native');
var React = require('react');
var {
  StyleSheet,
  Navigator
} = ReactNative;

var SeriesDetail = require('./series_components/seriesdetails');
var SeriesList = require('./series_components/series-list');
var Profile = require('./profile');

var ROUTES = {
  seriesList: SeriesList,
  seriesDetail: SeriesDetail,
  profile: Profile
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    console.log(this.props);
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} changeState={this.props.changeState}/>;
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