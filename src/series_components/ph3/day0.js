var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator,
  TextInput
} = ReactNative;

var Button = require('../../common/button');
var realm = require('../../database/class');
var search = require('../../common/search');
var exercise = ['Squat', 'Barbell Bench Press', 'Deadlift'];
var create = require('../../common/create');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      squat: '',
      barbellBenchPress: '',
      deadlift: '',
    }
  },
  render: function(){
    create.multipleIntObjects();
    return(
      <View style = {styles.container}>
        <View style = {styles.instructions}>
          <Text>
            Instructions for day 0
          </Text>
        </View>
        <View style = {styles.exerciseBox}>
          <View style = {styles.column}>
            <Text>
              Exercises
            </Text>
            <Text>
              {this.props.passProps.exercises[0]}
            </Text>
          </View>
          <View style = {styles.column}>
            <Text>
              Sets
            </Text>
            <Text>
              {this.props.passProps.sets[0]}
            </Text>
          </View>
          <View style = {styles.column}>
            <Text>
              Reps
            </Text>
            <Text>
              {this.props.passProps.reps[0]}
            </Text>
          </View>
          <View style = {styles.column}>
            <Text>
              Weight
            </Text>
            <TextInput
              style = {styles.weight}
              onChangeText = {(text) => this.setState({squat: text})}
              value = {this.state.squat}
              keyboardType = 'numeric'
            />
          </View>
        </View>
        <View style = {styles.complete}>
          <Button text = 'Complete Workout' onPress = {this.onWorkoutComplete} />

        </View>
      </View>
    )
  },
  onWorkoutComplete: function(){
    var currentUser = realm.objects('User')[0];
    var currentSeries = search.findLastElement(currentUser.series);
    //user shouldn't be able to start on more than one workout so the last element in the list is the current series the user is working on
    var weights = [this.state.squat] //Need to create a function that creates this list. Since the user will input the weight, it will be stored on the states and pulled from there
    var exerciseList = search.findObjects('Exercise', 'name', this.props.passProps.exercises); //or where ever the list comes from
    var setList = search.findObjects('intObject', 'value', this.props.passProps.sets); //or whereever the number of sets come from
    var repsList = search.findObjects('intObject', 'value', this.props.passProps.reps); //or whereever the number of reps come from
    var weightList = search.findObjects('intObject', 'value', weights);

    realm.write(() => {
      var workout = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 0,
        exercises: exerciseList,
        set: setList,
        reps: repsList,
        weight: weightList,
      })
      currentSeries.workouts.push(workout)
    })
    this.props.navigator.pop();
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderWidth: 3,
    borderColor: 'red',
  },
  exerciseBox: {
    flex: 1,
    flexDirection: 'row',
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
  column: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'yellow',
  },
  weight: {
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
  }
})