//This data needs to be run when the app is created

var ReactNative = require('react-native');
var realm = require('./class');
var create = require('../common/create');
var search = require('../common/search');

var series = {
  ph3: {
    name: 'PH3',
    categories: ['Hypertrophy'],
    description: 'The PH3 workout series is for more advanced lifters, people who have been working out for a while.\n\nThe main focus of this workout series is hypertrophy (muscle growth), which also leads to an increase in strength.\n\nDuration: 13 weeks\n\nSplit: 3 days - rest - 2 days - rest',
  }
}
//continue adding new exercises to this list
var exercises = [
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
  'Endurance',
  'Hypertrophy',
];

//keep adding more here to seed database
var seed = {
  seedDatabase: function(){
    create.multipleIntObjects();
    create.multipleExercises(exercises);
    create.multipleCategories(categories);
    create.seriesDisplay(series.ph3.name, series.ph3.categories, series.ph3.description);
  }
}

module.exports = seed