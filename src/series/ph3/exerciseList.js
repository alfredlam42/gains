var React = require('react');
var ReactNative = require('react-native');
var realm = require('../../database/class');
var search = require('../../common/search');

var currentUser = realm.objects('User')[0];

var workouts = {
  all: ['Squat', 'Bench Press', 'Deadlift', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher', 'Leg Extension', 'Leg Curl', 'Calf Raise', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'],
  bigThree: ['Squat', 'Bench Press', 'Deadlift'],
  upperBodyOne: ['Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
  legsOne: ['Squat', 'Bench Press', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  upperBodyTwo: ['Deadlift', 'Bench Press', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'],
  upperBodyTwoV2: ['Deadlift', 'Bench Press', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
  legsTwo: ['Squat', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  fullBodyOne: ['Leg Extension', 'Leg Curl', 'Calf Raise', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
  fullBodyTwo: ['Leg Extension', 'Leg Curl', 'Calf Raise', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down']
};

module.exports = workouts;