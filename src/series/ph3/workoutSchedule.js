var React = require('react');
var ReactNative = require('react-native');

var exerciseList = require('./exerciseList');

var schedule = {
  1: {
    exercises: exerciseList.bigThree,
    sets: [2, 2, 2],
    reps: [9, 9, 7],
  },
  2: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  3: {
    exercises: exerciseList.legsOne,
    sets: [3, 3, 2, 2, 4],
    reps: [7, 7, 10, 10, 8],
  },
  5: {
    exercises: exerciseList.upperBodyTwo,
    sets: [2, 3, 2, 2, 2, 2, 5, 3],
    reps: [4, 3, 15, 15, 15, 15, 15, 15],
  },
  6: {
    exercises: exerciseList.legsTwo,
    sets: [3, 4, 4, 3],
    reps: [5, 15, 15, 15],
  },
  8: {
    exercises: exerciseList.bigThree,
    sets: [3, 3, 2],
    reps: [9, 9, 7],
  },
  9: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  10: {
    exercises: exerciseList.legsOne,
    sets: [3, 3, 2, 2, 4],
    reps: [7, 7, 10, 10, 8],
  },
  12: {
    exercises: exerciseList.upperBodyTwo,
    sets: [3, 4, 2, 2, 2, 2, 5, 3],
    reps: [4, 5, 15, 15, 15, 15, 15, 15],
  },
  13: {
    exercises: exerciseList.legsTwo,
    sets: [4, 4, 4, 3],
    reps: [5, 15, 15, 15],
  },
  15: {
    exercises: exerciseList.bigThree,
    sets: [3, 3, 3],
    reps: [9, 9, 7],
  },
  16: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  17: {
    exercises: exerciseList.legsOne,
    sets: [4, 4, 2, 2, 4],
    reps: [7, 7, 10, 10, 8],
  },
  19: {
    exercises: exerciseList.upperBodyTwo,
    sets: [3, 4, 2, 2, 2, 2, 5, 3],
    reps: [4, 5, 15, 15, 15, 15, 15, 15],
  },
  20: {
    exercises: exerciseList.legsTwo,
    sets: [5, 4, 4, 3],
    reps: [5, 15, 15, 15],
  },
  22: {
    exercises: exerciseList.bigThree,
    sets: [4, 4, 2],
    reps: [4, 4, 4],
  },
  23: {
    exercises: exerciseList.fullBodyOne,
    sets: [2, 2, 4, 2, 3, 2, 2, 5, 5],
    reps: [10, 10, 8, 8, 8, 8, 7, 8, 8],
  },
  24: {
    exercises: exerciseList.bigThree,
    sets: [3, 3, 2],
    reps: [5, 5, 4],
  },
  29: {
    exercises: exerciseList.bigThree,
    sets: [2, 2, 2],
    reps: [8, 8, 6],
  },
  30: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 4, 4],
    reps: [8, 8, 8, 7, 8, 8],
  },
  31: {
    exercises: exerciseList.legsOne,
    sets: [3, 3, 2, 2, 4],
    reps: [6, 6, 10, 10, 8],
  },
  33: {
    exercises: exerciseList.upperBodyTwo,
    sets: [3, 4, 2, 2, 2, 2, 5, 3],
    reps: [3, 4, 15, 15, 15, 15, 15, 15]
  },
  34: {
    exercises: exerciseList.legsTwo,
    sets: [4, 2, 2, 4],
    reps: [4, 10, 10, 8],
  },
  36: {
    exercises: exerciseList.bigThree,
    sets: [3, 3, 3],
    reps: [8, 8, 6],
  },
  37: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 4, 4],
    reps: [8, 8, 8, 7, 8, 8],
  },
  38: {
    exercises: exerciseList.legsOne,
    sets: [4, 4, 2, 2, 4],
    reps: [6, 6, 10, 10, 8],
  },
  40: {
    exercises: exerciseList.upperBodyTwo,
    sets: [4, 5, 2, 2, 2, 2, 5, 3],
    reps: [3, 4, 15, 15, 15, 15, 15, 15]
  },
  41: {
    exercises: exerciseList.legsTwo,
    sets: [5, 4, 4, 3],
    reps: [4, 15, 15, 15],
  },
  43: {
    exercises: exerciseList.bigThree,
    sets: [4, 4, 4],
    reps: [8, 8, 6],
  },
  44: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 4, 4],
    reps: [8, 8, 8, 7, 8, 8],
  },
  45: {
    exercises: exerciseList.legsOne,
    sets: [5, 5, 2, 2, 4],
    reps: [6, 6, 10, 10, 8],
  },
  47: {
    exercises: exerciseList.upperBodyTwo,
    sets: [5, 5, 2, 2, 2, 2, 5, 3],
    reps: [3, 48, 15, 15, 15, 15, 15, 15]
  },
  48: {
    exercises: exerciseList.legsTwo,
    sets: [5, 4, 4, 3],
    reps: [4, 15, 15, 15],
  },
  50: {
    exercises: exerciseList.bigThree,
    sets: [5, 5, 3],
    reps: [3, 5, 3],
  },
  51: {
    exercises: exerciseList.fullBodyOne,
    sets: [2, 2, 4, 2, 3, 2, 2, 4, 4],
    reps: [10, 10, 8, 8, 8, 8, 7, 8, 8],
  },
  52: {
    exercises: exerciseList.bigThree,
    sets: [4, 4, 3],
    reps: [4, 4, 4],
  },
  57: {
    exercises: exerciseList.bigThree,
    sets: [3, 3, 3],
    reps: [7, 7, 5],
  },
  58: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 4, 4],
    reps: [8, 8, 8, 7, 8, 8],
  },
  59: {
    exercises: exerciseList.legsOne,
    sets: [3, 3, 2, 2, 4],
    reps: [5, 5, 10, 10, 8],
  },
  61: {
    exercises: exerciseList.upperBodyTwo,
    sets: [3, 4, 2, 2, 2, 2, 5, 3],
    reps: [2, 3, 15, 15, 15, 15, 15, 15],
  },
  62: {
    exercises: exerciseList.legsTwo,
    sets: [4, 4, 4, 3],
    reps: [3, 15, 15, 15],
  },
  64: {
    exercises: exerciseList.bigThree,
    sets: [4, 4, 4],
    reps: [7, 7, 5],
  },
  65: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  66: {
    exercises: exerciseList.legsOne,
    sets: [4, 4, 2, 4, 4],
    reps: [5, 5, 10, 8, 8],
  },
  68: {
    exercises: exerciseList.upperBodyTwo,
    sets: [4, 5, 2, 2, 2, 2, 5, 5],
    reps: [2, 3, 15, 15, 15, 15, 15, 15],
  },
  69: {
    exercises: exerciseList.legsTwo,
    sets: [6, 4, 4, 3],
    reps: [3, 15, 15, 15],
  },
  71: {
    exercises: exerciseList.bigThree,
    sets: [5, 5, 5],
    reps: [7, 7, 5],
  },
  72: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  73: {
    exercises: exerciseList.legsOne,
    sets: [5, 5, 2, 4, 4],
    reps: [5, 5, 10, 8, 8],
  },
  75: {
    exercises: exerciseList.upperBodyTwo,
    sets: [5, 5, 2, 2, 2, 2, 5, 5],
    reps: [2, 3, 15, 15, 15, 15, 15, 15],
  },
  76: {
    exercises: exerciseList.legsTwo,
    sets: [5, 2, 4, 4],
    reps: [3, 10, 8, 8],
  },
  78: {
    exercises: exerciseList.bigThree,
    sets: [5, 5, 6],
    reps: [7, 7, 5],
  },
  79: {
    exercises: exerciseList.upperBodyOne,
    sets: [2, 3, 2, 2, 5, 5],
    reps: [8, 8, 8, 7, 8, 8],
  },
  80: {
    exercises: exerciseList.legsOne,
    sets: [6, 6, 2, 4, 4],
    reps: [5, 5, 10, 8, 8],
  },
  82: {
    exercises: exerciseList.upperBodyTwoV2,
    sets: [6, 6, 2, 3, 2, 2, 4, 3],
    reps: [2, 3, 8, 8, 8, 7, 8, 8],
  },
  83: {
    exercises: exerciseList.legsTwo,
    sets: [6, 2, 4, 4],
    reps: [3, 10, 8, 8],
  },
  85: {
    exercises: exerciseList.bigThree,
    sets: [5, 5, 3],
    reps: [3, 3, 3],
  },
  86: {
    exercises: exerciseList.fullBodyTwo,
    sets: [2, 2, 4, 2, 2, 2, 2, 5, 5],
    reps: [10, 10, 8, 15, 15, 15, 15, 15, 15],
  },
  87: {
    exercises: exerciseList.bigThree,
    sets: [4, 4, 3],
    reps: [4, 4, 3],
  },
};

module.exports = schedule;