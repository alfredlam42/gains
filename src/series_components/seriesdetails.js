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
var create = require('../common/create');

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.seriesDetail}>{this.props.route.seriesDetail.name}</Text>
        <Button text='Start This Series' onPress = {this.onSelectSeries} />
        <Button text='Back' onPress = {this.onBackButtonPress} />
      </View>
    )
  },
  onSelectSeries: function(){
    var newSeries = null;
    var currentUser = search.findInt('User', 'id', '1');

    currentUser.series.map(function(series){
      realm.write(() => {
        series.active = false;
      })
    });

    realm.write(() => {
      realm.create('Series', {
        id: search.findSizeOfClass('Series') + 1,
        name: this.props.route.seriesDetail.name,
        maxes: null,
        workouts: null,
        currentDay: 0,
        completed: false,
        active: true,
        picture: 'https://static.pexels.com/photos/17840/pexels-photo.jpg',
      })
    });

    {this.props.navigator.immediatelyResetRouteStack([{ name: 'seriesList' }])}; //or navigate it to whatever page
  },
  onBackButtonPress: function() {
    {this.props.navigator.pop()}
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  seriesDetail: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E0DFE4',
    textAlign: 'center'
  }
});