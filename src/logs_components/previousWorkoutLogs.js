var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} = ReactNative;
var realm = require('../database/class');
var Button = require('../common/button');

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
          {that.renderSetList(workout)}
          {that.renderRepsList(workout)}
          {that.renderWeightList(workout)}
        </View>
      </View>
    });
  },
  renderExerciseList: function(workout) {
    return workout.exercises.map(function(exercise, i){
      return <Text key={i}>Exercise: {exercise.name}</Text>
    });
  },
  renderSetList: function(workout) {
    if (workout.set.length === 0) {return};

    return workout.set.map(function(set, i){
      return <Text key={i}>Set: {set.value}</Text>
    });
  },
  renderRepsList: function(workout) {
    if (workout.reps.length === 0) {return};

    return workout.reps.map(function(rep, i){
      return <Text key={i}>Rep: {rep.value}</Text>
    });
  },
  renderWeightList: function(workout) {
    if (workout.weight.length === 0) {return};

    return workout.weight.map(function(weight, i){
      return <Text key={i}>Weight: {weight.value}</Text>
    });
  }
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