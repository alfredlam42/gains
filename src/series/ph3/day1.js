var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator,
} = ReactNative;

var Button = require('../../common/button');
var realm = require('../../class');
var search = require('../../common/search');
var workoutSchedule = require('./workoutSchedule');
var Template = require('./workoutTemplate');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      squat: '',
      benchPress: '',
      deadlift: '',
    }
  },
  render: function(){
    return(
      <View style = {styles.container}>
        <Template workout = {workoutSchedule[1]} />
      </View>
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