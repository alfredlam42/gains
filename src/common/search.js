var React = require('react');
var ReactNative = require('react-native');
var realm = require('../class');

var search = {
  findExercise: function(name){
    var exercises = realm.objects('Exercise');
    exercise = exercises.filtered('name = "' + name + '"');
    return exercise[0];
  }
}

module.exports = search;