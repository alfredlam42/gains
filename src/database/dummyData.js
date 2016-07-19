//Dummy data for testing.
//Delete before merging to master.

var ReactNative = require('react-native');
var realm = require('./class');
var create = require('../common/create');
var search = require('../common/search');

var exercises = [
  'Squat',
  'Bench Press',
  'Deadlift'
]

var categories = [
  'Hypertrophy',
  'Endurance',
]

var dummy = {
  seedDummyData: function(){
    create.seriesDisplay('Stronglift 5x5', exercises, ['Hypertrophy']);
    create.seriesDisplay('German Volume Training', exercises, ['Hypertrophy']);
    create.seriesDisplay("Beginner's Weightlifting Training", exercises, ['Hypertrophy'])
    realm.write(() => {
      var oneObject = realm.create('intObject', {
        value: 1
      }, true);
      var plateObject = realm.create('intObject', {
        value: 135
      }, true);
      var dummySeries1 = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: 'PH3',
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: true,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      });
      var dummySeries2 = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: 'Stronglift 5x5',
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: true,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      });
      var dummySeries3 = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: 'German Volume Training',
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: true,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      });
      var dummySeries4 = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: "Beginner's Weightlifting Training",
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: false,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      });
      var dummyWorkout1 = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 0,
        exercises: search.findObjects('Exercise', 'name', exercises),
        sets: [oneObject, oneObject, oneObject],
        reps: [oneObject, oneObject, oneObject],
        weight: [plateObject, plateObject, plateObject]
      });
      var dummyWorkout2 = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 1,
        exercises: search.findObjects('Exercise', 'name', exercises),
        sets: [oneObject, oneObject, oneObject],
        reps: [oneObject, oneObject, oneObject],
        weight: [plateObject, plateObject, plateObject]
      });
      var dummyWorkout3 = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 2,
        exercises: search.findObjects('Exercise', 'name', exercises),
        sets: [oneObject, oneObject, oneObject],
        reps: [oneObject, oneObject, oneObject],
        weight: [plateObject, plateObject, plateObject]
      });
      var dummyWorkout4 = realm.create('Workout', {
        id: search.findSizeOfClass('Workout') + 1,
        day: 3,
        exercises: search.findObjects('Exercise', 'name', exercises),
        sets: [oneObject, oneObject, oneObject],
        reps: [oneObject, oneObject, oneObject],
        weight: [plateObject, plateObject, plateObject]
      });
      var maxSquat = realm.create('Max', {
        exercise: 'Squat',
        maxWeight: 405
      }, true);
      var maxBench = realm.create('Max', {
        exercise: 'Bench Press',
        maxWeight: 315
      }, true);
      var maxDeadlift = realm.create('Max', {
        exercise: 'Deadlift',
        maxWeight: 405
      }, true);

      dummySeries1.workouts = [dummyWorkout1, dummyWorkout2, dummyWorkout3, dummyWorkout4];
      dummySeries1.maxes = [maxSquat, maxBench, maxDeadlift];
      dummySeries1.currentDay = 4;

      dummySeries2.workouts = [dummyWorkout1, dummyWorkout2, dummyWorkout3, dummyWorkout4];
      dummySeries2.maxes = [maxSquat, maxBench, maxDeadlift];
      dummySeries2.currentDay = 4;

      dummySeries3.workouts = [dummyWorkout1, dummyWorkout2, dummyWorkout3];
      dummySeries3.maxes = [maxSquat, maxBench, maxDeadlift];
      dummySeries3.currentDay = 3;

      dummySeries4.workouts = [dummyWorkout1, dummyWorkout2];
      dummySeries4.maxes = [maxSquat, maxBench, maxDeadlift];
      dummySeries4.currentDay = 2;

      var currentUser = search.findInt('User', 'id', 1);
      currentUser.series = [dummySeries1, dummySeries2, dummySeries3, dummySeries4]
    });
  },
  deleteAll: function(){
    realm.write(() => {
      realm.delete(realm.objects('Series'));
      realm.delete(realm.objects('seriesDisplay'));
      realm.delete(realm.objects('Category'));
      realm.delete(realm.objects('Max'));
      realm.delete(realm.objects('Exercise'));
      realm.delete(realm.objects('Workout'));
    })
  },
  deleteClass: function(className){
    realm.write(() => {
      realm.delete(realm.objects(className));
    })
  }
}

module.exports = dummy;