var React = require("react");
var ReactNative = require("react-native");
var {
  View,
  Text,
  StyleSheet,
  Navigator,
} = ReactNative;
var Button = require('./common/button');
var realm = require('./class');
var currentUser = realm.objects('User')[0];

module.exports = React.createClass({

  getInitialState: function() {
    return {
      name: '',
      series: ''
    };
  },
  render: function(){
    realm.write(() => {
      // realm.create('Exercise', {id: 1, name: 'Squat'}, true);
      // realm.create('Exercise', {id: 2, name: 'Bench'}, true);
      // realm.create('Exercise', {id: 3, name: 'Deadlift'}, true)
      // realm.delete(realm.objects('Max'));
      // realm.delete(realm.objects('Workout'));
      // realm.delete(realm.objects('Series'));
    })
    return (
      <View style={styles.container}>
        <Text>
          HOME SCREEN
        </Text>
        <Text style = {styles.welcome}>
          User: {currentUser.name}
          {'\n'} Password: {currentUser.password}
          {'\n'} Series: {currentUser.series.length}
        </Text>
        <Button text='PH3' onPress={this.onSeriesDetails}/>
      </View>
    )
  },
  onSeriesDetails: function(){
    this.props.navigator.push({name: 'seriesdetail', passProps: {seriesName: 'PH3', category: 'Hypertrophy', description: 'Make mad gains'}})
  },
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