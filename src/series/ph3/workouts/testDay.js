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

var exerciseNames = exerciseList.bigThree;

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
          <Button text ={'Back'} onPress = {this.handlePress} />
        </View>
        <ScrollView style = {styles.body}>
          <Text style = {styles.day}>
            Day {this.props.passProps.day}
          </Text>
          <View style = {styles.instructions}>
            <Text style = {styles.text}>
              Today is the day to see how much improvements you've made this pass month. Don't be nervous and trust in the training that you've been doing.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              Remember, don't try to hit your max right from the start. Make sure you take your time to warm up and slowly build up the weight. Take as much rest as you need in between each warm up set while building to your max.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              Good luck!
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
            {this.renderList(exerciseNames)}
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
    var setsList = search.findObjects('intObject', 'value', [1, 1, 1]);
    var repsList = search.findObjects('intObject', 'value', [1, 1, 1]);
    var weightList = search.findObjects('intObject', 'value', weights);

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
    create.multipleMaxes(exerciseNames, weights);
    this.props.navigator.pop();
  },
  renderList: function(exercises){
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
              1
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
  instructions: {
    alignItems: 'center',
    alignSelf: 'stretch',
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
  weight: {
    fontSize: 16,
    height: 17,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#E0DFE4',
  },
  complete: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
})