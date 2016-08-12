//This data needs to be run when the app is created

var ReactNative = require('react-native');
var realm = require('./class');
var create = require('../common/create');
var search = require('../common/search');

//create a list of exercises for each workout series even if exercise is already in another series
var ph3Exercises = [
  'Bench Press',
  'Bent Over Row',
  'Cable Triceps Press-down',
  'Calf Raise',
  'Deadlift',
  'Dumbbell Curl',
  'Dumbbell Row',
  'Dumbbell Skullcrusher',
  'Incline Dumbbell Bench Press',
  'Lateral Raise',
  'Leg Extension',
  'Leg Curl',
  'Machine Preacher Curl',
  'Pec-deck Fly',
  'Rest',
  'Squat',
  'Standing Military Press',
  'Pull-up',
  'Wide Grip Lat Pull-down',
];

//keep adding to categories and alphabetize them for easier search
var categories = [
  'Hypertrophy',
  'Endurance',
];

//keep adding more here to seed database
var seed = {
  seedDatabase: function(){
    create.multipleIntObjects();
    create.multipleExercises(ph3Exercises);
    create.multipleCategories(categories);
    create.seriesDisplay('PH3', ph3Exercises, ['Hypertrophy']);
  }
}

module.exports = seed