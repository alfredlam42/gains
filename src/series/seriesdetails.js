var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;
var Button = require('../common/button');
var realm = require('../class');
var search = require('../common/search');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Text>Name: {this.props.passProps.seriesName}</Text>
        <Text>Category: {this.props.passProps.category}</Text>
        <Text>Description: {this.props.passProps.description}</Text>
        <Text>Excercises Include:</Text>
        <Button text='Start This Series' onPress = {this.onSelectSeries} />
      </View>
    )
  },
  onSelectSeries: function(){
    var squat = search.findExercise('Squat');
    console.log(squat);
    var currentUser = realm.objects('User')[0];
    realm.write(() => {
      realm.create('Series', {
        id: realm.objects('Series').length + 1,
        name: 'PH3',
        maxes: [{id: 1, exercise: squat, maxWeight: 0}],
        workouts: [{id: 1, day: 0, exercises: [squat], set: [{value: 1}], reps: [{value: 10}], weight: [{value: 100}], completed: false}],
        completed: false,
      })
    });
    var newSeries = realm.objects('Series')[0];
    realm.write(() =>{
      currentUser.series.push(newSeries);
    })
    this.props.navigator.pop();
  }
})

var styles = StyleSheet.create({
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