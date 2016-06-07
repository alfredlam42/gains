var React = require("react");
var ReactNative = require("react-native");
var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = ReactNative;
var realm = require('./src/class');

//Component
var Gains = React.createClass({
  render: function(){
    realm.write(() => {
      realm.create('User', {id: 1, name: 'Alfred', password: '12345'}, true);
      realm.create('Series', {id: 1, name: 'PH3'}, true);
    })
    var currentUser = realm.objects('User')[0];
    var series = realm.objects('Series')[0];
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
    )
  }
})

//Style
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

AppRegistry.registerComponent('gains', ()=>Gains);