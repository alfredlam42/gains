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
var create = require('../../common/create');
var exerciseList = require('./exerciseList');

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
              Instructions for day 0
            </Text>
          </View>

          <View style = {styles.exerciseBox}>
            {this.renderList(['Squat', 'Bench Press', 'Deadlift', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher', 'Leg Extension', 'Leg Curl', 'Calf Raise', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'], [1, 1, 1, 8, null, 8, 7, 8, 8, 10, 10, 8, 15, 15, 15, 15, 15, 15])}
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
    //user shouldn't be able to start on more than one workout so the last element in the list is the current series the user is working on
    var weights = this.createWeightList();
    var exercisesList = search.findObjects('Exercise', 'name', exerciseList.all);
    var setsList = search.findObjects('intObject', 'value', [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    var repsList = search.findObjects('intObject', 'value', [1, 1, 1, 8, 4, 8, 7, 8, 8, 10, 10, 8, 15, 15, 15, 15, 15, 15]);
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
    });
    create.multipleMaxes(exerciseList.all, weights);
    this.props.navigator.pop();
  },
  renderList: function(exercises, reps){
    var that = this;
    var weights = this.state.exerciseWeight;
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
              1
            </Text>
          </View>
          <View style = {styles.numbersColumn}>
            <Text>
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
    exerciseList.all.forEach(function(exercise){
      list.push(that.state.exerciseWeight[exercise])
    })
    return list;
  }
});

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