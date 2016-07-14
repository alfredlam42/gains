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

var exerciseNames = exerciseList.upperBodyTwo;

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
        <View style = {styles.body}>
          <Text style = {styles.day}>
            Day {this.props.passProps.day}
          </Text>
          <View style = {styles.instructions}>
            <Text style = {styles.text}>
              Today is a rest day. Enjoy it.
            </Text>
            <Text></Text>
            <Text style = {styles.text}>
              Rest is an important part of training. It lets your body recover from all the stress you put on it from the previous workouts and allows for muscles to grow.
            </Text>
          </View>

          <View style = {styles.complete}>
            <Button text = 'Complete Workout' onPress = {this.onWorkoutComplete} />
          </View>
        </View>
      </View>
    )
  },
  onWorkoutComplete: function(){
    var currentUser = realm.objects('User')[0];
    var currentSeries = search.findLastElement(currentUser.series);
    var exercisesList = search.findObjects('Exercise', 'name', exerciseNames);

    realm.write(() => {
      var workout = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: this.props.passProps.day,
        exercises: exercisesList,
        set: null,
        reps: null,
        weight: null,
      })
      currentSeries.workouts.push(workout)
      currentSeries.currentDay = currentSeries.currentDay + 1;
    })
    this.props.navigator.pop();
  },
})

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
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 16,
    color: '#E0DFE4',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
  },
  complete: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
})