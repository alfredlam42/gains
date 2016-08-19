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
var Header = require('../common/header');


module.exports = React.createClass({
  render: function() {
    return (

      <View style={styles.container}>
        <Header />
        <View style={styles.workoutLog}>
          <View style={styles.backButton}>
            <Button
              text={'Back'}
              onPress={this.handlePress} />
          </View>

          <ScrollView contentContainerStyle={styles.contentContainer} style={styles.list}>
            {this.renderWorkoutList()}
          </ScrollView>
        </View>
      </View>
    )
  },
  handlePress: function() {
    { this.props.navigator.pop(); }
  },
  renderWorkoutList: function() {
    var workoutList = this.props.route.series.workouts;
    var that = this;

    console.log(workoutList);

    if (workoutList.length <= 0) {
      return (
        <View style={[styles.workoutWrapper, styles.exerciseList]}>
          <Text style={styles.exerciseName}>No workouts completed yet.</Text>
        </View>
      )
    } else {
      return (workoutList.map(function(workout, i){
        return (
          <View style={styles.workoutWrapper} key={i}>
            <View style={styles.workoutDay}>
              <Text style={[styles.workoutDayText, styles.textStyle]}>
                Day {workout.day}
              </Text>
            </View>

            <View style = {styles.exerciseBox}>
              <View style = {styles.row}>
                <View style = {styles.exerciseColumn}>
                  <Text style={styles.exerciseNameHeader}>
                    Exercise
                  </Text>
                </View>
                <View style = {styles.numbersColumn}>
                  <Text style={styles.exerciseNumberHeader}>
                    Sets
                  </Text>
                </View>
                <View style = {styles.numbersColumn}>
                  <Text style={styles.exerciseNumberHeader}>
                    Reps
                  </Text>
                </View>
                <View style = {styles.numbersColumn}>
                  <Text style={styles.exerciseNumberHeader}>
                    Weight
                  </Text>
                </View>
              </View>
              {that.renderList(workout.exercises, workout.set, workout.reps, workout.weight)}
            </View>
          </View>
        );
      }));
    }
  },
  renderList: function(exercises, sets, reps, weights){
    return exercises.map(function(exercise, i){
      return(
        <View style = {styles.row} key={i}>

          <View style = {styles.exerciseColumn}>
            <Text style={styles.exerciseName}>
              {exercise.name}
            </Text>
          </View>

          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
              {sets[i].value}
            </Text>
          </View>

          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
              {reps[i].value}
            </Text>
          </View>

          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
              {weights[i].value}
            </Text>
          </View>

        </View>
      )
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#29292B'
  },
  textStyle: {
    color: '#E0DFE4'
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 7
  },
  contentContainer: {
    paddingBottom: 100
  },
  workoutWrapper: {
    flex: 1,
  },
  workoutDay: {
    borderBottomWidth: 2,
    borderColor: '#F0D23C'
  },
  workoutDayText: {
    fontSize: 50
  },
  exerciseList: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  exerciseBox: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  exerciseNameHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0DFE4',
  },
  exerciseName: {
    fontSize: 16,
    color: '#E0DFE4',
  },
  exerciseNumberHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E0DFE4',
    textAlign: 'center'
  },
  exerciseNumber: {
    fontSize: 16,
    color: '#E0DFE4',
    textAlign: 'center',
  },
  exerciseColumn: {
    flex: 2.75,
  },
  numbersColumn: {
    flex: 1,
  },
  workoutLog: {
    flex: 7,
  }
});