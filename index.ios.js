var React = require("react");
var ReactNative = require("react-native");
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;

var realm = require('./src/database/class');
var seed = require('./src/database/seedData');
var dummy = require('./src/database/dummyData');

var Tabbar = require('./src/tabbar');
var Signup = require('./src/signup');
var Profile = require('./src/profile');
var Series = require('./src/series');
var SeriesDetails = require('./src/series_components/seriesdetails');

var ROUTES = {
  tabbar: Tabbar,
  signup: Signup,
  profile: Profile,
  series: Series,
}

// realm.write(() => {
//   realm.delete(realm.objects('User'));
//   }
// )

//Component
var Gains = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} passProps = {route.passProps}/>;
  },
  render: function() {
    var route = realm.objects('User').length > 0 ? 'tabbar' : 'signup';
    // seed.seedDatabase();
    // dummy.seedDummyData();
    // dummy.deleteClass("User");

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