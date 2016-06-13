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
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // backgroundColor: '#F5FCFF'
  }
  // logo: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: 3,
  //   borderColor: 'blue'
  // },
  // profile: {
  //   flex: 3,
  //   justifyContent: 'center',
  //   paddingLeft: 25,
  //   // alignItems: 'center',
  //   borderWidth: 3,
  //   borderColor: 'green'
  // },
  // h2: {
  //   fontSize: 24,
  //   textDecorationLine: 'underline'
  // },
  // userInfo: {
  //   fontSize: 18
  // },
  // seriesWrapper: {
  //   flex: 4,
  //   // alignItems: 'center',
  //   paddingLeft: 25,
  //   justifyContent: 'center',
  //   borderWidth: 3,
  //   borderColor: 'yellow'
  // },
  // workoutWrapper: {
  //   flexDirection: 'row'
  // },
  // pic: {
  //   width: 100,
  //   height: 100,
  //   borderWidth: 3,
  //   borderColor: 'green'
  // },
  // workoutDetails: {
  //   width: 200,
  //   height: 100,
  //   justifyContent: 'center',
  //   paddingLeft: 5
  // },
  // workoutInfo: {
  //   fontSize: 18
  // },
  // buttonWrapper: {
  //   flex: 1.5,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   paddingBottom: 40,
  //   borderWidth: 3,
  //   borderColor: 'red'
  // },
  // button: {
  //   borderWidth: 2,
  //   height: 50,
  //   width: 100,
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
});