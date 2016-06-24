var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator,
  TextInput,
  ScrollView
} = ReactNative;

var Button = require('../../common/button');
var realm = require('../../database/class');
var search = require('../../common/search');
var exerciseList = require('./exerciseList');
var create = require('../../common/create');

var exerciseSets = [2, 4, 2, 2, 5, 5];
var exerciseReps = [8, 0, 8, 7, 8, 8];
var exerciseWeights = create.weightList(exerciseList.upperBodyOne);

module.exports = React.createClass({
  getInitialState: function(){
    return {
      exerciseWeight: {},
    }
  },
  render: function(){
    return(
      <View style = {styles.container}>
        <ScrollView>
          <View style = {styles.instructions}>
            <Text>
              Instructions for day 1.
            </Text>
          </View>

          <View style = {styles.exerciseBox}>
            {this.renderList(exerciseList.upperBodyOne, exerciseSets, exerciseReps, exerciseWeights)}
          </View>

          <View style = {styles.complete}>
            <Button text = 'Complete Workout' onPress = {this.onWorkoutComplete} />
          </View>
        </ScrollView>
      </View>
    )
  },
  onWorkoutComplete: function(){
    var currentUser = realm.objects('User')[0];
    var currentSeries = search.findLastElement(currentUser.series);
    var exercisesList = search.findObjects('Exercise', 'name', exerciseList.upperBodyOne);
    var setsList = search.findObjects('intObject', 'value', exerciseSets);
    var repsList = search.findObjects('intObject', 'value', exerciseReps);
    var weightList = search.findObjects('intObject', 'value', exerciseWeights);

    realm.write(() => {
      var workout = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: this.props.day,
        exercises: exercisesList,
        set: setsList,
        reps: repsList,
        weight: weightList,
      })
      currentSeries.workouts.push(workout)
    })
    this.props.navigator.pop();
  },
  renderList: function(exercises, sets, reps, weights){
    var that = this;
    return exercises.map(function(exercise, i){
      return(
        <View style = {styles.row} key = {i}>
          <View style = {styles.exerciseColumn}>
            <Text>
              {exercise}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text>
              {sets[i]}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text>
              {reps[i]}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text>
              {weights[i]}
            </Text>
          </View>
        </View>
      )
    })
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  },
  errorMessage: {
    color: 'red'
  },
  instructions: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'red',
  },
  exerciseBox: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'blue',
  },
  complete: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'green',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // borderWidth: 1,
    borderColor: 'red',
  },
  exerciseColumn: {
    flex: 5,
    // borderWidth: 1,
    borderColor: 'red',
  },
  numbersColumn: {
    flex: 1,
    // borderWidth: 1,
    borderColor: 'red',
  },
  weight: {
    fontSize: 14,
    height: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderColor: 'green',
  },
})