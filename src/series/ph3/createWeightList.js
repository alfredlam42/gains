var React = require('react');
var ReactNative = require('react-native)');
var realm = require('../../database/class');
var search = require('../../common/search');


var weights = {
  createWeightList: function(exerciseList){
    var list = [];
    var maxes = search.findObjects('Max', 'exercise', exerciseList);

    maxes.forEach(function(max){
      list.push(max.maxWeight);
    })

    return list;
  },
}