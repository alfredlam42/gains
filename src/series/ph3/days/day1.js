var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator,
} = ReactNative;

var Button = require('../../../common/button');
var realm = require('../../../database/class');
var search = require('../../../common/search');
var exerciseList = require('../exerciseList');
var WorkoutTemplate = require('../workouts/template');

module.exports = React.createClass({
  render: function(){
    return(
      <WorkoutTemplate navigator = {this.props.navigator} day = {1} exercises = {exerciseList.upperBodyOne} sets = {[1, 1, 1, 1, 1, 1]} reps = {[2, 3, 4, 5, 6, 7]}/>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})