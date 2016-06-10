var React = require("react");
var ReactNative = require("react-native");
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;
var realm = require('./src/class');
var Home = require('./src/home');
var SeriesDetail = require('./src/series/seriesdetails')
var ROUTES = {
  home: Home,
  seriesdetail: SeriesDetail,
}

//Component
var Gains = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={route} navigator={navigator} passProps = {route.passProps}/>;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('gains', ()=>Gains);