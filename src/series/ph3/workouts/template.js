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

var Button = require('../../../common/button');
var Header = require('../../../common/header');

var realm = require('../../../database/class');
var search = require('../../../common/search');
var create = require('../../../common/create');

var exerciseNames = [];
var exerciseSets = [];
var exerciseReps = [];
var exerciseWeights = [];

module.exports = React.createClass({
  getInitialState: function(){
    return {
      exerciseWeight: {},
    }
  },
  render: function(){
    {exerciseNames = this.props.passProps.info.exercises}
    {exerciseSets = this.props.passProps.info.sets}
    {exerciseReps = this.props.passProps.info.reps}
    {exerciseWeights = create.weightList(exerciseNames)}
    return(
      <View style = {styles.container}>
        <Header />
        <ScrollView style={styles.body}>
          <Text style = {styles.day}>
            Day {this.props.passProps.day}
          </Text>
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
            {this.renderList(exerciseNames, exerciseSets, exerciseReps, exerciseWeights)}
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
    var exercisesList = search.findObjects('Exercise', 'name', exerciseNames);
    var setsList = search.findObjects('intObject', 'value', exerciseSets);
    var repsList = search.findObjects('intObject', 'value', exerciseReps);
    var weightList = search.findObjects('intObject', 'value', exerciseWeights);

    realm.write(() => {
      var workout = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: this.props.passProps.day,
        exercises: exercisesList,
        set: setsList,
        reps: repsList,
        weight: weightList,
      })
      currentSeries.workouts.push(workout)
      currentSeries.currentDay = currentSeries.currentDay + 1;
    });
    this.props.navigator.pop();
  },
  renderList: function(exercises, sets, reps, weights){
    var that = this;
    return exercises.map(function(exercise, i){
      return(
        <View style = {styles.row} key = {i}>
          <View style = {styles.exerciseColumn}>
            <Text style={styles.exerciseName}>
              {exercise}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
              {sets[i]}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
              {reps[i]}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text style={styles.exerciseNumber}>
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
    justifyContent: 'center',
    backgroundColor: '#29292B'
  },
  body: {
    flex: 7,
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0DFE4',
    paddingLeft: 10,
    paddingRight: 10,
  },
  instructions: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'red',
  },
  text: {
    fontSize: 16,
    color: '#E0DFE4',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
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
  complete: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
})