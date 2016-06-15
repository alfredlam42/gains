var ReactNative = require('react-native');
const Realm = require('realm');

class intObject{}
intObject.schema = {
  name: 'intObject',
  primaryKey: 'value',
  properties: {
    value: 'int',
  }
};

class User {}
User.schema = {
  name:'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    password: 'string',
    age: {type: 'int', optional: true},
    height: {type: 'int', optional: true},
    weight: {type: 'int', optional: true},
    series: {type: 'list', objectType: 'Series'},
  },
};

class Series {}
Series.schema = {
  name: 'Series',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    maxes: {type: 'list', objectType: 'Max'},
    workouts: {type: 'list', objectType: 'Workout'},
    currentDay: 'int',
    completed: {type: 'bool', default: false},
  },
};

class seriesDisplay {}
seriesDisplay.schema = {
  name: 'seriesDisplay',
  primaryKey: 'name',
  properties: {
    name: 'string',
    exercises: {type: 'list', objectType: 'Exercise'},
    category: {type: 'list', objectType: 'Category'}
  }
};

class Category {}
Category.schema = {
  name: 'Category',
  primaryKey: 'name',
  properties: {
    name: 'string',
  }
};

class Max {}
Max.schema = {
  name: 'Max',
  primaryKey: 'exercise',
  properties: {
    exercise: 'string',
    maxWeight: 'int',
  }
};

class Exercise {}
Exercise.schema = {
  name: 'Exercise',
  primaryKey: 'name',
  properties: {
    name: 'string',
  }
};

class Workout {}
Workout.schema = {
  name: 'Workout',
  primaryKey: 'id',
  properties: {
    id: 'int',
    day: 'int',
    exercises: {type: 'list', objectType: 'Exercise'},
    set: {type: 'list', objectType: 'intObject'},
    reps: {type: 'list', objectType: 'intObject'},
    weight: {type: 'list', objectType: 'intObject'},
  }
};

var realm = new Realm({
  schema: [intObject, User, Series, seriesDisplay, Category, Max, Exercise, Workout],
  schemaVersion: 7,
});

module.exports = realm;