var React = require('react');
var ReactNative = require('react-native');
var realm = require('../../database/class');
var search = require('../../common/search');

var currentUser = realm.objects('User')[0];
var maxes = currentUser.series[currentUser.series.length - 1].maxes;

var workouts = {
  bigThree: ['Squat', 'Bench Press', 'Deadlift'],
  upperBodyOne: ['Incline Dumbbell Bench Press', 'Weighted Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
  legsOne: ['Squat', 'Bench Press', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  upperBodyTwo: ['Deadlift', 'Bench Press', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'],
  legsTwo: ['Squat', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  fullBody: ['Leg Extension', 'Leg Curl', 'Calf Raise', 'Incline Dumbbell Bench Press', 'Weighted Pull-up', 'Bent Over Barbell Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
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