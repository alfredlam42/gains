var React = require('react');
var ReactNative = require('react-native');
var realm = require('../class');

var search = {
  find: function(className, property, value){
    var objects = realm.objects(className);
    var object = objects.filtered(property + ' = "' + value + '"');
    return object[0];
  },
  findInt: function(className, property, value){
    var objects = realm.objects(className);
    var object = objects.filtered(property + ' = ' + value);
    return object[0];
  },
  findInList: function(list, property, value){
    for (var i = 0; i < list.length; i++){
      if(list[i].property == value){
        return list[i];
      }
      else{
        return nil;
      }
    }
  },
  findSizeOf: function(className){
    return realm.objects(className).length
  }
};

module.exports = search;