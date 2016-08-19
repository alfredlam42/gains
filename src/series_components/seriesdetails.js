var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactNative;
var Button = require('../common/button');
var Header = require('../common/header');
var realm = require('../database/class');
var search = require('../common/search');
var create = require('../common/create');

module.exports = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header navigator={this.props.navigator}/>
        <View style={styles.seriesInfo}>
          <View>
            <Text style={styles.name}>{this.props.route.seriesDetail.name}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{this.props.route.seriesDetail.description}</Text>
          </View>

          <View style={styles.buttons}>
            <Button text='Start This Series' onPress = {this.onSelectSeries} />
            <Button text='Back' onPress = {this.onBackButtonPress} />
          </View>
        </View>
      </View>
    )
  },
  onSelectSeries: function(){
    var newSeries = null;
    var currentUser = search.findInt('User', 'id', '1');
    var workout = null;

    currentUser.series.map(function(series){
      realm.write(() => {
        series.active = false;
      })
    });

    realm.write(() => {
      workout = realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: this.props.route.seriesDetail.name,
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: false,
        active: true,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      })
      currentUser.series.push(workout);
    });
    {this.props.changeState()}
    {this.props.navigator.immediatelyResetRouteStack([{ name: 'seriesList' }])};
  },
  onBackButtonPress: function() {
    {this.props.navigator.pop()}
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#29292B',
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
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E0DFE4',
    textAlign: 'center'
  },
  seriesInfo: {
    flex: 7,
  },
  buttons: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  descriptionContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    color: '#E0DFE4',
    fontSize: 16,
  }
});