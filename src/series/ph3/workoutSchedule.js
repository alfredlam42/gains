var React = require('react');
var ReactNative = require('react-native');
var realm = require('../../database/class');
var search = require('../../common/search');

var currentUser = realm.objects('User')[0];
var maxes = currentUser.series[currentUser.series.length - 1].maxes;

var workouts = {
  bigThree: ['Squat', 'Bench Press', 'Deadlift'],
  upperBodyOne: ['Incline Dumbbell Bench Press', 'Weighted Pull-up', 'T-Bar Row', 'Seated Military Press', 'Dumbbell Curl', 'BFR Machine Bicep Curls', 'Dumbbell Skullcrusher', 'BFR Triceps Press-Down'],
  legsOne: ['Squat', 'Bench Press', 'Leg Extension', 'Leg Curl', 'Calf Raise', 'BFR Calf Raise'],
  upperBodyTwo: ['Deadlift', 'Bench Press', 'Pec-Deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-Down', 'BFR Cable Triceps Press-Down'],
  legsTwo: ['Squat', 'BFR Leg Extension', 'BFR Leg Curl', 'Calf Raise', 'BFR Calf Raise'],
  fullBody: ['Leg Extension', 'Leg Curl', 'Calf Raise', 'Incline Dumbbell Bench Press', 'Weighted Pull-up', 'T-Bar Row', 'Seated Military Press', 'Dumbbell Curl', 'BFR Machine Bicep Curl', 'Dumbbell Skullcrusher', 'BFR Triceps Press-Down'],
  rest: ['Rest']
};

var schedule = {
  1: {
    exercises: workouts.bigThree,
    sets: [2, 2, 2],
    reps: [9, 9, 7],
    weight: [315, 225, 315]
  }
}

module.exports = schedule;