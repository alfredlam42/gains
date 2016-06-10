var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative
var Button = require('../../common/button');
var realm = require('../../class');
var search = require('../../common/search')

module.exports = React.createClass({
  render: function(){
    return(
      <View style = {styles.container}>
        <Text>
          Instructions for day 0
        </Text>
        <Button text = 'Workout Complete' onPress = {this.onWorkoutComplete}/>
      </View>
    )
  },
  onWorkoutComplete: function(){
    var currentUser = realm.objects('User')[0];
    var series = currentUser.series[0];
    var exercises = [search.findExercise('Squat'), search.findExercise('Bench'), search.findExercise('Deadlift')];
    var sets = [1, 1, 1];
    var reps = [1, 1, 1];
    var weight = [315, 225, 315];
  }
})