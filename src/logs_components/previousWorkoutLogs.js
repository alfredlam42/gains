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
var Button = require('../common/button');

//dummy data workout exercises
let previousSeries = realm.objects('Series')[realm.objects('Series').length -2];
let workoutList = previousSeries.workouts;

//write workouts
// realm.write(() => {
//   workoutList.push({id: 3, day: 1});
//   workoutList.push({id: 4, day: 2});
// });

// write exercies per workout
let workoutOne = workoutList[previousSeries.workouts.length-1]
let workoutTwo = workoutList[previousSeries.workouts.length-2]
let workoutListOne = workoutOne.exercises;
let workoutListTwo = workoutTwo.exercises;

// realm.write(() => {
//   workoutListOne.push({id: 7, name: 'prevexercise-1'});
//   workoutListOne.push({id: 8, name: 'prevexercise-2'});
//   workoutListOne.push({id: 9, name: 'prevexercise-3'});
//   workoutListTwo.push({id: 10, name: 'prevexercise-4'});
//   workoutListTwo.push({id: 11, name: 'prevexercise-5'});
//   workoutListTwo.push({id: 12, name: 'prevexercise-6'});
// })

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Button
            text={'Back'}
            onPress={this.handlePress} />
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
    let previousSeries = realm.objects('Series')[realm.objects('Series').length -2];
    let workoutList = previousSeries.workouts;
    var that = this;
    return workoutList.map(function(workout, i){
      return <View style={styles.workoutWrapper}>
        <View style={styles.workoutDay}>
          <Text style={styles.workoutDayText} key={i}>Workout day: {workout.day}</Text>
        </View>
        <View style={styles.exerciseList}>
          {that.renderExerciseList(workout)}
        </View>
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
    flex: 1,
  },
  workoutDay: {
    borderBottomWidth: 2,
  },
  workoutDayText: {
    fontSize: 50
  },
  exerciseList: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});