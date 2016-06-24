var React = require('react');
var ReactNative = require('react-native');
var realm = require('../database/class');
var search = require('./search');

var create = {
  multipleExercises: function(list){
    var exercises = realm.objects('Exercise');
    for (var i = 0; i < list.length; i++){
      realm.write(() => {
        realm.create('Exercise', {
          name: list[i],
        }, true)
      })
    }
  },
  //A different function should be created for each class because of the properties. It just happens that Category and Exercise has the same properties
  multipleCategories: function(list){
    var categories = realm.objects('Category');
    for (var i = 0; i < list.length; i++){
      realm.write(() => {
        realm.create('Category', {
          name: list[i],
        }, true)
      })
    }
  },
  seriesDisplay: function(name, exerciseList, categoryList){
    realm.write(() => {
      realm.create('seriesDisplay', {
        name: name,
        exercises: search.findObjects('Exercise', 'name', exerciseList),
        category: search.findObjects('Category', 'name', categoryList),
      }, true)
    })
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
    for (var i = 0; i <= 15; i++){
      realm.write(() => {
        realm.create('intObject', {
          value: i
        }, true)
      })
    };
  },
  multipleMaxes: function(exerciseList, weightList){
    for(var i = 0; i < exerciseList.length; i++){
      realm.write(() => {
        realm.create('Max', {
          exercise: exerciseList[i],
          maxWeight: parseInt(weightList[i]),
        }, true)
      })
    }
  },
  weightList: function(exerciseList){
    var list = [];
    var maxes = search.findObjects('Max', 'exercise', exerciseList);

    maxes.forEach(function(max){
      list.push(max.maxWeight);
    })

    return list;
  },
}

module.exports = create;