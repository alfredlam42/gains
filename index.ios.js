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
var ROUTES = {
  tabbar: Tabbar,
  signup: Signup
}

//Component
var Gains = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    // realm.write(() => {
    //    realm.delete(realm.objects('User')); // Deletes all users
    // });

    // realm code above used for testing if I could sign up a user and if there is already a user, skip the sign up page.
    var route
    if (realm.objects('User').length > 0) {
      route = 'tabbar'
    } else { route = 'signup'}

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