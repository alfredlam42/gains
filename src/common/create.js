var React = require('react');
var ReactNative = require('react-native');
var realm = require('../database/class');
var search = require('./search');

var create = {
  multipleExercise: function(list){
    var exercises = realm.objects('Exercise');
    for (var i = 0; i < list.length; i++){
      realm.write(() => {
        realm.create('Exercise', {
          name: list[i],
        }, true)
      })
    }
  },
  multipleIntObjects: function(){
    //this creates multiple of 5s because thats common weights
    for (var i = 1; i <= 120; i++){
      realm.write(() => {
        realm.create('intObject', {
          value: i * 5,
        }, true)
      })
    };
    //creates the multiples of 2.5s
    for (var i = 0; i <= 8; i++){
      realm.write(() => {
        realm.create('intObject', {
          value: (i + 0.5) * 5
        }, true)
      })
    };
    //creates the numbers used for reps and sets
    for (varI = 0; i <= 15; i++){
      realm.write(() => {
        realm.create('intObject', {
          value: i
        }, true)
      })
    };
  }
}

module.exports = create;