var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;

var realm = require('./database/class');
var SeriesLogs = require('./logs_components/seriesLogs');
var WorkoutLogs = require('./logs_components/workoutLogs');
var PreviousWorkoutLogs = require('./logs_components/previousWorkoutLogs');

var ROUTES = {
  seriesLogs: SeriesLogs,
  workoutLogs: WorkoutLogs,
  previousWorkoutLogs: PreviousWorkoutLogs
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
        initialRoute={{name: 'seriesLogs'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});