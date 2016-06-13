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
var Tabbar = require('./src/tabbar');
var Signup = require('./src/signup');
var Profile = require('./src/profile');
var Series = require('./src/series');
var SeriesDetails = require('./src/series/seriesdetails');

var ROUTES = {
  tabbar: Tabbar,
  signup: Signup,
  profile: Profile,
  series: Series,
  seriesdetails: SeriesDetails,
}

//Component
var Gains = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} passProps = {route.passProps}/>;
  },
  render: function() {
    // realm.write(() => {

    //    realm.delete(realm.objects('User')); // Deletes all users
    //    realm.delete(realm.objects('Series')); // Deletes all series
    //    realm.delete(realm.objects('Workout')); // Deletes all workouts
    //    realm.delete(realm.objects('Exercise')); // Deletes all exercises
    // });

    var route = realm.objects('User').length > 0 ? 'tabbar' : 'signup';

    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: route}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('gains', ()=>Gains);