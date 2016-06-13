var ReactNative = require('react-native');
var React = require('react');
var {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

var Button = require('../common/button');
var realm = require('../class');
var profile = require('../profile');

module.exports = React.createClass({
  render: function() {
    var user = realm.objects('User')[0];
    var currentSeries = user.series[0] ? user.series.name : 'Pick a series!';

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
              <Text style={styles.workoutInfo}>Name: {currentSeries}</Text>
              <Text style={styles.workoutInfo}>Week: </Text>
              <Text style={styles.workoutInfo}>Day: </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            text={'New Series'}
            onPress={this.onNewSeriesPress} />
          <Button
            text={'Edit Profile'}
            onPress={this.onEditProfilePress} />
        </View>
      </View>
    );
  },
  onNewSeriesPress: function() {
    { this.props.navigator.immediatelyResetRouteStack([{ name: 'newSeries' }]); }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
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