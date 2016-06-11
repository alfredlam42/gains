var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} = ReactNative;
var realm = require('../class');

//dummy data workout exercises
let currentSeries = realm.objects('Series')[realm.objects('Series').length -1];
let workoutList = currentSeries.workouts;

//write workouts
// realm.write(() => {
//   workoutList.push({id: 1, day: 1});
//   workoutList.push({id: 2, day: 2});
// });

// write exercies per workout
let workoutOne = realm.objects('Workout')[realm.objects('Workout').length -1]
let workoutTwo = realm.objects('Workout')[realm.objects('Workout').length -2]
let workoutListOne = workoutOne.exercises;
let workoutListTwo = workoutTwo.exercises;

// realm.write(() => {
  // workoutListOne.push({id: 1, name: 'workout-1'});
  // workoutListOne.push({id: 2, name: 'workout-2'});
  // workoutListOne.push({id: 3, name: 'workout-3'});
  // workoutListTwo.push({id: 4, name: 'workout-4'});
  // workoutListTwo.push({id: 5, name: 'workout-5'});
  // workoutListTwo.push({id: 6, name: 'workout-6'});
// });



module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableHighlight onPress={this.handlePress} underlayColor="black">
            <Text>Back</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.list}>
          {this.renderWorkoutList()}
        </ScrollView>
      </View>
    )
  },
  handlePress: function() {
    { this.props.navigator.pop(); }
  },
  renderWorkoutList: function() {
    let currentSeries = realm.objects('Series')[realm.objects('Series').length -1];
    let workoutList = currentSeries.workouts;
    var that = this;
    return workoutList.map(function(workout, i){
      return <View style={styles.workoutWrapper}>
        <Text key={i}>Workout day: {workout.day}</Text>
        <Text>Exercise length: {workout.exercises.length}</Text>
        {that.renderExerciseList(workout)}
      </View>
    });
  },
  renderExerciseList: function(workout) {
    return workout.exercises.map(function(exercise, i){
      return <Text key={i}>Exercise: {exercise.name}</Text>
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 6
  },
  workoutWrapper: {
    flex: 1
  }
});