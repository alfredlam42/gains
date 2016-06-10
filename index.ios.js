var React = require("react");
var ReactNative = require("react-native");
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;

var Realm = require('./src/class');
var Tabbar = require('./src/tabbar');
var Signup = require('./src/signup');
var Profile = require('./src/profile');
var Series = require('./src/series');

var ROUTES = {
  tabbar: Tabbar,
  signup: Signup,
  profile: Profile,
  series: Series
}

//Component
var Gains = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} passProps = {route.passProps}/>;
  },
  render: function() {
    // Realm.write(() => {

    //    Realm.delete(Realm.objects('User')); // Deletes all users
    // });

    // Realm code above used for testing if I could sign up a user and if there is already a user, skip the sign up page.
    var route = Realm.objects('User').length > 0 ? 'tabbar' : 'signup';

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