var React = require('react');
var ReactNative = require('react-native');
var realm = require('../../database/class');
var search = require('../../common/search');

var currentUser = realm.objects('User')[0];
var maxes = currentUser.series[currentUser.series.length - 1].maxes;

var workouts = {
  all: ['Squat', 'Bench Press', 'Deadlift', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher', 'Leg Extension', 'Leg Curl', 'Calf Raise', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'],
  bigThree: ['Squat', 'Bench Press', 'Deadlift'],
  upperBodyOne: ['Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
  legsOne: ['Squat', 'Bench Press', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  upperBodyTwo: ['Deadlift', 'Bench Press', 'Pec-deck Fly', 'Wide Grip Lat Pull-down', 'Dumbbell Row', 'Lateral Raise', 'Machine Preacher Curl', 'Cable Triceps Press-down'],
  legsTwo: ['Squat', 'Leg Extension', 'Leg Curl', 'Calf Raise'],
  fullBody: ['Leg Extension', 'Leg Curl', 'Calf Raise', 'Incline Dumbbell Bench Press', 'Pull-up', 'Bent Over Row', 'Standing Military Press', 'Dumbbell Curl', 'Dumbbell Skullcrusher'],
};

// var schedule = {
//   0: {
//     exercises: workouts.all,
//     sets: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     reps: [1, 1, 1, 8, 0, 8, 7, 8, 8, 10, 10, 10, 15, 15, 15, 15, 15, 15]
//   },
//   1: {
//     exercises: workouts.bigThree,
//     sets: [2, 2, 2],
//     reps: [9, 9, 7],
//     weightList: search.findObjects('Max', 'exercise', workouts.bigThree),
//     weight: function(){
//       return [this.weightList[0] * 0.72, this.weightList[1] * 0.72, this.weightList[2] * 0.72]
//     }
//   },
//   2: {
//     exercises: workouts.upperBodyOne,
//     sets: [2, 3, 2, 2, 5, 5],
//     reps: [8, 8, 8, 7, 8, 8],
//     weightList: search.findObjects('Max', 'exercise', workouts.upperBodyOne),
//     weight: function(){
//       return [this.weightList[0] - 5, this.weightList[1] - 0, this.weightList[2] - 10, this.weightList[3] - 5, this.weightList[4] - 5, this.weightList[5] - 10]
//     }
//   },
//   3: {
//     exercises: workouts.legsOne,
//     sets: [3, 3, 2, 2, 4],
//     reps: [7, 7, 10, 10, 8],
//     weightList: search.findObjects('Max', 'exercise', workouts.legsOne),
//     weight: function(){
//       return [this.weightList[0] * 0.77, this.weightList[1] * 0.77, this.weightList[2], this.weightList[3], this.weightList[4]]
//     }
//   },
//   4: {
//     exercises: workouts.rest,
//   },
//   5: {
//     exercises: workouts.upperBodyTwo,
//     sets: [2, 3, 2, 2, 2, 2, 5, 3],
//     reps: [4, 3, 15, 15, 15, 15, 15, 15],
//     weightList: search.findObjects('Max', 'exercise', workouts.upperBodyTwo),
//     weight: function(){
//       return [this.weightList[0] * 0.82, this.weightList[1] * 0.82, this.weightList[2], this.weightList[3], this.weightList[4], this.weightList[5], this.weightList[6] - 15, this.weightList[7] - 10]
//     }
//   },
//   6: {
//     exercises: workouts.legsTwo,
//     sets: [3, 4, 4, 3],
//     reps: [5, 15, 15, 15],
//     weightList: search.findObjects('Max', 'exercise', workouts.legsTwo),
//     weight: function(){
//       return [this.weightList[0] * 0.82, this.weightList[1] - 20, this.weightList[2] - 20, this.weightList[3] - 25]
//     }
//   },
//   7: {
//     exercises: workouts.rest
//   }
// }

module.exports = workouts;