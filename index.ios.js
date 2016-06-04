/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Realm = require('realm');

class intObject{}
intObject.schema = {
  name: 'intObject',
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
    categories: {type: 'list', objectType: 'Category'},
    maxes: {type: 'list', objectType: 'Max'},
    workouts: {type: 'list', objectType: 'Workout'},
  },
};

class Category {}
Category.schema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
  }
};

class Max {}
Max.schema = {
  name: 'Max',
  primaryKey: 'id',
  properties: {
    id: 'int',
    exercise: 'Exercise',
    maxWeight: 'int',
  }
};

class Exercise {}
Exercise.schema = {
  name: 'Exercise',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
  }
};

class Workout {}
Workout.schema = {
  name: 'Workout',
  primaryKey: 'id',
  properties: {
    id: 'int',
    week: 'int',
    day: 'int',
    exercises: {type: 'list', objectType: 'Exercise'},
    set: {type: 'list', objectType: 'intObject'},
    reps: {type: 'list', objectType: 'intObject'},
    weight: {type: 'list', objectType: 'intObject'},
  }
};

class gains extends Component {
  render() {
    let realm = new Realm({
      schema: [intObject, User, Series, Category, Max, Exercise, Workout],
      schemaVersion: 1,
    });

    realm.write(() => {
      realm.create('User', {id: 1, name: 'Alfred', password: '12345'}, true);
      realm.create('Series', {id: 1, name: 'PH3'}, true);
    })

    let currentUser = realm.objects('User')[0];
    let series = realm.objects('Series')[0];

    // realm.write(() =>{
    //   currentUser.series.push(series);
    // })

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Counts of Users in Realm: {realm.objects('User').length}
          {'\n'}First User: {currentUser.name}
          {'\n'}Password: {currentUser.password}
          {'\n'}Id: {currentUser.id}
          {'\n'}Workouts: {currentUser.series.length}
          {'\n'}
          {'\n'}Workout: {currentUser.series.length}
          {'\n'}Counts of Series in Realm: {realm.objects('Series').length}
          {'\n'}Series Name: {series.name}
          {'\n'}Id: {series.id}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('gains', () => gains);
