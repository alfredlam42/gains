//Dummy page used to test stuff
//REMOVE BEFORE MERGING TO MASTERS

var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
} = ReactNative;

var Button = require('./common/button');
var realm = require('./database/class');
var exerciseList = require('./series/ph3/exerciseList');
var search = require('./common/search');

module.exports = React.createClass({
  render: function(){
    realm.write(() => {
      // realm.delete(realm.objects('Workout'));
      // realm.delete(realm.objects('Max'));
    });
    var currentUser = realm.objects('User')[0];
    var workout = realm.objects('Workout')[realm.objects('Workout').length - 1];
    return (
      <View style={styles.container}>
        <Text>
          hey {currentUser.name}
        </Text>
        <Text style = {styles.welcome}>
          User: {currentUser.name}
          {'\n'} Password: {currentUser.password}
          {'\n'} Series: {currentUser.series.length}
        </Text>
        <Text style = {styles.welcome}>
          Workouts Complete: {search.findLastElement(currentUser.series).workouts.length}
        </Text>
        <Text style = {styles.welcome}>
          Workouts
        </Text>
        <Button text = 'PH3' onPress = {this.onSeriesDetails} />
        <Button text = 'Day 1' onPress = {this.onWorkoutDetails} />
      </View>
    )
  },
  onWorkoutDetails: function(){
    this.props.navigator.push({
      name: 'dayone',
      passProps: {day: 1},
    });
  },
  onSeriesDetails: function(){
    this.props.navigator.push({
      name: 'seriesDetails',
      passProps: {
        exercises: ['Squat', 'Bench', 'Deadlift']
      },
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});