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
var exerciseList = require('../exerciseList');

var exerciseNames = exerciseList.all;
var exerciseSets = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var exerciseReps = [1, 1, 1, 8, 0, 8, 7, 8, 8, 10, 10, 8, 15, 15, 15, 15, 15, 15]

module.exports = React.createClass({
  getInitialState: function(){
    return {
      exerciseWeight: {},
    }
  },
  render: function(){
    return(
      <View style = {styles.container}>
        <Header />
        <View style={styles.backButton}>
          <Button text ={'Back'} onPress = {this.pressBack} />
        </View>
        <ScrollView style = {styles.body}>
          <Text style = {styles.day}>
            Day 0
          </Text>
          <View style = {styles.instructions}>
            <Text style = {styles.text}>
              Before you begin this series, we need to figure out the maximum weights you can lift for these exercises so the series can be effective.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              If you have never seen these exercises before it is recommended you go watch some videos online. While watching these videos, it is also important that you watch the form of the instructor and try to keep to it as best as you can.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              As I just mentioned, form is always more important than being able to lift heavier weights. If you go heavier and heavier with poor form, there will be a good chance of injury so it is important to always prioritize form and technique. Also as you are lifting being able to recognize when your form falls aparts is an important skill to have.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              Take as much time as you need to complete these exercises with good form. Good luck.
            </Text>
            <Text></Text>
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
            {this.renderList(exerciseNames, exerciseReps)}
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
    var currentSeries = realm.objects('Series').filtered('active = true')[0];
    var weights = this.createWeightList();
    var exercisesList = search.findObjects('Exercise', 'name', exerciseNames);
    var setsList = search.findObjects('intObject', 'value', exerciseSets);
    var repsList = search.findObjects('intObject', 'value', exerciseReps);
    var weightList = search.findObjects('intObject', 'value', weights);

    realm.write(() => {
      var workout = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 0,
        exercises: exercisesList,
        set: setsList,
        reps: repsList,
        weight: weightList,
      })
      currentSeries.workouts.push(workout)
      currentSeries.currentDay = currentSeries.currentDay + 1;
    });
    create.multipleMaxes(exerciseNames, weights);
    this.props.navigator.pop();
  },
  renderList: function(exercises, reps){
    var that = this;
    var weights = this.state.exerciseWeight;
    return exercises.map(function(exercise, i){
      return(
        <View style = {styles.row} key = {i}>
          <View style = {styles.exerciseColumn}>
            <Text style = {styles.exerciseName}>
              {exercise}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text style = {styles.exerciseNumber}>
              1
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text style = {styles.exerciseNumber}>
              {reps[i]}
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <TextInput
              style = {styles.weight}
              onChangeText = {(weight) => {
                weights[exercise] = weight;
                that.setState({exerciseWeight: weights});
              }}
              keyboardType = 'numeric'
            />
          </View>
        </View>
      )
    })
  },
  createWeightList: function(){
    var list = [];
    var that = this;
    exerciseNames.forEach(function(exercise){
      list.push(that.state.exerciseWeight[exercise])
    })
    return list;
  },
  pressBack: function() {
    { this.props.navigator.pop(); }
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#29292B'
  },
  backButton: {
    paddingRight: 250,
    paddingLeft: 10
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
  text: {
    fontSize: 16,
    color: '#E0DFE4',
    paddingLeft: 10,
    paddingRight: 10,
  },
  exerciseBox: {
    flex: 1,
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
  weight: {
    fontSize: 16,
    height: 17,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#E0DFE4',
  },
  complete: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})