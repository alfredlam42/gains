var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} = ReactNative;

var Realm = require('./class');

// Profile Page Component
module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {

    var user = Realm.objects('User')[0];

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Text>Header / logo goes here</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.h2}>Profile</Text>
          <Text style={styles.userInfo}>Name: {user.name}</Text>
          <Text style={styles.userInfo}>Age: {user.age}</Text>
          <Text style={styles.userInfo}>Height: {user.height}</Text>
          <Text style={styles.userInfo}>Weight: {user.weight}</Text>
        </View>

        <View style={styles.seriesWrapper}>
          <Text style={styles.h2}>Current Series</Text>
          <View style={styles.workoutWrapper}>
            <Text style={styles.pic}></Text>
            <View style={styles.workoutDetails}>
              <Text style={styles.workoutInfo}>Name: </Text>
              <Text style={styles.workoutInfo}>Week: </Text>
              <Text style={styles.workoutInfo}>Day: </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          {this.newSeriesButton()}
          {this.editProfileButton()}
        </View>
      </View>
    );
  },
  newSeriesButton: function() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleNewSeriesPress}
      style={styles.button}
      >
        <Text>New Series</Text>
      </TouchableHighlight>
  },
  editProfileButton: function() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleEditProfilePress}
      style={styles.button}
      >
        <Text>Edit Profile</Text>
      </TouchableHighlight>
  },
  handleNewSeriesPress: function() {

  },
  handleEditProfilePress: function() {

  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
  profile: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 25,
    // alignItems: 'center',
    borderWidth: 3,
    borderColor: 'green'
  },
  h2: {
    fontSize: 24,
    textDecorationLine: 'underline'
  },
  userInfo: {
    fontSize: 18
  },
  seriesWrapper: {
    flex: 4,
    // alignItems: 'center',
    paddingLeft: 25,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'yellow'
  },
  workoutWrapper: {
    flexDirection: 'row'
  },
  pic: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'green'
  },
  workoutDetails: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    paddingLeft: 5
  },
  workoutInfo: {
    fontSize: 18
  },
  buttonWrapper: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 40,
    borderWidth: 3,
    borderColor: 'red'
  },
  button: {
    borderWidth: 2,
    height: 50,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});