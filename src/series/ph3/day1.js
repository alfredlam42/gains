var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator,
} = ReactNative;

var Button = require('../../common/button');
var realm = require('../../database/class');
var search = require('../../common/search');
var exerciseList = require('./exerciseList');
var UpperBodyOne = require('./upperBodyOne');

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
      <UpperBodyOne day = {1} navigator = {this.props.navigator}/>
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