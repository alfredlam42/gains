var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  StyleSheet,
  View,
} = ReactNative;

var Realm = require('./class');

// Profile Page Component
module.exports = React.createClass({
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

        <View style={styles.currentWorkout}>
          <Text style={styles.h2}>Current Workout</Text>
          <Text>Current workout goes here</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <Text>Update workout</Text>
          <Text>Update user info</Text>
        </View>

      </View>
    );
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
  profile: {
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 25,
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
  currentWorkout: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'yellow'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'red'
  }
});