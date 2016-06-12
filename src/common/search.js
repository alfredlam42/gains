var React = require('react');
var ReactNative = require('react-native');
var realm = require('../class');

var search = {
  //returns the first object
  find: function(className, property, value){
    var objects = realm.objects(className);
    var object = objects.filtered(property + ' = "' + value + '"');
    return object[0];
  },
  //syntax is different when the property is an int instead of a string so a different function is created
  findInt: function(className, property, value){
    var objects = realm.objects(className);
    var object = objects.filtered(property + ' = ' + value);
    return object[0];
  },
  //given a list of objects, returns the object with the given property and value if it exists
  findInList: function(list, property, value){
    for (var i = 0; i < list.length; i++){
      if(list[i][property] === value){
        return list[i];
      }
      else{
        return nil;
      }
    }
  },
  //finds the total amount of objects in a class
  findSizeOfClass: function(className){
    return realm.objects(className).length
  },
  //given a list of objects, return the last object in the list
  findLastElement: function(list){
    var lastElement = list[list.length - 1];
    return lastElement;
  },
  //given a list of values, returns a list of the objects with the properties equal to that value
  findObjects: function(className, property, valueList){
    var list = [];
    var objects = realm.objects(className);
    for (var i = 0; i < this.findSizeOfClass(className); i++){
      if(valueList.indexOf(objects[i][property]) > -1){
        list.push(objects[i]);
      }
    }
    return list;
  }
};

module.exports = search;