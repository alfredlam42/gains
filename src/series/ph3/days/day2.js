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
var UpperBodyOne = require('../workouts/upperBodyOne');

module.exports = React.createClass({
  render: function(){
    return(
      <UpperBodyOne day = {2} navigator = {this.props.navigator} sets = {[1, 1, 1]} reps = {[2, 3, 4]}/>
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