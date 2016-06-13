var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Navigator
} = ReactNative;

var realm = require('./class');
var Profile = require('./profile_components/user-profile');
var Series = require('./series')

var ROUTES = {
  profile: Profile,
  newSeries: Series
}

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'profile'}}
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