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
    var newSeries = null;
    var currentUser = search.findInt('User', 'id', '1');
    realm.write(() => {
      newSeries = realm.create('Series', {
        id: search.findSizeOf('Series') + 1,
        name: 'PH3',
        maxes: null,
        workouts: null,
        completed: false,
      })
    });
    var seriesList = realm.objects('Series');
    realm.write(() =>{
      currentUser.series.push(newSeries);
    })
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