var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;
var Button = require('../common/button');
var realm = require('../database/class');
var search = require('../common/search');
// var create = require('../common/create');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Text>Series Description</Text>
        <Button text='Start This Series' onPress = {this.onSelectSeries} />
      </View>
    )
  },
  onSelectSeries: function(){
    var newSeries = null;
    var currentUser = search.findInt('User', 'id', '1');
    realm.write(() => {
      newSeries = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: 'PH3',
        maxes: null,
        workouts: null,
        completed: false,
      });
      currentUser.series.push(newSeries);
    });
    create.multipleExercise(this.props.passProps.exercises); //or where the list of exercises come from
    create.multipleIntObjects();
    this.props.navigator.pop(); //or navigate it to whatever page
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