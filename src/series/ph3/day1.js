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
var BigThree = require('./bigThree');
var UpperBodyOne = require('./upperBodyOne');
var LegsOne = require('./legsOne');
var UpperBodyTwo = require('./upperBodyTwo');
var LegsTwo = require('./legsTwo');
var FullBody = require('./fullBody');
var Rest = require('./rest');
var TestDay = require('./testDay');

module.exports = React.createClass({
  render: function(){
    return(
      <BigThree day = {1} navigator = {this.props.navigator} sets = {[1, 1, 1]} reps = {[2, 3, 4]}/>
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